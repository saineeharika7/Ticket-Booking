import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './styles.css'
export default class Register extends React.Component {
    render() {
      const {history} = this.props;
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                   
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                   
                })}
                onSubmit={fields => {
                    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                    history.push('/home');
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <h1>Welcome To Ticket Booking Website</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Login</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}
