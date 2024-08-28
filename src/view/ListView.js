export class ListView {
	constructor() {
		this.inputBox = document.querySelector('.input-box');
		this.addButton = document.querySelector('.add-btn');
		this.ulList = document.querySelector('.ul-list');

		this.addListeners();
	}

	addListeners() {
		this.addButton.addEventListener('click', this.handleAddButton.bind(this));
		this.inputBox.addEventListener('keyup', this.handleInputBox.bind(this));
		this.ulList.addEventListener('click', this.handleRemoveButton.bind(this));
	}

	render(items) {
		this.ulList.innerHTML = items
			.map(
				(item, index) => `
        <li>
          <div>
            <input type="checkbox"> ${item} 
          </div>
          <button class="remove-btn" data-index="${index}">
						<img class="remove-btn" src="src/assets/icons/trash.svg" alt="Remove" data-index="${index}">
					</button>
        </li>
    `
			)
			.join('');
	}

	handleAddButton() {
		this.onAddItem(this.inputBox.value);
		this.inputBox.value = '';
		this.inputBox.focus();
		this.addButton.disabled = true;
	}

	handleRemoveButton(event) {
		if (!event.target.classList.contains('remove-btn')) return;

		const index = Number(event.target.getAttribute('data-index'));
		this.onRemoveItem(index);
	}

	handleInputBox(event) {
		const text = event.target.value.trim();

		if (event.key !== 'Enter' || text === '') {
			if (text !== '') {
				this.addButton.disabled = false;
			} else {
				this.addButton.disabled = true;
			}
			return;
		}

		this.handleAddButton();
	}

	setOnRemoveItemCallback(callback) {
		this.onRemoveItem = callback;
	}

	setOnAddItemCallback(callback) {
		this.onAddItem = callback;
	}
}
