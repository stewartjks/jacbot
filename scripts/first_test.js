/*
Description:
Provides functionality for Jacbot, a Slackbot who does three things:
  1. Asks users to calm down if they use more than three consecutive exclamation points.
  2. Provides the Slack image of a team member when someone asks who that user is.
  3. Tell the user which chapters of Eloquent JavaScript have been assigned so far.

Dependencies:
  None

Configuration:
  None

Commands:
 hubot <trigger> - <what the respond trigger does>
 <trigger> - <what the hear trigger does>

Notes:

Author:
stewartjks
*/

module.exports = function(jacbot) {
  jacbot.hear(/!!!!/, function(res) {
    return res.reply("Calm down. Pls. Your excitement is inappropriate for a classroom environment. Pls.");
  })
  jacbot.hear(/list Slack users/, function(res) {
      return jacbot.http(`https://slack.com/api/users.list`)
      .get('xoxp-132957885761-132974520752-145976002368-d25fd21987126404f0cb148687fedf45')
      (function (err, res, body) {
          try {
            // let json = JSON.parse(body);
            // return res.reply(json);
            return res.reply("Hi");
          } catch (error) {
            return res.reply("Data not found.");
          }
      });
  });
}

/************************************
EXAMPLES OF THE KEY HUBOT FUNCTIONS
************************************/

/*
var fruits;
fruits = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!"
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });
  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/
