import { TextField } from "@material-ui/core";
import ListBreweries from "../components/ListBreweries";

export default function SearchPage(props) {
    return(
        <>
        <div>
        <TextField
            placeholder="Enter search"
            value={props.searchQuery}
            onChange={(e) => props.searchByQuery(e.target.value)}
        />
        {/* <Button onClick={() => searchByQuery()}>Search</Button> */}
      </div>
      <ListBreweries breweries={props.breweries} />
        </>
    )

}