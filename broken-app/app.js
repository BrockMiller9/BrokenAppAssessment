const express = require("express");
const axios = require("axios");
const ExpressError = require("./expressError");
const app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
  try {
    if (req.body.developers) {
      let results = req.body.developers.map((d) => {
        return axios.get(`https://api.github.com/users/${d}`);
      });
      const resolved = await Promise.all(results);
      const out = resolved.map((r) => ({ name: r.data.name, bio: r.data.bio }));

      return res.send(out);
    } else {
      throw new ExpressError("Missing developers key", 400);
    }
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
