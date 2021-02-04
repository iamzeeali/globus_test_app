import React, { useState } from "react";
import Image from "./Image";
import Input from "./Input";

const Teacher = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitFn = () => {
    alert(formData.fullname + " " + formData.age);
  };
  return (
    <div className='container'>
      <h1>Research and Teaching</h1>
      <Image source='https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <form onSubmit={onSubmitFn}>
        <Input
          type='text'
          placeholder='Full Name'
          onChange={(e) => onChangeHandler(e)}
          name='fullname'
          value={formData.fullname}
        />
        <Input
          type='text'
          placeholder='Age'
          onChange={(e) => onChangeHandler(e)}
          name='age'
          value={formData.age}
        />
        <Input type='submit' value='Shayan' />
      </form>

      <h1>{formData.fullname}</h1>

      <p>
        Information for all University staff who are involved in the education
        of students and research work . Information for all University staff who
        are involved in the education of students and research work .
        Information for all University staff who are involved in the education
        of students and research work
      </p>
    </div>
  );
};

export default Teacher;
