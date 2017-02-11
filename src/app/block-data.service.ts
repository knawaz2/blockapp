import { Injectable } from '@angular/core';
import {Block} from './block';

@Injectable()
export class BlockDataService {
	
	lastId: number = 0;
	blocks : Block[] = [];

  constructor() {

   }

  
  addBlock(block: Block): BlockDataService {
    
    if (!block.id) {
      block.id = ++this.lastId;
    }
    this.blocks.push(block);
    return this;
  }

  getAllBlocks(): Block[] {
    return this.blocks;
  }

  getBlockById(id: number): Block {
    return this.blocks
      .filter(block => block.id === id)
      .pop();
  }

  getBlockByVal(val: string): Block {
    return this.blocks
      .filter(block => block.blockval === val)
      .pop();
  }

  updateBlockById(id: number, values: Object = {}): Block {
    let block = this.getBlockById(id);
    if (!block) {
      return null;
    }
    Object.assign(block, values);
    
    return block;
  }


  toggleBlockDisplay(block: Block): Block{
    let updatedBlock = this.updateBlockById(block.id, {
      display: 'not-display-class'
    });


    return updatedBlock;
  }

  showBlockDisplay(block: Block): Block{
    let updatedBlock = this.updateBlockById(block.id, {
      display: 'display-class'
    });


    return updatedBlock;
  }


  toggleRelatedBlocks(block: Block){
  	console.log("Function is invoked");
  	let returnVals:Block[];
  	let relatedValues: string[] = block.relatedvalues;

  	for (var i of relatedValues) {
	   console.log(i);
	   this.toggleBlockDisplay(this.getBlockByVal(i));
	}

	
  }


  showAllBlocks(blocks: Block[]){
    
    for (var tmpblock of blocks) {
    this.showBlockDisplay(this.getBlockById(tmpblock.id));
      
    }

  }


  getRelatedBlocks(block: Block): Block[]{
  	let returnVals:Block[];
  	let relatedValues: string[] = block.relatedvalues;
  	for (var i of relatedValues) {
  	console.log(i);
	   returnVals.push(this.getBlockByVal(i));
	}

	return returnVals;
  }


  removeAll(): boolean{

      this.blocks = [];

      return true;

  }



}
