import React, { useState } from "react";

function Form() {

 const [formData, setFormData] = useState({
   firstName: "John",
   lastName: "Henry",
   admin: false

 })

 const handleChange = (e) => {
   setFormData({
     ...formData, 
     [e.target.name] : e.target.value
   })
   

 }

 function handleSubmit(event) {
    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      event.target.value = event.target.checked;
    }

  event.preventDefault();
  console.log(formData);
}

return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="firstName"
      onChange={handleChange}
      value={formData.firstName}
    />
    <input
      type="text"
      name="lastName"
      onChange={handleChange}
      value={formData.lastName}
    />
    <input
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
    />
    <button type="submit">Submit</button>
  </form>
);
}

export default Form;
