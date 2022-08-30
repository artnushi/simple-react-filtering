import React, { useState } from 'react';
import {CUSTOM_DATA} from "../utils/helpers/data";

function SearchFilter(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      setSearchTerm( e.target.value );
    };

    return (
        <>
          <h4>How to filter data with React</h4>
          <input type="text" onChange={ handleSearch } placeholder={'Search..'} style={{padding: '5px', width: '300px', height: '25px'}}/>

          <br/><br/>

          {CUSTOM_DATA.filter( (item, index ) => {
            if (index  <= 100) {
              if (item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.last_name.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase()) ) {
                return item;
              }
            }
          }).map( (data) => {
            return (
                <>
                  <div key={data.id}>{data.id}. {data.first_name} {data.last_name} - {data.email}</div> <br />
                </>
            )
          })}
        </>

    );
}

export default SearchFilter;