const express = require("express");
const path = require("path");
const { exec } = require("child_process");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(
    "Static file server running at http://localhost:" +
      port +
      "/\nCTRL + C to shutdown"
  );
  exec(`open http://localhost:${port}`);
});
