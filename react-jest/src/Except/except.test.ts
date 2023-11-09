import React from "react";

describe.skip("test for expect use", () => {
  it("toBe test", () => {
    expect("grapefruit").toBe("grapefruit");
    expect(1).toBe(1);
    // expect({ name: "jack" }).toBe({ name: "jack" });
    expect({ name: "jack" }).not.toBe({ name: "jack" });
  });

  it("toEqual test", () => {
    expect({ name: "jack" }).toEqual({ name: "jack" });
    expect({ name: "jack", identity: { birthplace: "jiangShu" } }).toEqual({
      name: "jack",
      identity: { birthplace: "jiangShu" }
    });
  });

  it("arrayContaining simple test", () => {
    const sExpected = ["Alice", "Bob"];
    expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(sExpected));
  });

  it("arrayContaining completed test", () => {
    const cExpected = [
      { name: "Alice", identity: { birthplace: "jiangShu" } },
      { name: "Bob", identity: { birthplace: "angHui" } }
    ];

    expect([
      { name: "Alice", identity: { birthplace: "jiangShu" } },
      { name: "Bob", identity: { birthplace: "angHui" } },
      { name: "jack", identity: { birthplace: "jiangxi" } }
    ]).toEqual(expect.arrayContaining(cExpected));
  });
});
