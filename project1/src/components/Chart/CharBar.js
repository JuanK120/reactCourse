import React from 'react';

import './ChartBar.css';

const ChartBar = (args) => {
  let barFillHeight = '0%';

  if (args.maxValue > 0) {
    barFillHeight = Math.round((args.value / args.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{args.label}</div>
    </div>
  );
};

export default ChartBar;