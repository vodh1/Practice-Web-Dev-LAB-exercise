import { List } from '../model/List.js';
import { ListView } from '../view/ListView.js';

export class App {
	constructor() {
		this.list = new List();
		this.listView = new ListView();
	}

	initialize() {
		this.listView.setOnRemoveItemCallback(this.handleRemoveItem.bind(this));
		this.listView.setOnAddItemCallback(this.handleAddButton.bind(this));
	}

	handleAddButton(text) {
		this.list.addItem(text);
		this.listView.render(this.list.getItems());
	}

	handleRemoveItem(index) {
		this.list.removeItem(index);
		this.listView.render(this.list.getItems());
	}
}
