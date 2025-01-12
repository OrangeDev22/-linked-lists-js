const LinkedList = require("./LinkedList");

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log("--List", list.print());
console.log("--size", list.getSize());
console.log("--search", list.search(2));

list.remove(2);
console.log("--after delete", list.print());

console.log("--size after delete", list.getSize());
