import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Google } from "./google";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function Login() {
  function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form);
    const formValues = Object.fromEntries(form);
    const user = Object.assign({}, formValues);
    console.log("User", user);
    axios
      .post("http://localhost:4000/login-user", user)
      .then((response) => console.log("Received Token", response.data))
      .catch((error) => console.log(error));
  }
  return (
    <div className="login-form">
      <div className="inner-div-form">
        <form action="login-user" method="post" onSubmit={onSubmit}>
          <h1 style={{ color: "white" }}>Login</h1>
          <label>Email</label>
          <br />
          <input type="text" name="email" />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <br />
          <button className="button1">Submit</button>
        </form>
        <p>
          Don't have an account?<Link to="/">login</Link>
        </p>
        <GoogleOAuthProvider clientId="1000244117596-sfjov7prsj9l0mo32aisc851l8j7f5e3.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}
