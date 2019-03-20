import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    let found = this.items.find(
      obj => obj.drink === item.drink && obj.option === item.option
    );

    if (found) {
      found.quantity += 1;
    } else {
      this.items.push(item);
    }
  };

  removeItemFromCart = item => {
    let found = this.items.find(
      obj => obj.drink === item.drink && obj.option === item.option
    );
    this.items.splice(this.items.indexOf(found), 1);
  };

  checkOutCart = () => {
    this.items = [];
    alert("Thanks for shopping with us ;)");
  };

  get numOfItems() {
    let quantity = 0;
    if (this.items.length > 0) {
      this.items.forEach(item => (quantity += item.quantity));
    }
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  numOfItems: computed
});

export default new CartStore();
