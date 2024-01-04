import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { username, email, password });
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
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
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
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
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
          <Link to="/login">
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
            Sign Up
          </Button>
        </Link>
        </form>
        
      </Box>
    </Box>
  );
}
