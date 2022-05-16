import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
const TextFeild = ({ value, setValue, error, setError, required, disabled, placeholder, label, price, type, textarea, inputProps = {}, rows }) => {

     useEffect(() => {
          if (error) {
               setError(false)
          }
     }, [value])

     return <div className={`input-wrapper ${error ? 'error' : ''}`}>
          {label && <label htmlFor="">{label}</label>}
          {
               !price ?
                    !textarea ?
                         <input type={type || "text"} placeholder={placeholder || ''} value={value} onChange={e => setValue(e.target.value)} required={required} disabled={disabled} {...inputProps} min="0" />
                         :
                         <textarea placeholder={placeholder || ''} value={value} onChange={e => setValue(e.target.value)} rows={rows || 3} required={required} />
                    :
                    <NumberFormat placeholder={placeholder || ''} value={value} onValueChange={e => setValue(e.value)} required={required} disabled={disabled} thousandSeparator="," />
          }
          {error && <span className="error-text">{error}</span>}
     </div>
};

export default TextFeild;
