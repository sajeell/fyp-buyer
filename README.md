## Introduction

This is the web version of web engineering project built with following technologies:

- ReactJS (17.0.2)

## Structure

I will be following the official file structure for this app i.e. [this](https://reactjs.org/docs/faq-structure.html)

All the class-names in the HTML should be unique for each file to avoid over-writing by the class-names of other HTML files. Each JSX component will have it's own CSS file.

Following is the further details of the project:

- The main HTML file lies in the `public` folder
- All of the code lies in the `src` folder
- In the `src` folder, the `index.js` file is the main class that renders our [JSX](https://reactjs.org/docs/introducing-jsx.html) components to the screen, the `App.js` file is actually the bridge between our custom built JSX components and the `index.js` file, and the `components` folder will have our custom built JSX components in such a way that there will be a new separate folder for each component which will further have a JSX file and the CSS file.

### Scenario

Suppose that I have to change the content of the footer. I will be doing it in the following steps:

1. I will go to the `src` folder, as I have to change the code.
2. In the `src` folder, I will go to the `components` folder, as footer is a custom built JSX component.
3. I will go to the `footer` folder, then I will open the `Footer.jsx` file if I have to change the logic or HTML code and the `Footer.css` file if I have to change the CSS of the footer

# Format

run `prettier --write --single-quote --semi false --list-different --print-width 80 "src/**/*.jsx"`
