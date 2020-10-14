import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

export default function ContactForm() {
    const encode = (data) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      }

    return (
        <>
        <Formik 
            initialValues={{firstName: '', email: '', message: ''}}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                message: Yup.string()
                    .max(255, 'Must be 255 characters or less')
                    .required('Required')
            })}
            onSubmit={(values, actions) => {
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "contact-demo", ...values })
                  })
                  .then(() => {
                    alert('Success');
                    actions.resetForm()
                  })
                  .catch(() => {
                    alert('Error');
                  })
                  .finally(() => actions.setSubmitting(false))
            }}
        >
            <Form className="contact-form" name="contact-demo" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                <label htmlFor="firstName">Your name:</label>
                <Field as={StyledInput} name="firstName" type="text"/>
                <ErrorMessage component={StyledError} name="firstName"/>

                <label htmlFor="email">Your email: </label>
                <Field as={StyledInput} name="email" type="email"/>
                <ErrorMessage component={StyledError} name="email"/>

                <label htmlFor="message">Message:</label>
                <Field as={StyledTextarea} name="message" type="text" autocomplete="off"  rows='4'/>
                <ErrorMessage component={StyledError} name="message"/>
                <ButtonCaptchaCnt>
                    <div data-netlify-recaptcha="true"></div>
                    <FormButton type='submit'>Send</FormButton>
                </ButtonCaptchaCnt>
            </Form>

        </Formik>
        </>
    )
}


const StyledInput = styled.input`
    width: 100%;
    padding: 0.3rem 0.2rem;
    margin-top: 0.1rem; 
    color: white;
    background: none;
    border: 2px solid white;
    border-radius: 5px;
    font-family: var(--main-font);
    resize: none;
    outline: none;
`
const StyledTextarea = StyledInput.withComponent('textarea');

const StyledError = styled.span`  
    font-size: 0.75rem;
    color: #F23A65;
`

const ButtonCaptchaCnt = styled.div`
    display: flex;
    justify-content: space-around; 
    align-items: center;
`

const FormButton = styled.button`
    margin: .5rem auto;
    width: 150px;
    text-transform: uppercase;
    padding: 0.2rem 0;
    border: 2px solid white;
    color: var(--third-color);
    background: white;
    font-family: var(--main-font);
    border-radius: 5px;
    cursor: pointer;
    font-weight: 400;
    transition: 0.4s all;
    outline: none;
    &:hover {
        color: white;
        background: var(--third-color);
    }
`