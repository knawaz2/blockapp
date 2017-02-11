import {Block} from './block';

describe('Block', () => {
  it('should create an instance', () => {
    expect(new Block()).toBeTruthy();
  });

it('should accept values in the constructor', () => {
    let block = new Block({
      blocktype: 'number',
      blockval: '1',
      relatedvalues: [2,3],
      display: true
    });
    expect(block.blocktype).toEqual('number');
    expect(block.blockval).toEqual('1');
    expect(block.blockval).toEqual('1');
  });

});
