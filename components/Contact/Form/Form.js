import { Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./Form.module.scss";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { PrimaryButton } from "../../Button/Button";

const Form = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
    message: "",
  });
  let { name, email, query, message } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className={`${styles.form_container} form_container`}>
      <Typography variant="h3">Contact Us</Typography>
      <Typography variant="h4">
        Interested in collaborating? Please fill the form below.
      </Typography>
      <div className={styles.form}>
        <TextField
          id="outlined-basic"
          label="Your full Name"
          variant="outlined"
          value={name}
          name="name"
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Your Email Id"
          variant="outlined"
          value={email}
          name="email"
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="outlined-basic"
          label="Query Related"
          variant="outlined"
          value={query}
          name="query"
          onChange={(e) => onChange(e)}
        />
        <TextareaAutosize
          aria-label="textarea"
          placeholder="Message"
          value={message}
          name="message"
          onChange={(e) => onChange(e)}
        />
        <div className={styles.btn_container}>
          <PrimaryButton>Contact now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Form;
