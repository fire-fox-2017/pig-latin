const assert = require('assert')

const myPigLatin = require('./pig_latin.js')

describe('Test pig latin functionality:', () => {
  describe('Words beginning with consonants', () => {
    it('should returns ellohay when sentence is hello', () => {
      assert.equal(myPigLatin.pigLatin('hello'), 'ellohay')
    })
    it('should returns "uckday" when sentence is "duck"', () => {
      assert.equal(myPigLatin.pigLatin('duck'), 'uckday')
    })
    it('should returns "igpay atinlay" when sentence is "Pig Latin"', () => {
      assert.equal(myPigLatin.pigLatin('Pig Latin'), 'igPay atinLay')
    })
    it('should returns "itchsway" when sentence is "switch"', () => {
      assert.equal(myPigLatin.pigLatin('switch'), 'itchsway')
    })
    it('should returns "oveglay" when sentence is "glove"', () => {
      assert.equal(myPigLatin.pigLatin('glove'), 'oveglay')
    })
    it('should returns "uitfray oothiesmay" when sentence is "fruit smoothie"', () => {
      assert.equal(myPigLatin.pigLatin('fruit smoothie'), 'uitfray oothiesmay')
    })
  })

  describe('Words beginning with vowels', () => {
    it('should returns "ityay" when sentence is "it"', () => {
      assert.equal(myPigLatin.pigLatin('it'), 'ityay')
    })
    it('should returns "eggyay" when sentence is "egg"', () => {
      assert.equal(myPigLatin.pigLatin('egg'), 'eggyay')
    })
  })
  describe('Words with the letter Y', () => {
    it('should returns "ellowyay" when sentence is "yellow"', () => {
      assert.equal(myPigLatin.pigLatin('yellow'), 'ellowyay')
    })
  })
})

