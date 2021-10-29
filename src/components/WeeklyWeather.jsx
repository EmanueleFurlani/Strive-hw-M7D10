
import { Col, Row } from "react-bootstrap";

const WeeklyWeather = ({ city }) => {

  return (
    <Row className="w-100">
       <h2>Weather for the next days</h2>
       <hr />
       <br /> <br />
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[0].weather[0].description}</span>
        <img
                src={`https://openweathermap.org/img/wn/${city?.daily[0].weather[0].icon}@2x.png`}
                alt="weather-icon"
                className="icon"
              />
        <p>{city?.daily[0].temp.day + "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[1].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[1].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[1].temp.day + "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[2].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[2].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[2].temp.day + "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[3].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[3].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[3].temp.day + "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[4].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[4].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[4].temp.day+ "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[5].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[5].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[5].temp.day + "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[6].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[6].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[6].temp.day+ "°C"}</p>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <span>{city?.daily[7].weather[0].description}</span>
           <img
                src={`https://openweathermap.org/img/wn/${city?.daily[7].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
        <p>{city?.daily[7].temp.day+ "°C"}</p>
      </Col>
    </Row>
  );
};

export default WeeklyWeather;