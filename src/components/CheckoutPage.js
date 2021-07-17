import React from 'react';
import { Field, Formik } from 'formik';
import CitySelect from './CitySelect';
import DeliveryOptions from './DeliveryOptions';

function submit(person) {
  console.log('submitted', person);
}

export default function CheckoutPage() {
  return (
    <Formik
      initialValues={{
        contact: {
          firstName: 'Steve',
          lastName: 'Jobs',
          phone: '777',
          city: 'Palo Alto',
        },
        delivery: {
          type: ''
        }
      }}
      onSubmit={submit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <h5>Contact person</h5>
            <Field name='contact.firstName' />
            <Field name='contact.lastName' />
            <Field name='contact.phone' />
            <Field name='contact.city' as={CitySelect} />
            
            <h5>Delivery</h5>
            <Field name='delivery.type' as={DeliveryOptions} />

            <button type='submit'>Submit</button>
          </form>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </>
      )}
    </Formik>
  )
}
