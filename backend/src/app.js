const express = require("express");
const authRoutes = require("./routes/auth.routes");


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

// Middleware
app.use(express.json());


// Test route
app.get("/", (req, res) => {
    res.send("Project Relay Backend is running ");
});


module.exports = app;