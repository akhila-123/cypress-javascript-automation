import LoginPage from "../support/pageObjects/loginPage";
const loginPage = new LoginPage();


describe("Verify login page", () => {
  let userData;
  beforeEach(() => {
    loginPage.visitLoginPage();
    cy.fixture('userData').then((data) => {
      userData = data; // Store test data for use in tests
    });
  });

  it("Verify login with valid credentials", () => {
    cy.login(userData.validUser.email, userData.validUser.password); // Custom command
  });

  it("Verify login with incorrect email/password", () => {
    loginPage.fillEmail(userData.invalidUser.invalidEmail);
    loginPage.clickPasswordField();
    loginPage.verifyEmailError("Please enter a valid email address");

    loginPage.fillEmail(userData.validUser.email);
    loginPage.fillPassword(userData.invalidUser.password);
    loginPage.clickSubmit();
    loginPage.verifyLoginFailure("Invalid email or password.");
  });

  it.skip("Verify login with empty email/password", () => { //wantedly skipped
    loginPage.fillEmail(" ");
    loginPage.clickPasswordField();
    loginPage.verifyEmailError("Please enter a valid email address");

    loginPage.fillPassword("");
    loginPage.clickSubmit();
    loginPage.verifyPasswordError("This field cannot be blank");
  });

  it("Email field validations", () => {
    loginPage.fillEmail(userData.invalidUser.email);
    loginPage.fillPassword(userData.invalidUser.password);
    loginPage.clickSubmit();
    loginPage.verifyLoginFailure("Invalid email or password.");
  });

  it("Verify Remember Me option functionality", () => {
    loginPage.checkRememberMe();
    cy.login(userData.validUser.email, userData.validUser.password); // Custom command
    cy.getCookies("remember_user_token").should("exist");
    cy.reload();
    loginPage.verifyUserLoggedIn();
  });
});