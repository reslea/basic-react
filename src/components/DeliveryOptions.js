import React from 'react';

const deliveryTypes = ['store', 'courier', 'nova_poshta'];

export default function DeliveryOptions({ name, value, onChange }) {
  return (
    <>
      {deliveryTypes.map((type, idx) => (
        <input 
          type='radio'
          name={name}
          value={type}
          key={idx}
          onChange={onChange}
          checked={type === value}  
        />
    ))}
    </>
  )
}
