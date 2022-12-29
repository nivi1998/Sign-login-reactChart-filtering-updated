import React, { Component } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { reduxLogin } from '../../redux/features/login';
import { redirect, Navigate } from 'react-router-dom';
import { APP_ROUTES } from '../../global/constant';
import Loader from '../loader';
import './Login.scss';

const LoginSchema = Yup.object().shape({
  // username: Yup.string()
  // 	.min('Invalid Username')
  // 	.required('Username is required'),
  // password: Yup.string()
  // 	.min(3, 'Password must be 3 characters at minimum')
  // 	.required('Password is required'),
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: '',
      registerData: '',
    };
  }
  navigateTO = () => {
    window.location.href = APP_ROUTES.ROUTE_REGISTER;
    // <Navigate to="/register" />;
  };
  render() {
    return (
      <div id="login">
        <div className="container">
          {this.props.loading ? (
            <Loader />
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <Formik
                  initialValues={{ username: '', password: '' }}
                  validationSchema={LoginSchema}
                  onSubmit={(values) => {
                    //console.log(values);
                    //console.log('registerData', this.state);
                    // this.props.dispatch(reduxLogin(JSON.stringify(values)));
                    //console.log(JSON.stringify(values));
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
                  onClick={() => {
                    // redirect(APP_ROUTES.ROUTE_REGISTER);
                    // // alert();
                    this.navigateTO();
                    // <Navigate to="/register" />;
                  }}
                >
                  Click Here
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.login.loading,
    registerData: state.register.data,
  };
}

export default connect(mapStateToProps)(Login);
