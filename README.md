# Playwright

It's time to take our testing up another notch with Playwright, a JavaScript tool for end-to-end testing.

## Part 1

As usual, the best place to start is the Getting Started section of the docs.

👉 First, use the [installation instructions](https://playwright.dev/docs/intro) to install Playwright within the project.

- During the installation process, you can interact with the options using arrow keys and the Enter key on your keyboard.
- If it asks you about using TypeScript or JavaScript, choose JavaScript.
- If it asks you where to put your end-to-end tests, choose a name like `tests` (or similar).
- If it asks you whether to add a GitHub Actions workflow, choose no.
- If it asks you whether to install Playwright browsers, choose yes.
- If it creates some example tests for you (in the `tests` folder), feel free to read through them (if you're curious) but then ultimately delete them so that your `tests` folder is empty and you're ready to start fresh.

👉 Then read through the [Writing Tests](https://playwright.dev/docs/writing-tests) page to get an overview of how tests are written in Playwright.

## Part 2

The next step is to test the app in this repo using Playwright! Remember, "The more your tests resemble the way your software is used, the more confidence they can give you."

The app has already been written for you. You only need to write tests for it.

👉 Use the NPM `start` script and visit the localhost url logged in the terminal. Experiment with the app (as a user) and learn how it works.

👉 Make a plan of what scenarios you want to test with Playwright. Think of a flow/series of steps that a user might take when using this app. Think about the sorts of things you'd check manually (in a browser), if you'd been asked to see if the app works as expected.

  <details>
    <summary>If you're stuck, click here to expand this and see an example scenario which you can use as a starting point:</summary>

- Assert that the input is empty (to begin with).
- Enter "Wash the dog" into the input.
- Assert that the input contains the expected text.
- Click the "Add" button.
- Assert that the list now contains a new todo containing the expected text.
- Assert that the "Wash the dog" todo is not ticked (to begin with).
- Assert that the input has been cleared and reset to an empty string.
- Click the checkbox next to the "Wash the dog" todo.
- Assert that the checkbox is ticked.
- Click the checkbox next to the "Wash the dog" todo.
- Assert that the checkbox is not ticked.
- Click the delete button next to the "Wash the dog"
- Assert that "Wash the dog" todo is no longer in the list.

You could also add another test scenario that involves creating, ticking and deleting multiple todos in the list!

  </details>

👉 Start writing the tests for each journey you've thought of. Remember to plan out each stage of logic within each test itself - don't start coding until you have a plan for that individual test.

General resources if you get stuck:

- [Trying to select an element?](https://playwright.dev/docs/locators)
- [Trying to make an assertion?](https://playwright.dev/docs/test-assertions)
- [General Playwright documentation](https://playwright.dev/docs/writing-tests)
- Google
- ChatGPT

⭐ Bonus: If you're satisfied that you've fully tested the existing app, add a feature and test it!

Ideas:

- Input validation
- Different types of input
- Different events
- Routing
- ... and more!
