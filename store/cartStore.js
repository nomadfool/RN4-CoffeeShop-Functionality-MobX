import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];
  numOfItems = null;

  addItemToCart = item => {
    let found = this.items.find(
      obj => obj.drink === item.drink && obj.option === item.option
    );

    if (found) {
      found.quantity += 1;
    } else {
      this.items.push(item);
    }
    this.getNumOfItems();
  };

  removeItemFromCart = item => {
    let found = this.items.find(
      obj => obj.drink === item.drink && obj.option === item.option
    );
    this.items.splice(this.items.indexOf(found), 1);
    this.getNumOfItems();
    if (this.items.length < 1) {
      this.numOfItems = null;
    }
  };

  checkOutCart = () => {
    this.items = [];
    this.numOfItems = null;
    alert("Thanks for shopping with us ;)");
  };
  getNumOfItems = () => {
    if (this.items.length > 0) {
      this.numOfItems = 0;
      this.items.forEach(item => (this.numOfItems += item.quantity));
    }
  };
}

decorate(CartStore, {
  items: observable,
  numOfItems: observable
});

export default new CartStore();
