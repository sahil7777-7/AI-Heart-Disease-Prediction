export const yesNoOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];

export const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

export const chestPainOptions = [
  { label: 'Typical Angina', value: 'typical_angina' },
  { label: 'Atypical Angina', value: 'atypical_angina' },
  { label: 'Non-Anginal Pain', value: 'non_anginal_pain' },
  { label: 'Asymptomatic', value: 'asymptomatic' },
];

export const smokerOptions = [
  { label: 'Never', value: 'never' },
  { label: 'Former', value: 'former' },
  { label: 'Current', value: 'current' },
];

export const fieldGroups = [
  { name: 'age', label: 'Age', type: 'number', placeholder: 'e.g. 54' },
  { name: 'gender', label: 'Gender', type: 'select', options: genderOptions },
  { name: 'resting_systolic_bp', label: 'Resting Systolic BP', type: 'number', placeholder: 'e.g. 130' },
  { name: 'resting_diastolic_bp', label: 'Resting Diastolic BP', type: 'number', placeholder: 'e.g. 82' },
  { name: 'total_cholesterol', label: 'Total Cholesterol', type: 'number', placeholder: 'e.g. 210' },
  { name: 'hdl', label: 'HDL', type: 'number', placeholder: 'e.g. 52' },
  { name: 'ldl', label: 'LDL', type: 'number', placeholder: 'e.g. 118' },
  { name: 'triglycerides', label: 'Triglycerides', type: 'number', placeholder: 'e.g. 150' },
  { name: 'fasting_blood_sugar', label: 'Fasting Blood Sugar', type: 'number', placeholder: 'e.g. 95' },
  { name: 'hba1c', label: 'HbA1c', type: 'number', placeholder: 'e.g. 5.6' },
  { name: 'bmi', label: 'BMI', type: 'number', placeholder: 'e.g. 24.8' },
  { name: 'resting_heart_rate', label: 'Resting Heart Rate', type: 'number', placeholder: 'e.g. 72' },
  { name: 'max_heart_rate_achieved', label: 'Maximum Heart Rate Achieved', type: 'number', placeholder: 'e.g. 155' },
  { name: 'chest_pain_type', label: 'Chest Pain Type', type: 'select', options: chestPainOptions },
  { name: 'exercise_induced_angina', label: 'Exercise Induced Angina', type: 'select', options: yesNoOptions },
  { name: 'st_depression', label: 'ST Depression', type: 'number', placeholder: 'e.g. 1.2' },
  { name: 'family_history', label: 'Family History', type: 'select', options: yesNoOptions },
  { name: 'smoker_status', label: 'Smoker Status', type: 'select', options: smokerOptions },
  { name: 'alcohol_units_per_week', label: 'Alcohol Units per Week', type: 'number', placeholder: 'e.g. 4' },
  { name: 'exercise_minutes_per_week', label: 'Exercise Minutes per Week', type: 'number', placeholder: 'e.g. 180' },
  { name: 'sleep_hours', label: 'Sleep Hours', type: 'number', placeholder: 'e.g. 7' },
  { name: 'stress_score', label: 'Stress Score', type: 'number', placeholder: 'e.g. 4' },
  { name: 'wearable_owner', label: 'Wearable Device Owner', type: 'select', options: yesNoOptions },
  { name: 'daily_steps', label: 'Daily Steps', type: 'number', placeholder: 'e.g. 8000' },
  { name: 'diet_quality_score', label: 'Diet Quality Score', type: 'number', placeholder: 'e.g. 7' },
];

export const initialFormState = fieldGroups.reduce((accumulator, field) => {
  accumulator[field.name] = '';
  return accumulator;
}, {});
