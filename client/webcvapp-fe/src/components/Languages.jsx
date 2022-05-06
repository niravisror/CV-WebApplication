import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { languages } from "../utiles/data"

function Languages() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Language</TableCell>
            <TableCell align="left">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {languages.map((row) => (
            <TableRow
              key={row.language}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.language}
              </TableCell>
              <TableCell align="right">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={row.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Languages;
