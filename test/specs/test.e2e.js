const LoginPage = require("../pageobjects/login.page");

describe("Login SauceDemo POM", () => {
  it("should login successfully", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");

    const titleText = await $(".title").getText();
    expect(titleText).toContain("Products");

    await browser.checkScreen("login-success");
  });

  it("should fail login with wrong password", async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "salah_password");

    const error = await $(".error-message-container");
    await error.waitForDisplayed();

    const errorText = await error.getText();
    expect(errorText).toContain("Username and password do not match");

    await browser.checkScreen("wrong-password");
  });

  it("should fail login with invalid username", async () => {
    await LoginPage.open();
    await LoginPage.login("user_salah", "secret_sauce");

    const error = await $(".error-message-container");
    await error.waitForDisplayed();

    const errorText = await error.getText();
    expect(errorText).toContain("Username and password do not match");

    await browser.checkScreen("invalid-username");
  });

  it("should fail login locked user", async () => {
    await LoginPage.open();
    await LoginPage.login("locked_out_user", "secret_sauce");

    const error = await $(".error-message-container");
    await error.waitForDisplayed();

    const errorText = await error.getText();
    expect(errorText).toContain("locked out");

    await browser.checkScreen("locked-user");
  });
});
