const addButton = document.querySelector('.add-btn');
let item_count = 0

function handleAddButton() {
    const addText = document.querySelector('.input-box');
    const ulList = document.querySelector('.ul-list') 
    ulList.innerHTML += `
        <li class="item-${++item_count}">
          <div>
              <input type="checkbox"> ${addText.value} 
          </div>
          <button class="remove-btn">X</button>
        </li>
    `;

    addText.value = '' 

    const removeButtons = document.querySelectorAll(`.remove-btn`);
    function handleRemoveButton(event) {
      const removeBtn = event.target
      const li = removeBtn.parentElement
      li.remove()
    }

    for (const rmBtn of removeButtons) {
      rmBtn.addEventListener('click', handleRemoveButton)
    }
}

addButton.addEventListener('click', handleAddButton);