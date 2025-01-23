import { useState } from "react";
import "./form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function hndleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
    alert("Form submitted");
    setTimeout(() => {
      setName("");
      setEmail("");
    }, 3000);
  }
  return (
    <div className="form-container">
      <form onSubmit={hndleSubmit}>
        <label>name:</label>
        <input onChange={handleChange} type="text" name="name" value={name} />

        <label>Email:</label>
        <input onChange={handleEmail} type="email" name="Email" value={email} />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;
