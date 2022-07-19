import React, { useRef } from "react";
import classes from "./IpForm.module.css";

function IpForm({ setIp }) {
  const ipRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ipRef.current.value);
    setIp(ipRef.current.value);
  };
  return (
    <div className={classes.header}>
      <h1>IP Address Tracker</h1>
      <form className={classes.form}>
        <input
          ref={ipRef}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button onClick={handleSubmit} className={classes.arrowBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default IpForm;
