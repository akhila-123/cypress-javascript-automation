// cypress/support/pageObjects/LoginPage.js

const loginPageUrl = "/users/sign_in";

// In loginPage.js
const selectors = {
  email: '[id="user[email]"]',
  emailError: '[id="user[email]-error"]',
  password: '[id="user[password]"]',
  passwordError: '[id="user[password]-error"]',
  submit: 'button[type="submit"]',
  rememberMe: '[id="user[remember_me]"]',
  loginError: '.form-error__list-item',
  enrollmentsLink: 'a[href="/enrollments"]',
};

class LoginPage {
  visitLoginPage() {
    cy.visit(loginPageUrl);
    cy.url().should("include", loginPageUrl);
  }

  fillEmail(email) {
    cy.get(selectors.email).clear().type(email);
  }

  fillPassword(password) {
    cy.get(selectors.password).clear().type(password);
  }

  clickPasswordField() {
    cy.get(selectors.password).focus();
  }

  clickSubmit() {
    cy.get(selectors.submit).click();
  }

  checkRememberMe() {
    cy.get(selectors.rememberMe).should("be.visible").check();
  }

  verifyEmailError(message) {
    cy.get(selectors.emailError)
      .should("be.visible")
      .and("contain", message)
      .and("have.css", "color", "rgb(231, 87, 37)");
  }

  verifyPasswordError(message) {
    cy.get(selectors.passwordError)
      .should("be.visible")
      .and("contain", message)
      .and("have.css", "color", "rgb(231, 87, 37)");
  }

  verifyLoginFailure(message) {
    cy.get(selectors.loginError)
      .should("be.visible")
      .and("contain", message)
      .and("have.css", "color", "rgb(231, 87, 37)");
  }

  verifyUserLoggedIn() {
    cy.get(selectors.enrollmentsLink).should("be.visible");
  }
}

export default LoginPage;