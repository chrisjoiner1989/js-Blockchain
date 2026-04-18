class Block {
  constructor(timestamp, data) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = "o";
    this.hash = this.caluclateHash();
    this.nonce = o;
  }

  caluclateHash() {}

  mineBlock(difficulty) {}
}
