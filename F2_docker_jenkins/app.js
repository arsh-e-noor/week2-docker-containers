const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/api/status", (req, res) => {
    res.json({
        server: "Running",
        docker: "Active",
        pipeline: "Ready",
        environment: "Development",
        time: new Date()
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});