import { useState } from "react";
import FormInput from "./FormInput";
import ValidationMessage from "./ValidationMessage";
import { validators } from "../utils/validators";

const initialState = {
  name: "",
  email: "",
  phone: "",
  blog: ""
};

export default function ValidationForm() {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleVerify = () => {
    for (const field in formData) {
      const error = validators[field](formData[field]);
      if (error) {
        setMessage(error);
        setIsError(true);
        return;
      }
    }

    setMessage("Successfully Verified ✅");
    setIsError(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Form Validation</h2>

      <FormInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <FormInput
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <FormInput
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <FormInput
        label="Blog URL"
        name="blog"
        value={formData.blog}
        onChange={handleChange}
      />

      <button onClick={handleVerify} style={{ padding: "8px 16px" }}>
        Verify
      </button>

      <ValidationMessage message={message} isError={isError} />
    </div>
  );
}
