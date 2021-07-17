import React, { useEffect, useState } from 'react';

function submit(e) {
  e.preventDefault();
  console.log('submitted');
}

export default function CheckoutPage() {
  const [formState, setFormState] = useState({
    firstName: 'Steve',
    lastName: 'Jobs',
    phone: '777',
    city: 'Palo Alto',
  });

  const [formErrorState, setFormErrorState] = useState({ });

  function handleInputChange(e) {
    const changedFieldName = e.target.name;
    const newValue = e.target.value;
    
    setFormState(prevFormState => ({
      ...prevFormState,
      [changedFieldName]: newValue
    }));
  }

  useEffect(() => {
    let errors = {};
    if(!formState.firstName) {
      errors = {...errors, firstName: 'required' };
    }
    
    setFormErrorState(errors);
  }, [formState, setFormErrorState]);

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input name='firstName' value={formState.firstName} onChange={handleInputChange} />
          {formErrorState.firstName && <span style={{ color: 'red' }}>{formErrorState.firstName}</span>}
        </div>
        <div>
          <input name='lastName' value={formState.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <input name='phone' value={formState.phone} onChange={handleInputChange} />
        </div>
        <div>
          <input name='city' value={formState.city} onChange={handleInputChange} />
        </div>        

        <button type='submit'>Submit</button>
      </form>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  )
}
