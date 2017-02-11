/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Block } from './block';
import { BlockDataService } from './block-data.service';

describe('BlockDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockDataService]
    });
  });

  it('should ...', inject([BlockDataService], (service: BlockDataService) => {
    expect(service).toBeTruthy();
  }));


  describe('#getAllBlocks()', () => {

    it('should return an empty array by default', inject([BlockDataService], (service: BlockDataService) => {
      expect(service.getAllBlocks()).toEqual([]);
    }));

    it('should return all todos', inject([BlockDataService], (service: BlockDataService) => {
      let block1 = new Block({id: 1, blocktype: 'number', blockval: '1', relatedvalues: [3,5,6], display:true});
      let block2 = new Block({id: 2, blocktype: 'number', blockval: '2', relatedvalues:[4], display:true});
      let block3 = new Block({id: 3, blocktype: 'char', blockval: 'a', relatedvalues:[1], display:true});
      let block4 = new Block({id: 4, blocktype: 'char', blockval: 'b', relatedvalues:[2], display:true});
      let block5 = new Block({id: 5, blocktype: 'char', blockval: 'c', relatedvalues:[1], display:true});
      let block6 = new Block({id: 6, blocktype: 'char', blockval: 'd', relatedvalues:[1], display:true});
      service.addBlock(block1);
      service.addBlock(block2);
      service.addBlock(block3);
      service.addBlock(block4);
      service.addBlock(block5);
      service.addBlock(block6);
      expect(service.getAllBlocks()).toEqual([block1, block2, block3, block4, block5, block6]);
    }));

  });

  describe('#save(block)', () => {

    it('should automatically assign an incrementing id', inject([BlockDataService], (service: BlockDataService) => {
      let block1 = new Block({id: 1, blocktype: 'number', blockval: '1', relatedvalues:[3,5,6], display:true});
      let block2 = new Block({id: 2, blocktype: 'number', blockval: '2', relatedvalues:[4], display:true});
      let block3 = new Block({id: 3, blocktype: 'char', blockval: 'a', relatedvalues:[1], display:true});
      let block4 = new Block({id: 4, blocktype: 'char', blockval: 'b', relatedvalues:[2], display:true});
      let block5 = new Block({id: 5, blocktype: 'char', blockval: 'c', relatedvalues:[1], display:true});
      let block6 = new Block({id: 6, blocktype: 'char', blockval: 'd', relatedvalues:[1], display:true});
      service.addBlock(block1);
      service.addBlock(block2);
      service.addBlock(block3);
      service.addBlock(block4);
      service.addBlock(block5);
      service.addBlock(block6);
      expect(service.getBlockById(1)).toEqual(block1);
      expect(service.getBlockById(2)).toEqual(block2);
      expect(service.getBlockById(3)).toEqual(block3);
      expect(service.getBlockById(4)).toEqual(block4);
      expect(service.getBlockById(5)).toEqual(block5);
      expect(service.getBlockById(6)).toEqual(block6);
    }));

  });


});