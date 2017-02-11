export class Block {
	id: number;
	blocktype: string = '';
	blockval: string = '';
	relatedvalues: string[] = [];
	display: string = '';

	constructor (values: Object = {} ){
		Object.assign(this, values);



	}

}
