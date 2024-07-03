import {
  wordContainsLettersOnly,
  isStringEqualToIgnoreCase,
  wordContainsNonRepetitiveLettersOnly,
  emptyStringIsAnIsogram,
  isIsogram,
} from "../../src/functions";

describe("An isogram is a word that has no repeating letters, consecutive or non-consecutive.", () => {
  describe("We want to determine if a word is an isogram or not", () => {
    describe("First we need to check if the word contains letters only", () => {
      it("cyprus --> true", () => {
        expect(wordContainsLettersOnly("cyprus")).toBeTruthy();
      });
      it("cyprusis1 --> false", () => {
        expect(wordContainsLettersOnly("cyprusis1")).toBeFalsy();
      });
      it("@cyprus!", () => {
        expect(wordContainsLettersOnly("@cyprus!")).toBeFalsy();
      });
    });
    describe("Capital letter should be ignored", () => {
      it("cyprus --> cyprus", () => {
        expect(isStringEqualToIgnoreCase("cyprus")).toEqual("cyprus");
      });
      it("CYprus --> cyprus", () => {
        expect(isStringEqualToIgnoreCase("CYprus")).toEqual("cyprus");
      });
    });
    describe("An empty string can also be considered as an Isogram", () => {
      it("empty string", () => {
        expect(emptyStringIsAnIsogram("")).toBeTruthy();
      });
    });
    describe("Next, an Isogram should not contain repetitive letters", () => {
      it("cyprus --> true", () => {
        expect(wordContainsNonRepetitiveLettersOnly("cyprus")).toBeTruthy();
      });
      it("cypruzzzz --> false", () => {
        expect(wordContainsNonRepetitiveLettersOnly("cypruzzzzz")).toBeFalsy();
      });
    });
    describe("Now we can test our logic in the endProduct", () => {
      it("cyprus --> true", () => {
        expect(isIsogram("cyprus")).toBeTruthy();
      });
      it("CYprus --> true", () => {
        expect(isIsogram("CYprus")).toBeTruthy();
      });
      it("Empty string --> true", () => {
        expect(isIsogram("")).toBeTruthy();
      });
      it("cyprusis1 --> false", () => {
        expect(isIsogram("cyprusis1")).toBeFalsy();
      });
      it("@cyprus! --> false", () => {
        expect(isIsogram("@cyprus!")).toBeFalsy();
      });
      it("cypruzzzz --> false", () => {
        expect(isIsogram("cypruzzzz")).toBeFalsy();
      });
      it("cypruZz --> false", () => {
        expect(isIsogram("moOse")).toBeFalsy();
      });
    });
  });
});
