import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Activity, Droplets, Flame, Stethoscope, RotateCcw, LoaderCircle, ShieldPlus } from 'lucide-react';
import InputField from './InputField';
import ResultCard from './ResultCard';
import SectionCard from './SectionCard';
import { fieldGroups, initialFormState } from '../data/formFields';
import { fieldSections } from '../data/fieldSections';
import { predictHeartDisease } from '../services/predictHeartDisease';

const sectionIconMap = {
  personal: <HeartPulse size={20} />,
  blood: <Droplets size={20} />,
  lifestyle: <Flame size={20} />,
  history: <Stethoscope size={20} />,
};

function validateField(field, value) {
  if (value === '' || value === null || value === undefined) {
    return 'This field is required.';
  }

  if (field.type === 'number' && Number.isNaN(Number(value))) {
    return 'Enter a valid number.';
  }

  return '';
}

function PredictionForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
  }

  function validateForm() {
    const nextErrors = {};

    fieldGroups.forEach((field) => {
      const validationMessage = validateField(field, formData[field.name]);
      if (validationMessage) {
        nextErrors[field.name] = validationMessage;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitMessage('');

    if (!validateForm()) {
      setResult(null);
      setSubmitMessage('Please complete all required clinical telemetry parameters before running diagnostic prediction.');
      return;
    }

    setLoading(true);

    try {
      const prediction = await predictHeartDisease(formData);
      setResult(prediction);
      setSubmitMessage('Diagnostic prediction complete.');
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setFormData(initialFormState);
    setErrors({});
    setResult(null);
    setSubmitMessage('');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="form-wrapper"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <span className="badge-tag" style={{ width: 'fit-content' }}>
          <ShieldPlus size={14} />
          Diagnostic Form
        </span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700 }}>
          Patient Health Parameters
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Fill out all diagnostic parameters below to evaluate cardiovascular risk factors.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {fieldSections.map((section) => {
          const sectionFields = section.fields
            .map((fieldName) => fieldGroups.find((field) => field.name === fieldName))
            .filter(Boolean);

          return (
            <SectionCard
              key={section.key}
              icon={sectionIconMap[section.key]}
              title={section.title}
              description={section.description}
            >
              {sectionFields.map((field) => (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  type={field.type}
                  options={field.options}
                  placeholder={field.placeholder}
                  error={errors[field.name]}
                />
              ))}
            </SectionCard>
          );
        })}

        {submitMessage ? (
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-red)' }} role="status">
            {submitMessage}
          </p>
        ) : null}

        <div className="form-actions">
          <button type="button" onClick={handleReset} className="btn btn-reset">
            <RotateCcw size={16} />
            Reset Parameters
          </button>
          <button type="submit" disabled={loading} className="btn btn-predict">
            {loading ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Analyzing Telemetry...
              </>
            ) : (
              <>
                <Activity size={18} />
                Run AI Diagnosis
              </>
            )}
          </button>
        </div>
      </form>

      <AnimatePresence mode="wait">
        {result ? <ResultCard key="result-card" result={result} /> : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default PredictionForm;
