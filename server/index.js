const express = require("express");
const cors = require("cors");
require("dotenv").config();

const liveSessionRoutes = require("./routes/liveSessionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/live-sessions", liveSessionRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Myntra Growth Engine Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});