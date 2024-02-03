import { Container, Row, Col} from "react-bootstrap";

function AppLocation ({data}) {
    return(
        <>
        <Row>
          <Col xs={12}>
            <h1 className="weatherLocation">{data.city.name}</h1>
            
          </Col>
        </Row>
        </>
    )
}

export default AppLocation;