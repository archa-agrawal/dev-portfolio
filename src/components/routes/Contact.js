import React from "react";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <form>
        <label htmlFor={"name"}>Name</label>
        <input type={"text"} id={"name"} />
        <label htmlFor={"email"}>E-Mail</label>
        <input type={"text"} id={"email"} />
        <label htmlFor={"message"}>Message</label>
        <input type={"text"} id={"message"} />
        <input type={"button"} value={"submit"} />
      </form>
    </div>
  );
};

export default Contact;
