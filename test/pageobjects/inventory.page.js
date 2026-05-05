class InventoryPage {
  // locator
  get title() {
    return $(".title");
  }

  // action (lebih POM)
  async isOnInventoryPage() {
    return (await this.title.getText()) === "Products";
  }
}

module.exports = new InventoryPage();
