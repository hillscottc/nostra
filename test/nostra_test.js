var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect;

var word_library = require('../word_library');
var nostra = require('../index');
var nostraUtils = require('../nostra_utils');


describe('nostra', function(){

    it('generate', function(){
        var results = nostra.generate();
        console.log(results);
        expect(results).to.have.length.of.at.least(2);
    });

    it('relationship', function(){
        var results = nostra.relationship('good');
        //console.log(results);
        expect(results).to.have.length.of.at.least(2);
    });

    it('encounter', function(){
        var results = nostra.encounter('good');
        //console.log(results);
        expect(results).to.have.length.of.at.least(2);
    });

    it('feeling', function(){
        var results = nostra.feeling('good');
        //console.log(results);
        expect(results).to.have.length.of.at.least(2);
    });

});


describe('word_library', function(){

    it('getWords', function(){
        var results = word_library.getWords("planets");
        var expected = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        expect(JSON.stringify(results)).to.equal(JSON.stringify(expected));
    });

    it('warning', function(){
        var results = word_library.warning();
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

