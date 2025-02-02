import BlockData from "../src/BlockData";
import BlockChainAdd from "../src/BlockChainAdd";

describe("BlockChainAdd", () => {
  let blockChain;

  beforeEach(() => {
    blockChain = new BlockChainAdd();
  });

  it("addBlock 함수를 가지고 있어야 한다.", () => {
    expect(typeof blockChain.addBlock).toBe("function");
  });

  describe("블록 추가", () => {
    let block1;
    let block2;

    beforeEach(() => {
      block1 = new BlockData("Some data");
      block2 = new BlockData("Some other data");
      blockChain.addBlock(block1);
      blockChain.addBlock(block2);
    });

    it("총 3개의 블록으로 구성되어야 한다.", () => {
      expect(blockChain.chain.length).toBe(3);
    });

    it("추가된 두 개의 블록이 체인에 들어있어야 한다.", () => {
      expect(blockChain.chain[1]).toStrictEqual(block1);
      expect(blockChain.chain[2]).toStrictEqual(block2);
    });
  });
});
