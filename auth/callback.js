const router = require("express").Router();
const request = require("request");

router.get("/", (req, res) => {
    let code = req.query.code || null;
    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: "authorization_code",
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(
          process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
        ).toString('base64'))
      },
      json: true,
    };
    

    request.post(authOptions, (error, response, body) => {
      const access_token = body.access_token;
        console.log(body.access_token);
      res.redirect(`${process.env.FRONTEND_URI}?access_token=${access_token}`);
    });
  });

  module.exports = router;