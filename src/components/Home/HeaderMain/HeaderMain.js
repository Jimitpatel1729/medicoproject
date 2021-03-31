import React from "react";
import { useHistory } from "react-router-dom";
import chair from "../../../images/chair.png";
const HeaderMain = () => {
  const history = useHistory();
  const handleAppointment = () => {
    history.push("/appointment");
  };
  return (
    <main className="row d-flex align-items-center" style={{ height: "600px" }}>
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Book Your Appointment <br /> Today
        </h1>
        <p className="text-secondary">
          
        </p>
        <button onClick={handleAppointment} className="btn btn-success">
          GET APPOINMENT
        </button>
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
