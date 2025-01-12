const Node = require("./Node");

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    print() {
        const result = [];
        let current = this.head;
        while(current) {
            result.push(current.data);;
            current = current.next;
        }
        return result;
    }
    remove(value) {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }

        return false;
    }

    getSize() {
        return this.size;
    }
}

module.exports = LinkedList;