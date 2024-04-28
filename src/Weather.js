
import { useEffect, useState } from "react";

function getWeather(city) {
  const api = "828e4994e37fb4fdcd70fcfdb31f2955";
  const [alldata, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setError(null);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5ec5b58082e149c496094541242804&q=${city}&aqi=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Enter valid city name");
        }
        // setLoading(true);
        return response.json();
      })
      .then((finalResponse) => {
        setData(finalResponse);
        setLoading(true);
        console.log(finalResponse)
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false);
      });
  }, [city]);

  return { alldata, loading, error };
}

export default getWeather;