"use strict";
var debug = require('debug')('nostra'),
    wordLib = require('./word_library'),
    sentenceMgr = require('./sentence_mgr'),
    nu = require('./nostra_utils');


module.exports = {

  /**
   * Generate a three to four sentence horoscope.
   * @returns {*[]}
   */
  generate : function () {
    var rnum = Math.floor(Math.random() * 10);
    var mood;
    if (rnum <= 8) {
      mood = "good";
    } else {
      mood = "bad";
    }

    var sentences = [
      sentenceMgr.feeling(mood),
      wordLib.warning(),
      nu.chooseFrom([sentenceMgr.relationship(mood), sentenceMgr.encounter(mood)])
    ];

    // randomize (shuffle) the array
    sentences = nu.shuffle(sentences);

    // Select 2 or 3 sentences, to add to the random feel
    var num_s = Math.floor(Math.random() * 2) + 2;
    sentences = sentences.slice(0, num_s);
    sentences = sentences.join(" ");
    debug(sentences);
    return sentences;
  }

};


