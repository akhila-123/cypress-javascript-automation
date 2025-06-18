const signUpUrl = "/users/sign_up";
const selectors = {
  firstName: '[id="user[first_name]"]',
  lastName: '[id="user[last_name]"]',
  email: '[id="user[email]"]',
  password: '[id="user[password]"]',
  acceptTermsCheckbox: 'input[type="checkbox"]',
  submitButton: 'button[type="submit"]',
  enrollmentsLink: 'a[href="/enrollments"]',
};

class CreateAccountPage {
  visit() {
    cy.visit(signUpUrl, { failOnStatusCode: false });
    cy.url().should("include", signUpUrl);
  }

  acceptTerms() {
    cy.get(selectors.acceptTermsCheckbox).should("be.visible").check();
  }

  fillFirstName(firstName) {
    cy.get(selectors.firstName).should("be.visible").type(firstName);
  }

  fillLastName(lastName) {
    cy.get(selectors.lastName).should("be.visible").type(lastName);
  }

  fillEmail(email) {
    cy.get(selectors.email).should("be.visible").type(email);
  }

  fillPassword(password) {
    cy.get(selectors.password).should("be.visible").type(password);
  }

  submitForm() {
    cy.get(selectors.submitButton).click();
  }

  verifySignupSuccess() {
    cy.get(selectors.enrollmentsLink).should("be.visible");
  }
}

export default CreateAccountPage;