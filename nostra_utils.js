"use strict";

/**
 * Capitalise the first letter of the sentence and add a full stop.
 * @param sentence
 * @param exciting
 */
function sentenceCase(sentence, exciting) {

  if (typeof exciting === 'undefined') {
    exciting = false;
  }

  // uppercase the first letter
  sentence = sentence[0].toUpperCase() + sentence.slice(1);

  if (['.', '!', '?'].indexOf(sentence.slice(-1)) > -1) {
    return sentence;
  } else if (exciting) {
    return sentence + "!";
  } else {
    return sentence + ".";
  }
}


/**
 * Prefix with 'a' or 'an', as appropriate.
 * @param word
 * @returns {string}
 */
function an(word) {
  if (["a", "e", "i", "o", "u"].indexOf(word[0]) > -1) {
    return "an " + word;
  } else {
    return "a " + word;
  }
}


/**
 * A fast means to randomize short arrays.
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param array
 * @returns {*}
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/**
 * Return random item from a list.
 * @param items
 * @returns {*}
 */
function chooseFrom(items) {
  return items[Math.floor(Math.random() * items.length)]
}


/**
 * Convert 'ing' endings to 'ed' endings.
 * @param word
 * @returns {*}
 */
function ingToEd(word) {
  if (word.slice(-3) === "ing") {
    return word.slice(0, -3) + "ed"
  } else {
    return word
  }
}


module.exports.sentenceCase = sentenceCase;
module.exports.shuffle = shuffle;
module.exports.chooseFrom = chooseFrom;
module.exports.an = an;
module.exports.ingToEd = ingToEd;