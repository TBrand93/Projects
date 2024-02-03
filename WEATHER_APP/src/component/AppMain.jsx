import { Container, Row, Col} from "react-bootstrap";
import Cloud from "../assets/img/cloud.png";
import Humidity from "../assets/img/humidity.png";
import Wind from "../assets/img/wind.png";
import Snow from "../assets/img/snow.png";
import Clear from "../assets/img/clear.png";
import Rain from "../assets/img/rain.png";
import React, { useState, useEffect} from "react";
import AppToday from "./AppToday";
import AppNextDays from "./AppNextDays";
import AppLocation from "./AppLocation";


function Main({ data }) {
  const [icon, setIcon] = useState("");
  const [previsioni, setPrevisioni] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (data.list && data.list.length > 0) {
        const mainWeather = data.list[0].weather[0].main;

        function todaysIcons() {
          if (mainWeather === "Clear") {
            setIcon(Clear);
          } else if (mainWeather === "Clouds") {
            setIcon(Cloud);
          } else if (mainWeather === "Snow") {
            setIcon(Snow);
          } else if (mainWeather === "Drizzle") {
            setIcon(Drizzle);
          } else if (mainWeather === "Rain") {
            setIcon(Rain);
          }
        }

        todaysIcons();


   setPrevisioni('Forecast for the upcoming days')



      }
    };

    fetchData();
  }, [data]);

  if (!data.list || data.list.length === 0) {
    return <p>No data available</p>;
  }


  return (
    <>

<Container>

<AppLocation data={data} />

        <Row className='d-flex align-items-center justify-content-center mt-2'>


<AppToday 
data={data}
icon = {icon}
Humidity={Humidity}
Wind={Wind}
/>

      
<AppNextDays
data={data}
previsioni={previsioni}

/>

      </Row>
      </Container>
    </>
  );
}

export default Main;







