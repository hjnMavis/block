import BlockChainAddLink from "../src/BlockChainAddLink";
import BlockHash from "../src/BlockHash";

let blockchain;

describe("BlockChainAddLink", () => {
  beforeEach(() => {
    blockchain = new BlockChainAddLink();
  });

  describe("블록체인에 블록 추가", () => {
    let genesisBlock;
    let block1;

    beforeEach(() => {
      genesisBlock = new BlockHash(5);
      block1 = new BlockHash(5);
      blockchain.addBlock(genesisBlock);
      blockchain.addBlock(block1);
    });

    it("이전 블록의 해시값을 previousHash에 가지고 있어야 한다.", () => {
      expect(block1.previousHash.toString()).toBe(
        genesisBlock.toHash().toString(),
      );
    });

    describe("제네시스 블록체인 데이터가 변경되면", () => {
      let initialGenesisHash;
      let initialBlock1Hash;

      beforeEach(() => {
        initialGenesisHash = genesisBlock.toHash().toString();
        initialBlock1Hash = block1.toHash().toString();
        genesisBlock.data = 10;
      });

      test("제네시스 해시값이 변경되어야 한다.", () => {
        const newHash = genesisBlock.toHash().toString();
        expect(initialGenesisHash).not.toBe(newHash);
      });

      test("두번째 블록의 해시도 변경되어야 한다.", () => {
        const newHash = genesisBlock.toHash().toString();
        expect(initialBlock1Hash).not.toBe(newHash);
      });
    });
  });
});
