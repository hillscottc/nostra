'use strict';

var _nostra_utils = require('./nostra_utils');

var nu = _interopRequireWildcard(_nostra_utils);

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

var _word_library = require('./word_library');

var _word_library2 = _interopRequireDefault(_word_library);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Generate a mood-based sentence about a relationship
 * @param mood
 * @returns {*}
 */
function relationship(mood) {
  var verb = void 0,
      talk = void 0;

  if (mood === "good") {
    verb = "strengthened";
    talk = "discussion";
  } else {
    verb = "strained";
    talk = "argument";
  }

  var familiar_people = _word_library2.default.getWords("familiar_people");
  var conversation_topics = _word_library2.default.getWords("conversation_topics");

  var person = nu.chooseFrom(familiar_people);
  var topic = nu.chooseFrom(conversation_topics);

  var sentence = 'Your relationship with ' + person + ' may be ' + verb + ' ';
  sentence += 'as the result of ' + nu.an(talk) + ' about ' + topic;

  return nu.sentenceCase(sentence);
}

/**
 * Generate a few sentences about a meeting with another person.
 * @param mood
 */
function encounter(mood) {

  //Sentence 1: The meeting
  var familiar_people = _word_library2.default.getWords("familiar_people");
  var strange_people = _word_library2.default.getWords("strange_people");
  var locations = _word_library2.default.getWords("locations");

  var person = nu.chooseFrom(familiar_people.concat(strange_people));
  var location = nu.chooseFrom(_word_library2.default.getWords("locations"));
  var preposition = location[0];
  location = location[1];

  var s1 = 'You may meet ' + person + ' ' + preposition + ' ' + location + '.';

  // Sentence 2: The discussion
  var discussions = _word_library2.default.getWords("neutral_discussions");
  discussions.concat(_word_library2.default.getWords(mood + "_discussions"));
  var feeling_nouns = _word_library2.default.getWords(mood + "_feeling_nouns");
  var emotive_nouns = _word_library2.default.getWords(mood + "_emotive_nouns");
  var conversation_topics = _word_library2.default.getWords("conversation_topics");

  var discussion = nu.chooseFrom(discussions);
  var rnum = Math.floor(Math.random() * 10);
  if (rnum < -5) {
    var _feeling = nu.chooseFrom(feeling_nouns);
    _feeling = "feelings of " + _feeling;
  } else {
    feeling = nu.chooseFrom(emotive_nouns);
  }
  var topic = nu.chooseFrom(conversation_topics);

  var s2 = nu.an(discussion) + ' about ' + topic + ' may lead to ' + feeling + '.';
  s2 = nu.sentenceCase(s2);

  return s1 + ' ' + s2;
}

/**
 * A mood-based feeling
 * @param mood
 * @returns {*}
 */
function feeling(mood) {
  var rnum = Math.floor(Math.random() * 10);
  var adjectives = _word_library2.default.getWords(mood + "_feeling_adjs");
  //var degrees = getWords("neutral_degrees") + getWords(mood + "_degrees");
  var degrees = _word_library2.default.getWords("neutral_degrees").concat(_word_library2.default.getWords(mood + "_degrees"));

  var adj = nu.ingToEd(nu.chooseFrom(adjectives));
  var degree = nu.chooseFrom(degrees);
  var ending = void 0;
  if (mood === "good") {
    ending = _word_library2.default.positiveIntensify();
  } else {
    ending = _word_library2.default.consolation();
  }
  var exciting = false;
  if (mood === "GOOD" && rnum <= 5) {
    exciting = true;
  }
  var are = nu.chooseFrom([" are", "'re"]);

  var sentence = 'You' + are + ' feeling ' + degree + ' ' + adj + ending;

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
  var monthStr = (0, _dateformat2.default)(day, "mmmm");
  var dayStr = (0, _dateformat2.default)(day, "d");

  var rnum = Math.floor(Math.random() * 10);
  var str = void 0;
  if (rnum <= 4) {
    str = monthStr + ' ' + dayStr + ' will be an important day for you';
  } else if (rnum <= 7) {
    str = 'Interesting things await you on ' + monthStr + ' ' + dayStr;
  } else {
    str = 'The events of ' + monthStr + ' ' + dayStr + ' have the potential to change your life.';
  }
  return nu.sentenceCase(str);
}

module.exports.relationship = relationship;
module.exports.encounter = encounter;
module.exports.feeling = feeling;
module.exports.datePredict = datePredict;