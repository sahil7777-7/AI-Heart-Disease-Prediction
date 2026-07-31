function InputField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  error,
  placeholder,
  options = [],
}) {
  const isSelect = type === 'select';

  return (
    <div className="input-group">
      <div className={`input-container ${error ? 'has-error' : ''}`}>
        <span className="input-label">
          {label}
        </span>
        {isSelect ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="select-control"
          >
            <option value="">Select option...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="input-control"
          />
        )}
      </div>
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}

export default InputField;
