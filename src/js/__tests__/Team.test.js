import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('проверка app', () => {
  const stringConverter = new ArrayBufferConverter();
  stringConverter.load(getBuffer());
  const result = stringConverter.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
