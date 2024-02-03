import { Container, Row, Col} from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import Clear from '../assets/img/clear.png';
import Cloud from '../assets/img/cloud.png';
import Drizzle from '../assets/img/drizzle.png';
import Rain from '../assets/img/rain.png';
import Snow from '../assets/img/snow.png';

function AppNextDays({data, previsioni}) {
    const [dataAtNoon, setDataAtNoon] = useState([]);
  
    
    const getWeatherImage = (weatherMain) => {
      switch (weatherMain) {
        case "Clear":
          return Clear;
        case "Clouds":
          return Cloud;
        case "Snow":
          return Snow;
        case "Drizzle":
          return Drizzle;
        case "Rain":
          return Rain;
        default:
          return null;
      }
    };
  
    useEffect(() => {
      const fetchDataAtNoon = () => {
        const result = [];
  
        for (const item of data.list) {
          const dtTxt = item.dt_txt || "";
          if (dtTxt.includes("12:00:00")) {
            const dataAtNoonItem = {
              temp: item.main.temp,
              weatherMain: item.weather[0]?.main || null,
            };
            result.push(dataAtNoonItem);
          }
        }
  
        setDataAtNoon(result);
      };
  
      if (data.list) {
        fetchDataAtNoon();
      }
    }, [data]);
  

    return(
        <>
 
        {/* forecast */}
        <Col xs={12} md={12} lg={6} >
        <Row>
          <Col xs={12}>
            <h5 className="mt-5 fw-light">{previsioni}</h5>
          </Col>
        </Row>
       
       
        <Row className="my-1 mx-2 gy-3 bg-custom rounded-2">
        
        
        {dataAtNoon.slice(0,4).map((item, index) => (
                <Col
                  key={index}
                  xs={3} md={3} lg={12}
                  className="  d-flex flex-column align-items-center "
                >
                  <div>
                  <img src={getWeatherImage(item.weatherMain)} alt={item.weatherMain}  className="mb-2 inlineCol nextIcons" />
                    <p className="inlineCol fw-bold"> {item.temp}°C</p> 
                    <p className="inlineCol"> {item.weatherMain}</p>
                    
                  </div>
                </Col>
              ))}
            </Row>
           
        </Col>
        </>
    )
}

export default AppNextDays;