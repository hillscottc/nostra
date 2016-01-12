var util = require('util'),
    dateFormat = require('dateformat'),
    wordLib = require('./word_library'),
    nu = require('./nostra_utils');


/**
 * Generate a mood-based sentence about a relationship
 * @param mood
 * @returns {*}
 */
function relationship(mood) {
  var verb, talk;

  if (mood === "good") {
    verb = "strengthened";
    talk = "discussion";
  } else {
    verb = "strained";
    talk = "argument";
  }

  var familiar_people = wordLib.getWords("familiar_people");
  var conversation_topics = wordLib.getWords("conversation_topics");

  var person = nu.chooseFrom(familiar_people);
  var topic = nu.chooseFrom(conversation_topics);
  var sentence = util.format("Your relationship with %s may be %s ", person, verb);
  sentence += util.format("as the result of %s about %s", nu.an(talk), topic);
  return nu.sentenceCase(sentence);
}


/**
 * Generate a few sentences about a meeting with another person.
 * @param mood
 */
function encounter(mood) {

  //Sentence 1: The meeting
  var familiar_people = wordLib.getWords("familiar_people");
  var strange_people = wordLib.getWords("strange_people");
  var locations = wordLib.getWords("locations");

  var person = nu.chooseFrom(familiar_people.concat(strange_people));
  var location = nu.chooseFrom(wordLib.getWords("locations"));
  var preposition = location[0];
  location = location[1];
  var s1 = util.format("You may meet %s %s %s.", person, preposition, location);

  // Sentence 2: The discussion
  var discussions = wordLib.getWords("neutral_discussions");
  discussions.concat(wordLib.getWords(mood + "_discussions"));
  var feeling_nouns = wordLib.getWords(mood + "_feeling_nouns");
  var emotive_nouns = wordLib.getWords(mood + "_emotive_nouns");
  var conversation_topics = wordLib.getWords("conversation_topics");

  var discussion = nu.chooseFrom(discussions);
  var rnum = Math.floor(Math.random() * 10);
  if (rnum <- 5) {
    var feeling = nu.chooseFrom(feeling_nouns);
    feeling = "feelings of " + feeling;
  } else {
    feeling = nu.chooseFrom(emotive_nouns);
  }
  var topic = nu.chooseFrom(conversation_topics);
  var s2 = util.format("%s about %s may lead to %s.", nu.an(discussion), topic, feeling);
  s2 = nu.sentenceCase(s2);
  return util.format("%s %s", s1, s2);
}

/**
 * A mood-based feeling
 * @param mood
 * @returns {*}
 */
function feeling(mood) {
  var rnum = Math.floor(Math.random() * 10);
  var adjectives = wordLib.getWords(mood + "_feeling_adjs");
  //var degrees = getWords("neutral_degrees") + getWords(mood + "_degrees");
  var degrees = wordLib.getWords("neutral_degrees").concat(wordLib.getWords(mood + "_degrees"));

  var adj = nu.ingToEd(nu.chooseFrom(adjectives));
  var degree = nu.chooseFrom(degrees);
  var ending;
  if (mood === "good") {
    ending = wordLib.positiveIntensify();
  } else {
    ending = wordLib.consolation();
  }
  var exciting = false;
  if (mood === "GOOD" && rnum <= 5) {
    exciting = true;
  }
  var are = nu.chooseFrom([" are", "'re"]);
  var sentence = util.format("You%s feeling %s %s%s", are, degree, adj, ending)
  return nu.sentenceCase(sentence, exciting);
}


/**
 * Generate a random prediction sentence containing a date.
 * @returns {*}
 */
function datePredict() {

  var daysAhead = Math.floor(Math.random() * 5) + 2;

  var day = new Date();
  day.setDate(day.getDate() + daysAhead);
  var monthStr = dateFormat(day, "mmmm");
  var dayStr = dateFormat(day, "d");

  var rnum = Math.floor(Math.random() * 10);
  var str;
  if (rnum <=4) {
    str = util.format("%s %s will be an important day for you", monthStr, dayStr);
  } else if (rnum <=7) {
    str = util.format("Interesting things await you on %s %s", monthStr, dayStr);
  } else {
    str = util.format("The events of %s %s have the potential to change your life.", monthStr, dayStr);
  }
  return nu.sentenceCase(str);
}

module.exports.relationship = relationship;
module.exports.encounter = encounter;
module.exports.feeling = feeling;
module.exports.datePredict = datePredict;

