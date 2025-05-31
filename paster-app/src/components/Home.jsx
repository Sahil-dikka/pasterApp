import React from "react";
import SelectInput from "./common/SelectInput";
import Button from "./common/Button";

const Home = () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <div className="row justify-content-center align-items-center g-3">
        <div className="col-12 col-md-3">
          <SelectInput >
        
          </SelectInput>
        </div>
        <div className="col-12 col-md-3">
          <SelectInput />
        </div>
        <div className="col-12 col-md-3">
          <SelectInput />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <Button title="Create My Paste" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Home