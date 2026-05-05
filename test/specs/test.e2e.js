const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Login SauceDemo POM", () => {
  it("Positive - login success", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    await expect(InventoryPage.title).toHaveText("Products");
  });

  it("Negative - invalid username", async () => {
    await LoginPage.open();
    await LoginPage.login("invalid_user", "secret_sauce");

    await expect(LoginPage.errorMessage).toHaveText(
      expect.stringContaining("Username and password do not match"),
    );
  });

  it("Negative - wrong password", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "wrong_password");

    await expect(LoginPage.errorMessage).toHaveText(
      expect.stringContaining("Username and password do not match"),
    );
  });

  it("Negative - locked out user", async () => {
    await LoginPage.open();
    await LoginPage.login("locked_out_user", "secret_sauce");

    await expect(LoginPage.errorMessage).toHaveText(
      expect.stringContaining("locked out"),
    );
  });
});
