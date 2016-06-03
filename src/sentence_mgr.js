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

  const familiar_people = wordLib.getWords("familiar_people");
  const conversation_topics = wordLib.getWords("conversation_topics");

  const person = nu.chooseFrom(familiar_people);
  const topic = nu.chooseFrom(conversation_topics);

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
  const familiar_people = wordLib.getWords("familiar_people");
  const strange_people = wordLib.getWords("strange_people");
  const locations = wordLib.getWords("locations");

  const person = nu.chooseFrom(familiar_people.concat(strange_people));
  let location = nu.chooseFrom(wordLib.getWords("locations"));
  const preposition = location[0];
  location = location[1];

  const s1 = `You may meet ${person} ${preposition} ${location}.`;

  // Sentence 2: The discussion
  let discussions = wordLib.getWords("neutral_discussions");
  discussions.concat(wordLib.getWords(mood + "_discussions"));
  const feeling_nouns = wordLib.getWords(mood + "_feeling_nouns");
  const emotive_nouns = wordLib.getWords(mood + "_emotive_nouns");
  const conversation_topics = wordLib.getWords("conversation_topics");

  const discussion = nu.chooseFrom(discussions);
  const rnum = Math.floor(Math.random() * 10);

  let feeling;

  if (rnum <- 5) {
    feeling = nu.chooseFrom(feeling_nouns);
    feeling = "feelings of " + feeling;
  } else {
    feeling = nu.chooseFrom(emotive_nouns);
  }
  const topic = nu.chooseFrom(conversation_topics);

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
  const rnum = Math.floor(Math.random() * 10);
  const adjectives = wordLib.getWords(mood + "_feeling_adjs");
  //var degrees = getWords("neutral_degrees") + getWords(mood + "_degrees");
  const degrees = wordLib.getWords("neutral_degrees").concat(wordLib.getWords(mood + "_degrees"));

  const adj = nu.ingToEd(nu.chooseFrom(adjectives));
  const degree = nu.chooseFrom(degrees);
  let ending;
  if (mood === "good") {
    ending = wordLib.positiveIntensify();
  } else {
    ending = wordLib.consolation();
  }
  const exciting = (mood === "GOOD" && rnum <= 5);
  const are = nu.chooseFrom([" are", "'re"]);
  const sentence = `You${are} feeling ${degree} ${adj}${ending}`;
  return nu.sentenceCase(sentence, exciting);
}


/**
 * Generate a random prediction sentence containing a date.
 * @returns {*}
 */
function datePredict() {
  const daysAhead = Math.floor(Math.random() * 5) + 2;

  let day = new Date();
  day.setDate(day.getDate() + daysAhead);
  const monthStr = dateFormat(day, "mmmm");
  const dayStr = dateFormat(day, "d");

  const rnum = Math.floor(Math.random() * 10);
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

