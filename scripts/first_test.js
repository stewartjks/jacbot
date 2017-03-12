/*
Description:
Provides functionality for Jacbot, a Slackbot who does three things:
  1. Asks users to calm down if they use more than three consecutive exclamation points.
  2. Names her favorite president, randomly alternating among seven presidents.
  3. Tells the user how many days are left until the next Pi Day.

Dependencies:
  None

Configuration:
  None

Commands:
 jacbot.hear( listens for a regular expression in user input and responds with a function)

Notes:

Author:
stewartjks
*/

module.exports = function(jacbot) {
  jacbot.hear(/!!!!/, function(res) {
    return res.reply("Calm down. Pls. Your excitement is inappropriate for a classroom environment. Pls.");
  });
  jacbot.hear(/who is your favorite (.*)/, function(res) {
   var fav = res.match[1];
   var presidents = ["Washington", "Polk", "Cleveland", "Kennedy", "Johnson", "Carter", "Reagan"];
   var getRandomIntInclusive = function(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1)) + min;
   };
  //  Subtracting one from length of presidents array to account for zero-index
   var randomPresidentIndex = getRandomIntInclusive(0, (presidents.length-1));
   var randomPresident = presidents[randomPresidentIndex];
   switch (fav) {
     case "author":
       return res.reply("Brendan Eich!");
       break;
     case "student":
       return res.reply("I don't have a favorite " + fav + ". You're all wonderful.");
       break;
     case "president":
     return res.reply("Right now, I'm a big " + randomPresident + " fan, but I change my mind pretty often.")
       break;
     default:
       return res.reply("I don't know much about " + fav + ". What's your preferred " + fav + "?");
   };
 });
 jacbot.hear(/how many days until Pi Day/, function(res) {
   var singleDay = 24 * 60 * 60 * 1000;
   var today = new Date();
   var todayTime = today.getTime();
   var currentYear = today.getFullYear();
   var nextYear = currentYear + 1;
   var currentYearPiDay = new Date("March 14, " + currentYear);
   var nextYearPiDay = new Date ("March 14, " + nextYear);
   var currentYearPiDayTime = currentYearPiDay.getTime();
   var nextYearPiDayTime = nextYearPiDay.getTime();
   var daysToCurrentPiDay = Math.round((currentYearPiDayTime - todayTime) / singleDay);
   var daysToNextYearPiDay = Math.round((nextYearPiDayTime - todayTime) / singleDay);
   if (daysToCurrentPiDay = 0) {
      return res.reply("Today is Pi Day! WOO!");
    }
    else if (daysToCurrentPiDay = 1) {
      return res.reply("There is " + daysToCurrentPiDay + " day remaining until Pi Day.");
    }
    else if (daysToCurrentPiDay > 0) {
      return res.reply("There are " + daysToCurrentPiDay + " days remaining until Pi Day.");
    }
    else {
      return res.reply("There are " + daysToNextYearPiDay + " days remaining until Pi Day.");
    }
  });
};
