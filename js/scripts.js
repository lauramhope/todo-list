//creates the list and stores the items
function List(){
  this.objectListItem = {};
  this.itemId = 0;
}

// creates the todo list item
function ListItem(newToDo){
  this.toDo = newToDo;
}

// adds items to list, setting the ID via 
List.prototype.addToList = function(toDo){
  toDo.id = this.setID();
  this.objectListItem[toDo.id] = toDo;
}

// gives each item an id# starting at 1
List.prototype.setID = function() {
  this.itemId += 1;
  return this.itemId;
}

List.prototype.findItem = function(id) {
  if (this.objectListItem[id] !== undefined) {
    return this.objectListItem[id];
  }
  return false;
};

List.prototype.removeItem = function(id) {
  if (this.objectListItem[id] === undefined) {
    return console.log("Id Not Found");
  }
  delete this.objectListItem[id];
  return true; 
}

let list = new List;

function addButton(){
  for(let i = 0; i < 1; i++){
  let thingToDo = document.querySelector("input").value;
  let toDo = new ListItem(thingToDo);
  list.addToList(toDo);
  }
  console.log(list.objectListItem);
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const p = document.querySelector("p");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addButton();
  })
})




// addToList("wash dog")
// todoList[0].listItem
// todoList[0].id
// todoList


// function TodoList() {
//   this.items = {};
//   this.currentId = 0;
// }

// List.prototype.addItem = function(item) {
//   item.id = this.assignId();
//   this.items[item.id] = item;
// };

// List.prototype.assignId = function () {
//   this.currentId += 1;
//   return this.currentId;
// };

// List.prototype.findItem = function (id) {
//   if (this.items[id] !== undefined) {
//     return this.items[id];
//   }
//   return false;
// }

// List.prototype.deleteItem = function(id) {
//   if (this.items[id] === undefined) {
//     return false;
//   }
//   delete this.items[id];
//   return true;
// }

//   this.chore = chore;
// }