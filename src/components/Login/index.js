import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
// import { reduxLogin } from '../../redux/features/login';
import { redirect, Navigate } from 'react-router-dom';
import { APP_ROUTES } from '../../global/constant';
import { setToken } from '../../redux/features/login/index';

import Loader from '../loader';
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss';

const LoginSchema = Yup.object().shape({
  // username: Yup.string()
  // 	.min('Invalid Username')
  // 	.required('Username is required'),
  // password: Yup.string()
  // 	.min(3, 'Password must be 3 characters at minimum')
  // 	.required('Password is required'),
});

const Index = () => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state?.userCollection?.userData);
  const Data = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div id="login">
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validationSchema={LoginSchema}
                  onSubmit={(submittedValues) => {
                    const abc = registerData.some((storedValue) => {
                      console.log('Data:::', Data);
                      console.log('registerData:::', submittedValues);

                      return (
                        storedValue?.username === submittedValues?.username &&
                        storedValue?.password === submittedValues?.password
                      );
                    });
                    dispatch(setToken(abc));
                    console.log('abc', abc);
                    window.location.href = APP_ROUTES.ROUTE_HOME;
                  }}
                >
                  <div className="sub-box">
                    <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5 headText">Login</h1>
                      </div>
                    </div>
                    <Form>
                      <div className="form-group headText aligment setMargin">
                        <label htmlFor="text">Username</label>
                        <Field
                          type="text"
                          name="username"
                          placeholder="Enter Username"
                          autocomplete="off"
                        />

                        {/* <ErrorMessage
												component="div"
												name="username"
												className="invalid-feedback"
											/> */}
                      </div>

                      <div className="form-group headText aligment setMargin">
                        <label htmlFor="password" className="mt-3">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                        />
                        {/* <ErrorMessage
												component="div"
												name="password"
												className="invalid-feedback"
											/> */}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4 setMargin"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                </Formik>
                <div className="headText setMargin">
                  Don't have an account ? To create account{' '}
                </div>
                <div
                  className="headText"
                  onClick={() =>
                    // redirect(APP_ROUTES.ROUTE_REGISTER);
                    // // alert();
                    // this.navigateTO();
                    // <Navigate to="/register" />;
                    (window.location.href = '/register')
                  }
                >
                  Click Here
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
