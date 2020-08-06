const router = require("express").Router();
const querystring = require("querystring");


router.get("/", (req, res) => {
  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: "code",
      client_id: process.env.CLIENT_ID,
      scope: "user-read-private user-read-email",
      redirect_uri: process.env.REDIRECT_URI,
    })}`
  );
});

module.exports = router;
