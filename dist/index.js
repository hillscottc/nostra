"use strict";

var _word_library = require('./word_library');

var _word_library2 = _interopRequireDefault(_word_library);

var _sentence_mgr = require('./sentence_mgr');

var _sentence_mgr2 = _interopRequireDefault(_sentence_mgr);

var _nostra_utils = require('./nostra_utils');

var nu = _interopRequireWildcard(_nostra_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('nostra');


module.exports = {

  /**
   * Generate a three to four sentence horoscope.
   * @returns {*[]}
   */
  generate: function generate() {
    var rnum = Math.floor(Math.random() * 10);

    var mood = rnum <= 8 ? "good" : "bad";

    var sentences = [_sentence_mgr2.default.feeling(mood), _word_library2.default.warning(), nu.chooseFrom([_sentence_mgr2.default.relationship(mood), _sentence_mgr2.default.encounter(mood)])];

    // randomize (shuffle) the array
    sentences = nu.shuffle(sentences);

    // Select 2 or 3 sentences, to add to the random feel
    var num_s = Math.floor(Math.random() * 2) + 2;
    sentences = sentences.slice(0, num_s);
    sentences = sentences.join(" ");

    sentences += " " + _sentence_mgr2.default.datePredict();

    debug(sentences);
    return sentences;
  }

};