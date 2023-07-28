import React, { useContext } from "react";
import "./IpDetail.css";
import { AppContext } from "../context/AppContext";

function IpDetail() {
  const { IpInfo } = useContext(AppContext);
  return (
    <div className="info-wrapper">
      <div className="ip-address">
        <span>IP ADDRESS</span>
        <p>{IpInfo?.ip}</p>
      </div>
      <div className="location">
        <span>LOCATION</span>
        <p>
          {IpInfo?.location?.city
            ? IpInfo?.location?.city
            : "" + ", " + IpInfo?.location?.country
            ? IpInfo?.location?.country
            : "" + " " + IpInfo?.location?.geonameId
            ? IpInfo?.location?.geonameId
            : ""}
        </p>
      </div>
      <div className="timezone">
        <span>TIMEZONE</span>
        <p>
          {IpInfo?.location?.timezone ? "UTC" + IpInfo?.location?.timezone : ""}
        </p>
      </div>
      <div className="isp">
        <span>ISP</span>
        <p>{IpInfo?.isp}</p>
      </div>
    </div>
  );
}

export default IpDetail;
