export class List {
	constructor() {
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);
	}

	removeItem(index) {
		this.items.splice(index, 1);
	}

	getItems() {
		return this.items;
	}
}
