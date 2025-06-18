🧪 **Cypress + JavaScript Test Framework**

Objective:
Design and implement an automated test framework using Cypress and JavaScript. The goal is to validate core functionality of a sample web application, applying good structure, reusability, and reporting.

Scenario:
Automate regression tests for a sample to-do list application:
👉 Demo app: https://courses.ultimateqa.com/users/sign_in

Requirements:
✅ Test Cases to Automate:
1. Verify login with valid credentials.
2. Verify login with incorrect email/password.
3. Verify login with empty email/password.
4. Verify Remember Me option functionality.

📂 Project Structure:
cypress/
  ├── fixtures/
  ├── integration/
  │   └── todos/
  │       └── todo.spec.js
  ├── support/
  │   ├── commands.js
  │   └── index.js
cypress.config.js
package.json
README.md

🛠 Technical Features:
1. Cypress as the core test runner.
2. Custom Commands for repeated actions (e.g., adding a new todo).
3. Page Object Model (optional) for structure.
4. Data-driven testing using fixtures.
5. Screenshots and videos for test reporting.
6. Retry logic using Cypress’ built-in retry-ability.
7. Test tagging or grouping using describe.only, it.skip, etc.
8. Integrate Cypress Dashboard
9. Integrate Mochawesome Reporter.
10. Add Api tests


Bonus:
1. Added GitHub Actions or other CI tool for running tests on push and parallel execution.
2. Added ESLint for linting JS files.
3. Use cypress.env.json to demonstrate environment handling.

Deliverables:
A GitHub link or zipped folder with the Cypress project.

A short README that explains how to install, run, and extend the framework.

Optionally, a short Loom or video walkthrough.
