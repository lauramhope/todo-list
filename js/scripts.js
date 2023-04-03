let todoList = [];
let id = 1;
let toDoThing = new List("wash the house")

function List(listItem){
  this.listItem = listItem;
  this.id = id++;
}

