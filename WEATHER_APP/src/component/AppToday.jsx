import { Container, Row, Col} from "react-bootstrap";

function AppToday({data, icon, Humidity, Wind}) {


    return(
        <>

        {/* today */}
        <Col xs={12} md={12} lg={6}>
          <Row>
            
              {data.list.length > 0 && (
              <>
              <Col xs={6}>
              <div>
                <img src={icon} alt="" id="mainWeather" />
              </div>
              <div>
           <p className="mainTxt">{data.list[0]?.weather[0]?.description}</p>
              </div>
            </Col>
            <Col xs={6} className="d-flex align-items-center justify-content-center pt-4">
                <Row>
                    <Col xs={6} md={6} lg={12}>
              <div>
                <img src={Humidity} alt="" className="info" />
              </div>
              <div>
                <p className="humidityPercent">{data.list[0]?.main?.humidity} %</p>
              </div>
              </Col>

              <Col xs={6} md={6} lg={12}>
              <div>
              <img src={Wind} alt="" className="info" />
              </div>
              <div>
              <p className="windRate"> {data.list[0]?.wind?.speed} km/h</p>
              </div>
              </Col>
              </Row>
            </Col>
            </>)}
          </Row>
          <Row>
            <Col xs={12}>
            <p className="temp bg-custom rounded-pill mt-3">
            {data.list[0]?.main?.temp + `°C `}</p>
            </Col>
          </Row>
        </Col>

        </>
    )
}

export default AppToday;