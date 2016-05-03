import * as nu from './nostra_utils';
import dateFormat from 'dateformat';
import wordLib from './word_library';

/**
 * Generate a mood-based sentence about a relationship
 * @param mood
 * @returns {*}
 */
function relationship(mood) {
  let verb, talk;

  if (mood === "good") {
    verb = "strengthened";
    talk = "discussion";
  } else {
    verb = "strained";
    talk = "argument";
  }

  let familiar_people = wordLib.getWords("familiar_people");
  let conversation_topics = wordLib.getWords("conversation_topics");

  let person = nu.chooseFrom(familiar_people);
  let topic = nu.chooseFrom(conversation_topics);

  let sentence = `Your relationship with ${person} may be ${verb} `;
  sentence += `as the result of ${nu.an(talk)} about ${topic}`;

  return nu.sentenceCase(sentence);
}


/**
 * Generate a few sentences about a meeting with another person.
 * @param mood
 */
function encounter(mood) {

  //Sentence 1: The meeting
  let familiar_people = wordLib.getWords("familiar_people");
  let strange_people = wordLib.getWords("strange_people");
  let locations = wordLib.getWords("locations");

  let person = nu.chooseFrom(familiar_people.concat(strange_people));
  let location = nu.chooseFrom(wordLib.getWords("locations"));
  let preposition = location[0];
  location = location[1];

  let s1 = `You may meet ${person} ${preposition} ${location}.`;

  // Sentence 2: The discussion
  let discussions = wordLib.getWords("neutral_discussions");
  discussions.concat(wordLib.getWords(mood + "_discussions"));
  let feeling_nouns = wordLib.getWords(mood + "_feeling_nouns");
  let emotive_nouns = wordLib.getWords(mood + "_emotive_nouns");
  let conversation_topics = wordLib.getWords("conversation_topics");

  let discussion = nu.chooseFrom(discussions);
  let rnum = Math.floor(Math.random() * 10);
  if (rnum <- 5) {
    let feeling = nu.chooseFrom(feeling_nouns);
    feeling = "feelings of " + feeling;
  } else {
    feeling = nu.chooseFrom(emotive_nouns);
  }
  let topic = nu.chooseFrom(conversation_topics);

  let s2 = `${nu.an(discussion)} about ${topic} may lead to ${feeling}.`;
  s2 = nu.sentenceCase(s2);

  return `${s1} ${s2}`;
}

/**
 * A mood-based feeling
 * @param mood
 * @returns {*}
 */
function feeling(mood) {
  let rnum = Math.floor(Math.random() * 10);
  let adjectives = wordLib.getWords(mood + "_feeling_adjs");
  //var degrees = getWords("neutral_degrees") + getWords(mood + "_degrees");
  let degrees = wordLib.getWords("neutral_degrees").concat(wordLib.getWords(mood + "_degrees"));

  let adj = nu.ingToEd(nu.chooseFrom(adjectives));
  let degree = nu.chooseFrom(degrees);
  let ending;
  if (mood === "good") {
    ending = wordLib.positiveIntensify();
  } else {
    ending = wordLib.consolation();
  }
  let exciting = false;
  if (mood === "GOOD" && rnum <= 5) {
    exciting = true;
  }
  let are = nu.chooseFrom([" are", "'re"]);

  let sentence = `You${are} feeling ${degree} ${adj}${ending}`;

  return nu.sentenceCase(sentence, exciting);
}


/**
 * Generate a random prediction sentence containing a date.
 * @returns {*}
 */
function datePredict() {

  let daysAhead = Math.floor(Math.random() * 5) + 2;

  let day = new Date();
  day.setDate(day.getDate() + daysAhead);
  let monthStr = dateFormat(day, "mmmm");
  let dayStr = dateFormat(day, "d");

  let rnum = Math.floor(Math.random() * 10);
  let str;
  if (rnum <=4) {
    str = `${monthStr} ${dayStr} will be an important day for you`;
  } else if (rnum <=7) {
    str = `Interesting things await you on ${monthStr} ${dayStr}`;
  } else {
    str = `The events of ${monthStr} ${dayStr} have the potential to change your life.`;
  }
  return nu.sentenceCase(str);
}

module.exports.relationship = relationship;
module.exports.encounter = encounter;
module.exports.feeling = feeling;
module.exports.datePredict = datePredict;

