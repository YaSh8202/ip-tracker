import { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details/Details";
import IpForm from "./components/IpForm/IpForm";
import Map from "./components/Map/Map";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [ip, setIp] = useState("");
  const [details, setDetails] = useState({});
  const [position, setPosition] = useState([]);
  // const position = [19.03681, 73.01582];
  useEffect(() => {
    const fetchLocation = async () => {
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
      const response = await fetch(url);
      const data = await response.json();
      const loc = `${data.location.region}, ${data.location.city} ${data.location.postalCode}`;
      setDetails({
        ip: data?.ip,
        location: loc,
        timezone: data.location.timezone,
        isp: data.isp,
      });
      setPosition([data.location.lat, data.location.lng]);
      console.log([data.location.lat, data.location.lng]);
    };
    fetchLocation();
  }, [ip]);

  return (
    <div className="main">
      <IpForm setIp={setIp} />
      <Details {...details} />
      {position.length > 0 && <Map position={position} />}
    </div>
  );
}

export default App;
