import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  // const [phone, setPhone] = useState("");
  // const [phoneErr, setPhoneErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 3) {
      setEmailErr("length must be more than 3 char");
    } else {
      setEmailErr("");
    }
  };
  // const phoenNumber = (e) => {
  //   setPhone(e.target.value);
  //   console.log(e.target.value);
  //   if (typeof parseInt(e.target.value) !== "number")
  //     setPhoneErr("please enter a valid number");
  //   else if (e.target.value.length !== 11) {
  //     setPhoneErr("Phone number should be 11 digits");
  //   } else {
  //     setPhoneErr("");
  //   }
  // };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordErr("length must be more than 3 char");
    } else {
      setPasswordErr("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(emailErr === "") || !(passwordErr === "")) {
      setErrorMessage("fail");
    } else {
      setErrorMessage("success");
    }
  };
  return (
    <Form
      className="p-3 w-50 m-auto"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      noValidate
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            handleEmail(e);
          }}
          value={email}
        />
        <Form.Text className="text-danger">{emailErr}</Form.Text>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          style={{
            WebkitAppearance: "textfield",
          }}
          placeholder="Enter phone number"
          step={0}
          onChange={(e) => {
            phoenNumber(e);
          }}
          value={phone}
        />
        <Form.Text className="text-danger">{phoneErr}</Form.Text>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            handlePassword(e);
          }}
          value={password}
        />
        <Form.Text className="text-danger">{passwordErr}</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className="text-muted">{errorMessage}</div>
    </Form>
  );
}

export default BasicExample;
