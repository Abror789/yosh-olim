import React from 'react';
import PhoneInput from 'react-phone-number-input'
import { useEffect } from 'react';
import 'react-phone-number-input/style.css'




const Phone = ({ value, setValue, disabled, error, label, placeholder, setError, setCountry }) => {

     useEffect(() => {
          if (error) {
               setError(false)
          }
     }, [value])




     return <div className={`phone-input-wrapper ${error ? 'error' : ''}`}>
          {label && <label>{label}</label>}
          <PhoneInput
               international
               value={value}
               onChange={setValue}
               defaultCountry={"UZ"}
               name="phone"
               autoComplete='off'
               disabled={disabled}
               placeholder={placeholder || ''}
          // onCountryChange={handleCountryName}
          />
     </div>;
};

export default Phone;
