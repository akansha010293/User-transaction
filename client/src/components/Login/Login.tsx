import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/users")
      .then((res) => {
        const userEmails: string[] = res.data.map(
          (user: { email: string }) => user.email
        );
        setUsers(userEmails);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  console.log("@@@ users", users);

  const handleLogin = () => {
    if (users.includes(email)) {
      setSuccess("Login successfully");
      setError("");
      navigate("/dashboard");
    } else {
      setError("Email not found.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
