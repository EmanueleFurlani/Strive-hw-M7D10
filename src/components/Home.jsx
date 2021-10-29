import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CurrentWeather from "./CurrentWeather";

const apiKey = process.env.REACT_APP_APIKEY

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState(null);

  const fetchCurrent = async () => {
    try {
      let response = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}
        `);
      if (response.ok) {
        console.log("Response is ok");
        let weather = await response.json();
        setData(weather);
        console.log(weather);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Control
          type="text"
          placeholder="Name of the city..."
          value={cityName}
          onChange={(e) => setCityName(e.currentTarget.value)}
          className="mr-3"
        />
        <Button variant="outline-secondary" onClick={() => fetchCurrent()}>
          Search
        </Button>
      </Form>
      {data && <CurrentWeather data={data} />}
    </Container>
  );
};

export default Home;