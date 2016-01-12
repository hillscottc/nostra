var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    wordLib = require('../word_library'),
    sentenceMgr = require('../sentence_mgr'),
    nostra = require('../index'),
    nostraUtils = require('../nostra_utils');


describe('nostra', function(){

  it('generate', function(){
    var results = nostra.generate();
    console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

});


describe('sentence_mgr', function(){

  it('relationship', function(){
    var results = sentenceMgr.relationship('good');
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

  it('encounter', function(){
    var results = sentenceMgr.encounter('good');
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

  it('feeling', function(){
    var results = sentenceMgr.feeling('good');
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

  it('datePredict', function(){
    var results = sentenceMgr.datePredict();
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

});


describe('wordLib', function(){

  it('getWords', function(){
    var results = wordLib.getWords("planets");
    var expected = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    expect(JSON.stringify(results)).to.equal(JSON.stringify(expected));
  });

  it('warning', function(){
    var results = wordLib.warning();
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });
});


describe('nostra utils', function(){

  describe('sentenceCase', function(){

    it('works', function(){
      var results = nostraUtils.sentenceCase("hello world");
      var expected = "Hello world.";
      expect(results).to.equal(expected);
    });

    it('works when already punctuated', function(){
      var results = nostraUtils.sentenceCase("hello world?");
      var expected = "Hello world?";
      expect(results).to.equal(expected);
    });

    it('works excited', function(){
      var results = nostraUtils.sentenceCase("hello world!", true);
      var expected = "Hello world!";
      expect(results).to.equal(expected);
    });
  })
});

