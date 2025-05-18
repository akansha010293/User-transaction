import {
  Box,
  InputBase,
  Typography,
  Button,
  Paper,
  Pagination,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardTable from "../DashboardTable/DashboardTable";
import type { SelectChangeEvent } from "@mui/material/Select";
import type { Transaction } from "../../types";
import axios from "axios";
import { useAppContext } from "../../hooks/useAppProvider";
import { useDebounce } from "use-debounce";

export const ListTransaction = () => {
  //state
  const [transaction, setTransactions] = useState<Transaction[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //hooks
  const navigate = useNavigate();
  const { user } = useAppContext();
  const [debouncedSearch] = useDebounce(searchQuery, 300);

  const filteredTransactions = transaction.filter((item) =>
    item.description.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleRowsPerPageChange = (event: SelectChangeEvent) => {
    const newValue = parseInt(event.target.value, 10);
    setRowsPerPage(newValue);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!user) return;
    //review: can paginate the data using server ?page=1&limit=10
    axios
      .get(`http://localhost:9000/api/transactions/?userId=${user.id}`)
      .then((res) => {
        if (res.status === 200) {
          setTransactions(res.data);
        }
      })
      .catch((err) => console.error("Error fetching transactions:", err));
  }, [user]);

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f9f9f9", p: 3, mt: 8 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard
      </Typography>
      {/* Search bar and create transaction button */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 300,
              backgroundColor: "#f1f1f1",
              p: 1,
              borderRadius: 1,
            }}
          >
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase
              placeholder="Search by description"
              fullWidth
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
          <Button variant="contained" onClick={() => navigate("/transaction")}>
            Create New Transaction
          </Button>
        </Box>
      </Paper>
      {/* Dashboard table */}
      <DashboardTable currentTransactions={currentTransactions} />
      {/* Pagination */}
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2">
          {indexOfFirstItem + 1}–
          {Math.min(indexOfLastItem, filteredTransactions.length)} of{" "}
          {filteredTransactions.length}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ mr: 1 }}>
            Rows per Page
          </Typography>
          <Select
            size="small"
            value={rowsPerPage.toString()}
            onChange={handleRowsPerPageChange}
            id="demo-simple-select"
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            sx={{ ml: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
};
