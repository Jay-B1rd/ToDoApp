class list {
    constructor (name) {
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    /*removeItem(index) {
        // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
        this.items.splice(index, 1);
    }*/

    removeItem() {
        this.items.pop();
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

let listOfLists = [shoppingList, travelers];
let chosenIndex = 0;
renderListItems(0);
renderListTitles();

function renderListTitles() {
    let output = "";
    for (let i = 0; i < listOfLists.length; i++) {
        let listTitle = listOfLists[i].name;
        let thisList = listOfLists[i];
        // console.log(thisList);
        output += `<span class="listName" onclick="renderListItems(${i})">${listTitle}</span>`;
        //output += "<span class='listName' onclick='renderListItems(" + thisList + ")'>" + listTitle + "</span>";
    }
    document.getElementById("lists").innerHTML = output;
}

function renderListItems(listIndex) {
    let list = listOfLists[listIndex];
    chosenIndex = listIndex;
    let output = "";
    for (let i = 0; i < list.items.length; i++) {
        let addToOutput = list.items[i];
        output += `<div class="wholeListItem"><input type="checkbox"> <span class="listItem">${addToOutput}</span></div>`;
    }
    document.getElementById("showList").innerHTML = output;
    document.getElementById("listTitle").innerHTML = list.name;
    // console.log(chosenIndex);
    // console.log(listOfLists[chosenIndex]);
}

function makeList() {
    let listTitle = document.getElementById("newListInput").value;
    if (!listTitle) {
        alert("PUT A THING IN THE TEXTBOX DON'T LEAVE IT EMPTY");
        return;
    }
    document.getElementById("newListInput").value = "";
    let newList = new list(listTitle);
    listOfLists.push(newList);
    renderListTitles();
}

function removeList() {
    listOfLists.pop();
    renderListTitles();
}

function addItem() {
    // console.log(chosenIndex);
    // console.log(listOfLists[chosenIndex]);

    let item = document.getElementById("addItemInput").value;
    if (!item) {
        alert("PUT A THING IN THE TEXTBOX DON'T LEAVE IT EMPTY");
        return;
    }
    document.getElementById("addItemInput").value = "";

    listOfLists[chosenIndex].addItem(item);
    renderListItems(chosenIndex);
}

function removeItem() {
    listOfLists[chosenIndex].removeItem();
    renderListItems(chosenIndex);
}
/*
function addItem() {
    let item = document.getElementById("addItemInput").value;
    if (!item) {
        alert("PUT A THING IN THE TEXTBOX DON'T LEAVE IT EMPTY");
        return;
    }
    document.getElementById("addItemInput").value = "";
    let chosenList = listOfLists[chosenIndex]; //this can be changed later to make it work on different lists, but for now it's just the one.
    chosenList.addItem(item);
    renderListItems(chosenList);
}

function removeItem() {
    let chosenList = listOfLists[chosenIndex]; //this can be changed later to make it work on different lists, but for now it's just the one.
    chosenList.removeItem();
    renderListItems(chosenList);
}
*/
