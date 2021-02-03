import React from "react";
import Image from "./Image";

const Student = () => {
  return (
    <div className='container'>
      {" "}
      <h1>Students Life</h1>
      <Image source='https://images.pexels.com/photos/5212352/pexels-photo-5212352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <p>
        Find out more about graduate student life at Oxford, and the facilities
        and opportunities you can enjoy here.  The University of Oxford is, and
        intends to remain, a thriving, cosmopolitan community of scholars and
        students united in our commitment to education and research. The
        departure from the EU will not change this; we are as committed as ever
        to welcoming the brightest students from all over the world for graduate
        study at Oxford. 
      </p>
    </div>
  );
};

export default Student;
