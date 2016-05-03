import chai from 'chai';
import wordLib from '../dist/word_library';
import sentenceMgr from '../dist/sentence_mgr';
import nostra from '../dist/index';
import nostraUtils from '../dist/nostra_utils';

const expect = chai.expect;

describe('nostra', function(){

  it('generate', () => {
    const results = nostra.generate();
    console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

});


describe('sentence_mgr', () => {

  it('relationship', () => {
    const results = sentenceMgr.relationship('good');
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

  it('encounter', () => {
    const results = sentenceMgr.encounter('good');
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

  it('feeling', () => {
    const results = sentenceMgr.feeling('good');
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

  it('datePredict', () => {
    const results = sentenceMgr.datePredict();
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });

});


describe('wordLib', () => {

  it('getWords', () => {
    const results = wordLib.getWords("planets");
    const expected = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    expect(JSON.stringify(results)).to.equal(JSON.stringify(expected));
  });

  it('warning', () => {
    const results = wordLib.warning();
    //console.log(results);
    expect(results).to.have.length.of.at.least(2);
  });
});


describe('nostra utils', () => {

  describe('sentenceCase', () => {

    it('works', () => {
      const results = nostraUtils.sentenceCase("hello world");
      const expected = "Hello world.";
      expect(results).to.equal(expected);
    });

    it('works when already punctuated', () => {
      const results = nostraUtils.sentenceCase("hello world?");
      const expected = "Hello world?";
      expect(results).to.equal(expected);
    });

    it('works excited', () => {
      const results = nostraUtils.sentenceCase("hello world!", true);
      const expected = "Hello world!";
      expect(results).to.equal(expected);
    });
  })
});

