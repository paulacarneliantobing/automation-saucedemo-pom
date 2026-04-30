class LoginPage {
  // ELEMENT
  get username() {
    return $("#user-name");
  }

  get password() {
    return $("#password");
  }

  get loginBtn() {
    return $("#login-button");
  }

  get errorMessage() {
    return $(".error-message-container");
  }

  get title() {
    return $(".title");
  }

  // ACTION
  async open() {
    await browser.url("/");
  }

  async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }

  // ASSERT HELPER (biar test lebih clean)
  async getErrorText() {
    return this.errorMessage.getText();
  }

  async getTitleText() {
    return this.title.getText();
  }
}

module.exports = new LoginPage();
