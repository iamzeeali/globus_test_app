import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  return (
    <Fragment>
      <div className='container p-5'>
        <h3 className='my-5'>
          Oxford has a distinctive collegiate structure. Students and academics
          benefit from belonging both to the University, a large,
          internationally-renowned institution, and to a college or hall, a
          small, interdisciplinary academic community.
        </h3>

        <div className='row text-center'>
          <div className='col-sm-6'>
            <Button title='Teacher' link='/teacher' />
          </div>

          <div className='col-sm-6'>
            <Button title='Student' link='/student' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
