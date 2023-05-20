// navigate to the url ✅
// type something into the input ✅
// click on the add button ✅
// should add a new todo to the list ✅
// should contain the text that was entered
// new todo should contain a delete button
// should be able to tick and untick the checkbox
// should be able to remove the todo by clicking the delete button
import {test, expect} from "@playwright/test";

test("Getting onto the website", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page).toHaveTitle(/Todo List App/);
}
)

test("Getting onto the website and typing into input", async ({ page }) => {
    await page.goto("http://localhost:3000");
    let input = await page.getByLabel('New Todo: ');
    input.type('Wash my Dog');
    await expect(input).toHaveValue("Wash my Dog");
}
)

/* test("Getting onto the website and clicking on the add button", async ({ page }) => {
    await page.goto("http://localhost:3000");
    let buttonPress = await page.getByText('Add');
    buttonPress.click();
    await expect(buttonPress).to
}
) */

test("Getting onto the website putting an input and clicking on the add button", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByLabel('New Todo: ').type('Wash my Dog');
    await page.getByText('Add').click();
}

)

test("Adding 2 inputs to the todo list", async ({ page }) => {
    await page.goto("http://localhost:3000");
    let input = "Wash my dog!"
    let input2 = "Wash my cat!"
    await page.getByLabel('New Todo: ').type(input);
    await page.getByText('Add').click();
    await page.getByLabel('New Todo: ').type(input2);
    await page.getByText('Add').click();
    //await expect(page.getByRole("list").getByText(input)).toBeVisible();
   // await expect(page.getByRole("list").getByText(input2)).toBeVisible();
    await expect(page.getByRole("list").last()).toHaveText(new RegExp(input));// adding the "Delete" passes the test, need to figure how to get just the input in the 
    await expect(page.getByRole("list").last()).toHaveText(new RegExp(input2));
    
}
)
