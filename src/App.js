import { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import BreweryPage from "./pages/BreweryPage";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.openbrewerydb.org/breweries", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBreweries(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function searchByQuery(query) {
    setsearchQuery(query);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const space_encoded_query = query.split(" ").join("_"); // open brewery docs said to replace spaces with underscores
    const querySearchTag = query ? `/search?query=${space_encoded_query}` : "";
    console.log(querySearchTag);
    fetch(
      `https://api.openbrewerydb.org/breweries${querySearchTag}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBreweries(result);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <Router>
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <h1>Fetch take home assignment</h1>
        </Link>
        <Switch>
          <Route
            path="/brewery/:id"
            render={({ match }) => <BreweryPage id={match.params.id} />}
          />
          <Route
            path="/"
            render={(props) => (
              <SearchPage
                searchQuery={searchQuery}
                searchByQuery={searchByQuery}
                breweries={breweries}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
