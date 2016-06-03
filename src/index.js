"use strict";
const debug = require('debug')('nostra');
import wordLib  from './word_library';
import sentenceMgr from './sentence_mgr';
import * as nu from './nostra_utils';

module.exports = {

  /**
   * Generate a three to four sentence horoscope.
   * @returns {*[]}
   */
  generate:() => {
    const rnum = Math.floor(Math.random() * 10);

    const mood = (rnum <= 8) ?  "good" : "bad";

    let sentences = [
      sentenceMgr.feeling(mood),
      wordLib.warning(),
      nu.chooseFrom([sentenceMgr.relationship(mood), sentenceMgr.encounter(mood)])
    ];

    // randomize (shuffle) the array
    sentences = nu.shuffle(sentences);

    // Select 2 or 3 sentences, to add to the random feel
    let num_s = Math.floor(Math.random() * 2) + 2;
    sentences = sentences.slice(0, num_s);
    sentences = sentences.join(" ");

    sentences += " " + sentenceMgr.datePredict();

    debug(sentences);
    return sentences;
  }

};





