/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const simpleFunc = require('../src/SimpleModule');

describe("A simple module", () => {
    test("it should say hello", () => {
        expect(simpleFunc()).toEqual("hello!");
    });
});