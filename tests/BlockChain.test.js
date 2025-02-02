import BlockData from "../src/BlockData";
import BlockChain from "../src/BlockChain";

describe("BlockChain", () => {
  it("제네시스 블록을 가지고 있어야 한다.", () => {
    const blockChain = new BlockChain();
    const genesisBlock = blockChain.chain[0];

    expect(genesisBlock).toBeInstanceOf(BlockData);
  });
});
