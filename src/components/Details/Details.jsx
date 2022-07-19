import React from "react";
import classes from "./Details.module.css";

function Details({ ip, location, timezone, isp }) {
  return (
    <div className={classes.details}>
      <div className={classes.detail}>
        <span>IP Address</span>
        <div>{ip}</div>
      </div>
      <div className={classes.detail}>
        <span>Location</span>
        <div>{location}</div>
      </div>
      <div className={classes.detail}>
        <span>Timezone</span>
        <div>UTC {timezone}</div>
      </div>
      <div className={classes.detail}>
        <span>isp</span>
        <div>{isp}</div>
      </div>
    </div>
  );
}

export default Details;
