import React, { useEffect } from 'react';
import { Dropdown, Button, Menu } from 'antd'
import Icon from '../Icon';

const MyDropDown = ({ data = [], value, setValue, error, setError, placeholder, label  }) => {

     useEffect(() => {
          if (error) {
               setError(false)
          }
     }, [value])


     const menu = (
          <Menu className="dropdown-wrapper-menu">
               {
                    data.map((item, i) => (
                         <Menu.Item onClick={() => setValue(item)} key={i.toString()}>{item.name}</Menu.Item>
                    ))
               }
          </Menu>
     );

     return <div className={`dropdown-wrapper ${error ? 'error' : ''}`}>
          {label && <label>{label}</label>}
          <Dropdown overlay={menu} trigger={['click']}>
               {
                    value ?
                         <Button>{value?.name}  <Icon icon="chevron-down" /></Button> :
                         <Button className='placeholder'>{placeholder || ''} <Icon icon="chevron-down" /></Button>
               }
          </Dropdown>
     </div>
};

export default MyDropDown;
