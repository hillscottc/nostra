"use strict";

import * as nu from './nostra_utils';

const defLib = {

  "planets": ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],

  "stars": ["Proxima Centauri", "Barnard's Star", "Sirius A", "Epsilon Eridani"],

  "aspects": ["conjunction", "sextile", "square", "trine", "opposition"],

  "wanky_events": ["a large Electromagnetic disturbance", "Quantum Flux",
    "the upcoming Solar eclipse", "Unusual planetary motion"],


//# Time words
  "beginnings": ["arrival", "beginning", "start"],
  "endings": ["end", "death", "passing"],

  "time_periods": ["interlude", "period", "week", "day"],

//# Feeling adjectives
  "good_feeling_adjs": ["romantic", "emotional", "reflective", "irreverent",
    "subversive", "spiritual", "creative", "intellectual",
    "adventurous", "enlightening", "fantastic"],

  "bad_feeling_adjs": ["bitter", "disappointing", "frustrating"],


  "good_emotive_adjs": ["cathartic", "healing", "mystical"],

  "bad_emotive_adjs": ["anti-climactic"],

//# Intensifiers for use in front of feeling adjectives
  "good_degrees": ["ridiculously", "amazingly"],
  "neutral_degrees": ["a little bit", "fairly", "pretty", "curiously"],
  "bad_degrees": ["worringly", "distressingly"],

//# Emotive nouns
  "good_feeling_nouns": ["love", "reflection", "romance", "enlightenment",
    "joy", "desire", "creativity"],

  "good_emotive_nouns": ["healing", "catharsis", "mysticism", "transcendence",
    "metamorphisis"],

  "bad_feeling_nouns": ["bitterness", "disappointment", "sadness", "frustration",
    "anger", "failure", "boredom", "tension"],

  "bad_emotive_nouns": ["bad luck", "misfortune", "deja vu"],

//# Misc
  "prediction_verbs": ["heralds", "marks", "foreshadows", "signifies"],

//# You would be well advised to avoid...
  "avoid_list": [
    "shopping",
    "swimming",
    "starchy carbs",
    "engaging strangers in conversation",
    "making too many jokes",
    "eating seafood",
    "rigorous physical activity",
    "operating heavy machinery",
    "staying inside for extended periods of time",
    "alienating your friends",
    "making life-changing decisions",
    "prolonging the inevitable",
    "places of worship",
    "people who are likely to annoy you",
    "drinking heavily this weekend",
  ],

//# People you may meet
  "familiar_people": [
    "your mother",
    "your father",
    "your closest friend",
    "a family member"
  ],

  "strange_people": [
    "a priest or minister",
    "a doctor",
    "a lawyer",
    "a mysterious gentleman",
    "a kind older lady",
    "a local public transport identity",
    "a seductive salesperson",
    "an old friend",
    "a washed up celebrity",
    "an attractive celebrity",
    "a homeless man",
    "a homeless woman",
    "a psychic",
    "a convicted criminal",
    "a musician",
    "a musical friend",
    "a mathematical friend",
    "a scientist",
    "a distant relative",
    "the love of your life",
    "your ex",
    "a bearded man",
    "your loudest friend",
    "an acquaintance",
    "someone from high school",
    "someone from university",
    "a reality tv show contestant",
    "a politician",
    "a right-wing politician",
    "a left-wing politician"
  ],

//# Locations for various events
  "locations": [	["at", "the beach"],
    ["in", "a shopping centre"],
    ["in", "the bush"],
    ["in", "a carpark"],
    ["at", "your house"],
    ["in", "your street"],
    ["near", "where you grew up"],
    ["in", "a club"],
    ["in", "a supermarket"],
    ["at", "a place of learning"],
    ["by", "the side of the road"],
    ["in", "the centre of the city"],
    ["in", "the heart of suburbia"],
    ["on top of", "a building"],
    ["in", "a park"],
    ["in", "a restaurant"],
    ["on", "a bus"],
    ["on", "a train"],
    ["on", "a ferry"],
    ["in", "a waiting room"],
    ["at", "a library"]
  ],

//# Types of discussions
  "neutral_discussions": [
    "discussion",
    "talk",
    "conversation",
    "debate"
  ],

  "good_discussions": [
    "chat",
    "intimate conversation",
    "chin wag"
  ],

  "bad_discussions": [
    "argument",
    "fight",
    "altercation",
    "terse chat",
    "misunderstanding"
  ],

//# Conversation topics (good or bad)
  "conversation_topics": [
    "the past",
    "the future",
    "your career",
    "your future",
    "music",
    "a TV show",
    "a film",
    "politics",
    "religion",
    "their feelings",
    "your feelings",
    "their work"
  ]
};


function consolation() {
  const rnum = Math.floor(Math.random() * 10);
  if (rnum <= 6) {
    let when = nu.chooseFrom(["shortly", "soon", "in due time"]);
    return `, but don't worry, everything will improve ${when}`;
  } else if (rnum <= 8) {
    return ", perhaps you need a change in your life?";
  } else {
    return "...";
  }
}


function positiveIntensify() {
  const rnum = Math.floor(Math.random() * 10);
  if (rnum <= 5) {
    let verb = nu.chooseFrom(["say", "do"]);
    return `, and there's nothing anyone can ${verb} to stop you`;
  } else if (rnum <= 8) {
    return ", and you don't care who knows it";
  } else {
    return ", and you don't give a damn";
  }
}


/**
 * Warns of what to avoid
 * @returns {*}
 */
function warning() {
  let sentence = "";
  const avoidList = getWords("avoid_list");
  const avoid = nu.chooseFrom(avoidList);
  const rnum = Math.floor(Math.random() * 10);
  if (rnum <= 3) {
    sentence = `You would be well advised to avoid ${avoid}`;
  } else if (rnum <= 6){
    sentence = `Avoid ${avoid} at all costs`;
  } else if (rnum <= 8) {
    sentence = `Steer clear of ${avoid} for a stress-free week`;
  } else {
    sentence = `For a peaceful week, avoid ${avoid}`;
  }
  return nu.sentenceCase(sentence);
}


function getWords(name) {
  return defLib[name];
}



module.exports.getWords = getWords;
module.exports.consolation = consolation;
module.exports.warning = warning;
module.exports.positiveIntensify = positiveIntensify;