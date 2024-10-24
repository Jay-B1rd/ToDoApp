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

let toDoList = new list("ToDo App");
toDoList.addItem("User must be able to create multiple lists of tasks.");
toDoList.addItem("User must be able to edit, delete, and mark tasks.");
toDoList.addItem("User must be able to clear tasks when they are complete.");
toDoList.addItem("User must be able to view all tasks in a list.");
toDoList.addItem("User must be able to search for specific tasks in the list.");
toDoList.addItem("User must be able to save tasks for later viewing.");
toDoList.addItem("User must be able to mark tasks as completed.");
toDoList.addItem("User must be able to delete tasks from list.");
toDoList.addItem("User must be able to customize task list view.");
toDoList.addItem("App must be intuitive and easy to use.");

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

let listOfLists = [toDoList, shoppingList, travelers];
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

function saveList() {
    // console.log(listOfLists[chosenIndex]);
    let objectToSave = listOfLists[chosenIndex];
    // console.log(objectToSave);
    let savedArray = [];
    savedArray.push(objectToSave.name);
    for (let i = 0; i < objectToSave.items.length; i++) {
        savedArray.push(objectToSave.items[i]);
    }
    // console.log(savedArray);
    localStorage.setItem("currentList", JSON.stringify(savedArray));
}

function loadList() {
    let loadedObject = JSON.parse(localStorage.getItem('currentList'));
    //console.log(loadedObject);
    let newList = new list(loadedObject[0]);
    for (let i = 1; i < loadedObject.length; i++) {
        newList.items.push(loadedObject[i]);
    }
    //console.log(newList);
    listOfLists.push(newList);
    renderListTitles();
}