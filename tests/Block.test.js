import Block from "../src/Block";

describe("Block", () => {
  it("hash 값을 반환해야 한다.", () => {
    const newBlock = new Block();

    const hash = newBlock.toHash();

    expect(/^[0-9A-F]{64}$/i.test(hash)).toBe(true);
  });
});
