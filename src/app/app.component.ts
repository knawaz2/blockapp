import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Headers, Http} from '@angular/http';
import {Blockmodel} from './blockmodel';
import 'rxjs';

import {Block} from './block';
import {BlockDataService} from './block-data.service';

@Component({
  providers: [BlockDataService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	//title = 'app works!';
	private newblock: Block = new Block();
	private blocks: Block[] = [];
  private blockId = 0;
  private blockVal: string = '';
  private relatedVals:string = '';

	constructor(private blockDataService: BlockDataService, private http: Http) {

  this.blockId = this.blocks.length;

  this.newblock = ({
      id:this.blockId,
      blocktype:"number",
      blockval:"1",
      relatedvalues:["a","c"],
      display:"display-class"
    });
    
    this.addBlock();
this.blockId++;
this.newblock = ({
      id:this.blockId,
      blocktype:"char",
      blockval:"a",
      relatedvalues:["1"],
      display:"display-class"
    });
    
    this.addBlock();

this.blockId++;
    this.newblock = ({
      id:this.blockId,
      blocktype:"char",
      blockval:"c",
      relatedvalues:["1"],
      display:"display-class"
    });
    
    this.addBlock();
    this.blocks = blockDataService.getAllBlocks();

  }



  addBlockusingForm(){

    let relatedValues: string[] = this.relatedVals.split(",");
    console.log("its before here");
    let tmpBlock: Block = this.blockDataService.getBlockByVal(this.blockVal);
    console.log("its after here");
    console.log(tmpBlock, "==============");
    if(tmpBlock !==  undefined)
    {
    console.log("into the condition");
      this.blockDataService.updateBlockById(tmpBlock.id, {
        display: 'display-class',
        relatedvalues: relatedValues
      });

     
    }else{
console.log("in else condition");
        this.blockId = this.blocks.length;
        this.blockId = this.blockId +1;
        this.newblock = ({
          id: this.blockId,
          blocktype:"char",
          blockval:this.blockVal,
          relatedvalues:relatedValues,
          display:"display-class"
        });
        this.addBlock();
    
    }


    
    for (var i of relatedValues) {

        let tmpBlock: Block = this.blockDataService.getBlockByVal(i);
      if(tmpBlock !==  undefined){

          let tmprelatedValues: string[] = tmpBlock.relatedvalues;
          tmprelatedValues.push(this.blockVal);

          this.blockDataService.updateBlockById(tmpBlock.id, {
            display: 'display-class',
            relatedvalues: tmprelatedValues  
          });
      }else{
        this.blockId = this.blockId +1;
        this.newblock = ({
          id: this.blockId,
          blocktype:"number",
          blockval:i,
          relatedvalues:[this.blockVal],
          display:"display-class"
        });
        this.addBlock();
      }

    }
    this.blocks = this.blockDataService.getAllBlocks();

  
  }
  addBlock() {

    this.blockDataService.addBlock(this.newblock);
    this.newblock = new Block();
  }

  toggleRelatedBlocks(block: Block) {
  
  console.log("function invoked");
    this.blockDataService.toggleRelatedBlocks(block);
  }

  showAllBlocks(blocks: Block[]){
    this.blockDataService.showAllBlocks(blocks);
  }

  removeAllBlocks(){

    this.blockDataService.removeAll();
    this.blocks = this.blockDataService.getAllBlocks();
  }



}
