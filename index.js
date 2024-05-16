#!/usr/bin/env node
// Import the 'inquirer' library for prompting user input
import inquirer from "inquirer";
// Use the 'inquirer' library to prompt the user for input
const answers = await inquirer.prompt([
    {
        // Specify the prompt details
        name: "sentence", // Key to access the entered sentence in the answers object
        type: "input", // Prompt type: input field
        message: "Enter your sentence to count the word: *" // Prompt message
    }
]);
// Extract the entered sentence from the answers object, trim it, and split it into an array of words
const words = answers.sentence.trim().split(" ");
// Log the array of words with digits to the console
console.log(`Your sentence word count is:${words.length}`);
