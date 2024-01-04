import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    if (username === "demo" && password === "password") {
      console.log("Successfully logged in!");
      setError(""); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "110vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 500,
          mx: "auto",
          p: 2,
          border: "2px solid #000000",
          borderRadius: "12px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            type="password"
          />
          {error && (
            <Typography variant="body2" color="error" mt={1}>
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" mt={2}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#000000" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
