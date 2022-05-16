import React, { useEffect } from 'react'
import { Select } from 'antd'
import Icon from '../Icon'

const { Option } = Select

const MySelect = ({
  data = [],
  label = '',
  disabled = false,
  error = false,
  optionLable = 'name',
  optionValue = 'value',
  placeholder = '',
  setError = {},
  value = null,
  setValue = {},
  onSearch = null,
  visible = true
}) => {

  useEffect(() => {
    if (error) {
      setError(false)
    }
  }, [value])

  return (
    visible &&
    <div className={`selection-wrapper ${error ? 'error' : ''}`}>
      {label && <label htmlFor="">{label}</label>}
      <Select
        value={value}
        onChange={setValue}
        onSearch={onSearch}
        showSearch
        placement="bottomLeft"
        disabled={disabled}
        placeholder={placeholder}
        suffixIcon={<Icon icon="chevron-down" />}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        getPopupContainer={() => document.getElementById('pages-layout-sidebar')}
      >
        {
          data && data.map((item, i) => (
            <Option value={item[optionValue]} key={i}>{item[optionLable]}</Option>
          ))
        }
      </Select>
      {error && <span className="error-text">{error}</span>}
    </div >
  )
}

export default MySelect
