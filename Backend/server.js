const express = require("express");
const app = express();
const cors = require("cors");

const dbConfig = require("./app/config/db.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect(`mongodb://127.0.0.1:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "Successfully connect to MongoDB.",
      `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`
    );

    //initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "HELLO..." });
});

// routes
require("./app/routes")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
