import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/form/FormControl";
import { required } from "../FormValidations/formValidation";
import { connect } from "react-redux";
import { login } from "../../Redux/Auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/form/formControl.module.css";


let LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"}
          validate={[required]}
          component={Input} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"}
          validate={[required]}
          component={Input} />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
      </div>
      {props.error && <div className={classes.formSummaryError}>
        {props.error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'Login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);