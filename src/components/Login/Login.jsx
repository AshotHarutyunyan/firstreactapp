import React from "react";
import { Field, reduxForm } from "redux-form";



let LoginForm = (props) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Login">Email or Login</label>
        <Field name="Login" id="Login" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Pasword">Pasword</label>
        <Field name="Pasword" id="Pasword" component="input" type="password" />
      </div>
      <div>
        <Field name="rememberMe" id="rememberMe" component="input" type="checkbox" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <button type="submit">Submit</button>
    </form>
    )
}

LoginForm = reduxForm({
    form: 'Login'
  })(LoginForm)

const Login = (props) => {
    let submit = (fieldDatas) => {
      console.log(fieldDatas)
    }
    return (
        <>
            <h1>Login</h1>
            <LoginForm onSubmit={submit}/>
        </>
    )
}  

export default Login;