const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        items.push(this);
    }

    static findAll() {
        return items;
    }

    static update(name, data) {
        let currentItem = Item.find(name);
        if (currentItem === undefined) {
            throw {
                message: "Not found", status: 404
            };
        }
        currentItem.name = data.name;
        currentItem.price = data.price;
        return currentItem;
    }

    static find(name) {
        const currentItem = items.find(i => i.name === name);
        if (currentItem === undefined) {
            throw { message: "Not Found", status: 404 }
        }
        return currentItem;
    }

    static delete(name) {
        let index = items.findIndex(i => i.name === name);
        if (index === -1) {
            throw { message: "Not Found", status: 404 }
        }
        items.splice(index, 1);
    }
}
module.exports = Item;