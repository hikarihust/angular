export class Video {
	
	constructor(
		private _id: string,
		private _name: string,
		private _seen: boolean = false
	){

	}

	public get id() : string {
		return this._id;
	}

	public get name() : string {
		return this._name;
	}

	public get seen() : boolean {
		return this._seen;
	}

	public set seen(v : boolean) {
		this._seen = v;
	}
}