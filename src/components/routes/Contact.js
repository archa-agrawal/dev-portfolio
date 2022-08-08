import React from "react";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "green" }} id={"contact"}>
      <h3>Contact me</h3>
      <form>
        <label htmlFor={"name"}>Name</label>
        <input type={"text"} id={"name"} />
        <label htmlFor={"email"}>E-Mail</label>
        <input type={"text"} id={"email"} />
        <label htmlFor={"message"}>Message</label>
        <input type={"text"} id={"message"} />
        <input type={"button"} value={"submit"} />
      </form>
      <p>Or reach out on archana.agrawal3@outlook.com</p>
    </div>
  );
};

export default Contact;
