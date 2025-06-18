import CreateAccountPage from "../support/pageObjects/createAccountPage";
import { generateRandomEmail } from "../support/utils";
import userData from "../fixtures/userData.json"; // Assuming userData.json contains the necessary test data

const createAccountPage = new CreateAccountPage();

// cy.fixture('userData').as('userData');

describe("Verify create account page", () => {
  it("Verify create account with valid details", () => {
    const email = generateRandomEmail();

    createAccountPage.visit();
    createAccountPage.acceptTerms();
    createAccountPage.fillFirstName(userData.newUser.firstName);
    createAccountPage.fillLastName(userData.newUser.lastName);
    createAccountPage.fillEmail(email);
    createAccountPage.fillPassword(userData.newUser.password);
    createAccountPage.submitForm();
    createAccountPage.verifySignupSuccess();
  });
});