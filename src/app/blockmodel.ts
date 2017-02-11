import {Model} from './model';

export class Blockmodel extends Model{
  
  id: number;
  blocktype: string = '';
  blockval: string = '';
  relatedvalues: number[] = [];
  display: string = '';

  attributeNames: string[] = ['id', 'blocktype', 'blockval', 'relatedvalues', 'display'];

}

