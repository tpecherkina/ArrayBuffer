export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferFrom = new Uint16Array(this.buffer);
    let stringResult = '';
    for (let i = 0; i < bufferFrom.length; i += 1) {
      stringResult += String.fromCharCode(bufferFrom[i]);
    }
    return stringResult;
  }
}
