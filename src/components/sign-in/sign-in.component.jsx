import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomeButton from "../custom-button/custome-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.component.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already hava an account</h2>
        <span>Sign in with your Email and Password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomeButton type="submit"> Sign In</CustomeButton>
            <CustomeButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
