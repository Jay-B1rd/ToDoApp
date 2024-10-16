class list {
    constructor (name) {
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(index) {
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        this.items.splice(index, 1);
    }

    consoleLog() {
        console.log(this.items);
    }
}

let shoppingList = new list("Shopping List");
shoppingList.addItem("Sugar");
shoppingList.addItem("Milk");
shoppingList.addItem("Cheese");
shoppingList.addItem("Flour");
shoppingList.addItem("Eggs");
shoppingList.consoleLog();
shoppingList.removeItem(2);
shoppingList.consoleLog();

let travelers = new list("Travelers");
travelers.addItem("Chert");
travelers.addItem("Esker");
travelers.addItem("Syenite");
travelers.addItem("Riebeck");
travelers.addItem("Gabbro");
travelers.addItem("Feldspar");
travelers.addItem("Solanum");
travelers.addItem("Kaepora");

let listOfLists = [shoppingList, travelers]

function renderListTitles() {
    for (let i = 0; i < listOfLists.length; i++) {
        let listTitle = listOfLists[i].name;
        document.getElementById(lists).innerHTML += `<span class="listName">${listTitle}</span>`;
    }
}

window.onload = document.getElementById(lists).innerHTML = "<span>haha</span>";

// window.onload = renderListTitles();