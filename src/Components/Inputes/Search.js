import React from "react";
import Search from "antd/lib/transfer/search"
const SearchInput = ({ setValue, value }) => {

   
     
     return (
          <div className='search-input'>
               <Search  value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Qidiruv" className='medium-16' />
          </div>
     )
}
export default SearchInput
