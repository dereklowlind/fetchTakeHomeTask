import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

function ListBreweries(props) {
  const history = useHistory();
  const handleRowClick = (breweryId) => {
    history.push(`/brewery/${breweryId}`);
  };
  if (props.breweries === []) {
    return <div>Loading Breweries Data</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">State</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.breweries.map((row) => (
            <TableRow key={row.id} onClick={() => handleRowClick(row.id)}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.state}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="left">{row.website_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListBreweries;
