import React from 'react'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
const ContactFormNetlify = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(25, 'Must be 25 characters or less')
            .required('Name is Required!'),
        email: Yup.string()
            .email('Enter a Valid Email!')
            .required('Email is Required!'),
        message: Yup.string()
            .max(250, 'Must be 255 characters or less')
            .required('Message is Required!'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/", {                                 
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            setSubmitting(false)
          })
          .catch(error => {
            alert('Error: Please Try Again!')                            
            setSubmitting(false)
          })
      }}
      render={({
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (
        <form className='form'
        name='contact'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-recaptcha="true"
        data-netlify-honeypot='bot-field'
      >
        <div className='field'>
          <label htmlFor='name' className='label'>Your Name:</label>
          <Field
            className='input'
            type='text'
            name='name'
          />
         {touched.name && errors.name && <p className='danger'>{errors.name}</p>}
        </div>
        <div className='field'>
          <label htmlFor='email' className='label'>Your Email:</label>
          <Field
            className='input'
            type='text'
            name='email'
          />
         {touched.email && errors.email && <p className='danger'>{errors.email}</p>}
        </div>
        <div className='field'>
          <label htmlFor='message' className='label'>Message:</label>
          <Field
            className='input-textarea'
            name='message'
            component='textarea'
            rows='5'
          />
         {touched.message && errors.message && <p className='danger'>{errors.message}</p>}
        </div>
        <div className="buttons-cnt">
            <div data-netlify-recaptcha="true"></div>
        <div className='buttons'>
          <input type='reset' value='Clear'
            className='button' />
          <input name='submit' type='submit' disabled={isSubmitting} value='Send'
            className='button' />
        </div>
        </div>
      </form>
      )}
    />
  )
}

export default ContactFormNetlify