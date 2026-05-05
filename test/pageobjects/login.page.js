class LoginPage {
  // locator
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get errorMessage() {
    return $(".error-message-container");
  }

  // action
  async open() {
    await browser.url("/");
    await this.inputUsername.waitForDisplayed();
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  }

  async isLoginFailed() {
    return await this.errorMessage.isDisplayed();
  }

  async isErrorMessageContains(text) {
    const message = await this.errorMessage.getText();
    return message.includes(text);
  }
}

module.exports = new LoginPage();
