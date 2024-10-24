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

let travelers = new list("Travelers");
travelers.addItem("Chert");
travelers.addItem("Esker");
travelers.addItem("Syenite");
travelers.addItem("Riebeck");
travelers.addItem("Gabbro");
travelers.addItem("Feldspar");
travelers.addItem("Solanum");

let listOfLists = [shoppingList, travelers]

function renderListTitles() {
    let output = "";
    for (let i = 0; i < listOfLists.length; i++) {
        let listTitle = listOfLists[i].name;
        let thisList = listOfLists[i];
        output += `<span class="listName"">${listTitle}</span>`;
    }
    document.getElementById("lists").innerHTML = output;
}

renderListItems(listOfLists[1]);

renderListTitles();

function renderListItems(list) {
    let output = "";
    for (let i = 0; i < list.items.length; i++) {
        let addToOutput = list.items[i];
        output += `<div class="wholeListItem"><input type="checkbox"> <span class="listItem">${addToOutput}</span></div>`;
    }
    document.getElementById("showList").innerHTML = output;
}

function addItem() {
    let item = document.getElementById("addItemInput").value;
    if (!item) {
        alert("PUT A THING IN THE TEXTBOX DON'T LEAVE IT EMPTY");
        return;
    }
    document.getElementById("addItemInput").value = "";
    let chosenList = travelers; //this can be changed later to make it work on different lists, but for now it's just the one.
    chosenList.items.push(item);
    renderListItems(chosenList);
}

function removeItem() {
    let chosenList = travelers; //this can be changed later to make it work on different lists, but for now it's just the one.
    chosenList.items.pop();
    renderListItems(chosenList);
}