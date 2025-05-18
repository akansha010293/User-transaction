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
import type { User } from "../../types";
import { useAppContext } from "../../hooks/useAppProvider";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const { setUser } = useAppContext();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleLogin = () => {
    const hasUsername = username.trim();
    setError("");
    setSuccess("");
    if (!hasUsername) {
      setError("Please enter a username.");
      return;
    }
    const user = users.find((u) => u.username === username);
    if (user) {
      setSuccess("Login successfully");
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/dashboard");
    } else {
      setError("Username not found.");
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
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
