import React from 'react';

const cities = ['Kherson', 'Kyiv', 'Palo Alto'];

export default function CitySelect({ name, value, onChange }) {
  return (   
    <select name={name} value={value} onChange={onChange}>
      <option key={-1} value=""></option>
      {cities.map((cityName, idx) => (
        <option key={idx} value={cityName}>{cityName}</option>
      ))}
    </select>
  )
}
