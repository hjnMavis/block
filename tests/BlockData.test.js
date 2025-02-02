import sha256 from "crypto-js/sha256";
import BlockData from "../src/BlockData";

describe("BlockData", () => {
  it("입력 받은 data를 저장해야 한다.", () => {
    const input = "hello";

    const newBlock = new BlockData(input);

    expect(newBlock.data).toBe(input);
  });

  it("입력 받은 data를 해시한 값을 반환해야 한다.", () => {
    const input = "hello";

    const newBlock = new BlockData(input);
    const myHash = sha256(input).toString();
    const yourHash = newBlock.toHash().toString();

    expect(myHash).toBe(yourHash);
  });
});
