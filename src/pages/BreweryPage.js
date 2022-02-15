import { useEffect, useState } from "react";

export default function BreweryPage(props) {
  const [breweryData, setBreweryData] = useState({});

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://api.openbrewerydb.org/breweries/${props.id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBreweryData(result);
      })
      .catch((error) => console.log("error", error));
  }, [props.id]);
  return (
    <>
      <h3>{breweryData.name}</h3>
      <div>Phone: {breweryData.phone}</div>
      <div>Website: {breweryData.website_url}</div>
      <div>Brewery type: {breweryData.brewery_type}</div>
      <div>
        Address: {breweryData.street} {breweryData.city} {breweryData.state}{" "}
        {breweryData.postal_code} {breweryData.country}
      </div>
    </>
  );
}
