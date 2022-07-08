import React, { useState} from 'react';
import './ExpensesFilter.css';

import './ExpensesFilter.css';

const ExpensesFilter = (args) => {

  const [dataFilter, SetDataFilter] = useState('');

  const submitDataFilter = (event) => {
    SetDataFilter(event.target.value);
    args.onFilterChange(dataFilter);

  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={submitDataFilter}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

