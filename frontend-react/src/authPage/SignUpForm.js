import { useContext, useState } from "react";

import axios from "axios";

import { Context } from "../functions/context";
import { useIsMobile } from "../functions/isMobile";

import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Link from "./components/Link";

const SignUpForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Context);
  const isMobile = useIsMobile();

  const rightInputStyle = {
    width: isMobile ? "100%" : "calc(50% - 6px)",
    float: "right",
  };
  const leftInputStyle = { width: isMobile ? "100%" : "calc(50% - 6px)" };

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:8000/users/me/", {
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password,
      })
      .then((r) => {
        setUser({
          first_name: r.data.first_name,
          last_name: r.data.last_name,
          email: r.data.email,
          username: r.data.username,
          secret: r.data.password,
        });
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <div>
      <div className="form-title">Create an account</div>

      <div className="form-subtitle">
        Already a member?{" "}
        <Link onClick={() => props.onHasAccount()}>Log in</Link>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="Username"
          name="username"
          placeholder="adam_lamorre"
          onChange={(e) => setUsername(e.target.value)}
          style={leftInputStyle}
        />

        <TextInput
          label="Email"
          name="email"
          placeholder="adam@lamorre.co"
          onChange={(e) => setEmail(e.target.value)}
          style={rightInputStyle}
        />

        <TextInput
          label="First name"
          name="first_name"
          placeholder="Adam"
          onChange={(e) => setFirstName(e.target.value)}
          style={leftInputStyle}
        />

        <TextInput
          label="Last name"
          name="last_name"
          placeholder="La Morre"
          onChange={(e) => setLastName(e.target.value)}
          style={rightInputStyle}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={leftInputStyle}
        />

        <Button type="submit" style={rightInputStyle}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
