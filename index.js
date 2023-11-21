const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/Shapes.js")
// prompt for text (open ended), text color (open ended), and shape (list) 
userInput()

function userInput() {
    inquirer.prompt(//get input and design your questions)
        [
            {
                type: "input",
                name: "text",
                message: "Enter three letters"
            },

            {
                type: "list",
                name: "shape",
                message: "Which shape would you like?",
                choices: ["Triangle", "Square", "Circle"]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Enter a color for your shape"
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter a color for your text"
            }
        ]
    ).then(answers => {
        console.log("Got my answers")
        console.log(answers)
        let shape;
        if (answers.shape == "Triangle") {
            shape = new Triangle(answers.shapeColor, answers.textColor, answers.text)
        }
        if (answers.shape == "Square") {
            shape = new Square(answers.shapeColor, answers.textColor, answers.text)
        }
        if (answers.shape == "Circle") {
            shape = new Circle(answers.shapeColor, answers.textColor, answers.text)
        }

        fs.writeFileSync("logo.svg", `
        <svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        </svg>
        `)
    })
}