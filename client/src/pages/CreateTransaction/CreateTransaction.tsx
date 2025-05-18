import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppContext } from "../../hooks/useAppProvider";
import { useNavigate } from "react-router-dom";
import { Layout, TransactionForm } from "../../components";
import axios from "axios";
import type { Transaction } from "../../types";
import { toTitleCase } from "../../utility/user";

const initialData = {
  id: "",
  date: "",
  reference: "",
  description: "",
  gst: "",
  amount_inc_gst: "",
};
export default function CreateTransaction() {
  const [form, setForm] = useState<Transaction>(initialData);
  const navigate = useNavigate();
  const { user } = useAppContext();

  const handleChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!user) return;
    axios
      .post(`http://localhost:9000/api/transactions`, {
        user_id: user.id,
        date: new Date().toISOString().split("T")[0], // format: YYYY-MM-DD
        reference: form.reference,
        description: form.description,
        gst: form.gst,
        amount_inc_gst: form.amount_inc_gst,
      })
      .then(() => {
        //@todo: use snackbar
        alert("Transaction updated successfully!");
        navigate("/dashboard"); // Or your target page
      })
      .catch((err) => console.error(err));
  };

  return (
    <Layout>
      <Box sx={{ flex: 1, p: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h5" fontWeight="bold">
            Create Transaction
          </Typography>
          <Typography>
            {user?.username ? toTitleCase(user?.username) : "Guest user"}
          </Typography>
        </Box>

        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography fontWeight="bold" mb={2}>
            Transaction Details
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            onChange={(e) => handleChange("description", e)}
            placeholder="Write description here..."
            inputProps={{ maxLength: 255 }}
            helperText="Character Limit 0/255"
          />
          {/**Create transaction */}
          <TransactionForm handleChange={handleChange} />

          <Box mt={4} display="flex" gap={2}>
            <Button variant="contained" onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="text" onClick={() => navigate("/dashboard")}>
              Back to Dashboard
            </Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
}
