import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { Transaction } from "../../types";

export default function DashboardTable({
  currentTransactions,
}: {
  currentTransactions: Transaction[];
}) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell>REFERENCE</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell>GST</TableCell>
            <TableCell>AMOUNT INC. GST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentTransactions.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
              <TableCell>{item.reference}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>$ {item.gst}</TableCell>
              <TableCell>$ {item.amount_inc_gst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
