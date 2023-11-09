import React from "react";

beforeAll(() => {
  console.log("beforeAll");
});

beforeEach(() => {
  console.log("beforeEach global");
});

describe.skip("describe lay 1 ", () => {
  beforeAll(() => {
    console.log("beforeAll lay1");
  });

  beforeEach(() => {
    console.log("beforeEach lay1");
  });

  it("it lay1", () => {
    console.log("it lay1");
  });

  describe("describe lay 2 ", () => {
    beforeAll(() => {
      console.log("beforeAll lay2");
    });

    beforeEach(() => {
      console.log("beforeEach lay2");
    });

    it("it lay2", () => {
      console.log("it lay2");
    });
  });
});
