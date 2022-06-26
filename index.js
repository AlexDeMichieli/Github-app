/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
var axios = require("axios");

module.exports = (app) => {
  // Your code here

  var config = {
    method: "get",
    url: "https://api.chucknorris.io/jokes/random",
  };

 

  app.log.info("Yay, the app was loaded!");
  app.on("issues.opened", async (context) => {
    axios(config)
    .then(function (response) {
      const issueComment = context.issue({
        body: JSON.stringify(response.data.value),
      });
      console.log(JSON.stringify(response.data.value));
      return context.octokit.issues.createComment(issueComment);

    })
    .catch(function (error) {
      console.log(error);
    });

  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
