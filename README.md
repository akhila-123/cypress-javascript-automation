🧪 Cypress + JavaScript Test Framework
Objective:
Design and implement an automated test framework using Cypress and JavaScript. The goal is to validate core functionality of a sample web application, applying good structure, reusability, and reporting.

Scenario:
Automate regression tests for a sample to-do list application:
👉 Demo app: https://example.cypress.io/todo

Requirements:
✅ Test Cases to Automate:
1. Verify that the to-do list loads with default items.

2. Add a new to-do item and validate it appears in the list.

3. Mark an item as completed and verify it moves to the completed section.

4. Clear completed items and validate they're removed from the list.

5. Filter by "Active" and "Completed" and ensure correct filtering.

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

Bonus:
1. Added GitHub Actions or other CI tool for running tests on push.
2. Added ESLint for linting JS files.
3. Use cypress.env.json to demonstrate environment handling.

Deliverables:
A GitHub link or zipped folder with the Cypress project.

A short README that explains how to install, run, and extend the framework.

Optionally, a short Loom or video walkthrough.

Evaluation Criteria:
Clean code organization and best practices

Usage of Cypress features (commands, selectors, waits, etc.)

Reusability and maintainability of test code

Proper assertions and coverage

Overall structure and documentation
