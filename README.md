# Eventify - Unleash your eventful side (Full Stack Application)

Team: 05 (Five)

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

Welcome to Eventify, our Full-Stack Application developed for those seeking to have fun and unleash their eventful side! The application provides a user friendy UI, clearly displaying upcoming events. Admin user(s) can also create various events and associate various tags that will help users filter though their own interest (via the search bar). 

The application is responsive, allowing the user to view it on any screen size.

Eventify offers users the ability to connect with people sharing common interest, partaking events relative to their liking. 

## Quicklinks

- [The Assignment](#the-assignment)

- [Installation](#installation)

- [Usage](#usage)

- [Technologies used](#technologies-used)

- [Continued Development](#continued-development)

- [License](#license)

- [Link to the deployed application](#link-to-the-deployed-application)

- [Contributing](#contributing)

- [Credits](#credits)

- [Authors](#authors)

## The Assignment

As a part of the 24 weeks Full-Stack Developer Course, we were tasked to create a full stack application.
Unlike other assesment, where a user story and acceptance criteria were provide, in this case these would depend on the type of application developed. In our case, here is the User Story:
  - As an admin user of Eventify,
  - I want to have the ability to create, update, and delete events,
  - So that I can ensure the event listings are up-to-date and relevant.
  - As a logged-in user,
  - I want to view events on Eventify,
  - So that I can explore and plan my attendance.

Below are the Requirements we were given:
  - Use Node.js and Express.js to create a RESTful API.
  - Use Handlebars.js as the templating engine.
  - Use MySQL and the Sequelize ORM for the database.
  - Have both GET and POST routes for retrieving and adding new data.
  - Be deployed using Heroku (with data).
  - Use at least one new library, package, or technology that we haven’t discussed.
  - Have a polished UI.
  - Be responsive.
  - Be interactive (i.e., accept and respond to user input).
  - Have a folder structure that meets the MVC paradigm.
  - Include authentication (express-session and cookies).
  - Protect API keys and sensitive information with environment variables.
  - Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
  - Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Installation 

  ### Pre-requisites:
  - you must have node.js version 16.* installed 
  - you must have MySQL installed

  ### Database setup:
  Ensure this is done prior to launching the application.
  To do so, please login in your mySQL server (make sure you have your username and password created in an .env file) using the command:
```md
    mysql -u <your username here> -p
```
  Once logged in, execute the following command to setup the database:
```md
    mysql> source path_to_schema.sql/schema.sql
```
  You can verify that the databse has been created by typing
  ```md
    mysql> show databases;
```

  ### Application launch:
  Step 1. Download the [source code](git@github.com:AussieKing/eventify.git) and clone in your local machine.
  Step 2. In your code editor of choice (I use VS Code), navigate to the folder containing the package.json file.
  Step 3. In the integrated terminal, run the following commands:
  ```md
    $ npm install
    $ npm run seed
    $ npm start
```

## Usage
1. Open the application.
2. Log in (if you have an account), or create a new account.
3. Create a new event, or browse through existing events.
4. As an Admin, edit any event you have created.

## Technologies used
  ### Dependencies:
  1. Node.bcrypt.js: [5.0.0](https://www.npmjs.com/package/bcrypt/v/5.0.0)
  2. Node js body parser: [1.20.2](https://www.npmjs.com/package/body-parser)
  3. Connect Session Store using Sequelize: [7.1.7](https://www.npmjs.com/package/connect-session-sequelize)
  4. Node js body parser: [1.20.2](https://www.npmjs.com/package/body-parser)
  5. Dotenv: [8.2.0](https://www.npmjs.com/package/dotenv)
  6. Es Lint: [8.43.0](https://eslint.org/docs/latest/use/getting-started)
  7. Express: [4.17.1](https://www.npmjs.com/package/express/v/4.17.1)
  8. Express Handlebars: [5.2.0](https://www.npmjs.com/package/express-handlebars/v/5.2.0)
  9. Express-session: [1.17.1](https://www.npmjs.com/package/express-session/v/1.17.1)
  10. Handlebars.js: [4.7.6](https://www.npmjs.com/package/handlebars/v/4.7.6)
  11. Node MySQL2: [2.2.5](https://www.npmjs.com/package/mysql2/v/2.2.5)
  12. Sequelize: [6.3.5](https://www.npmjs.com/package/sequelize/v/6.3.5)
  13. Passport.js: [0.4.0](https://www.npmjs.com/package/passport/v/0.4.0)
  14. Node seed: [0.4.4](https://www.npmjs.com/package/seed/v/0.4.4)
  15. jquery: [3.7.0](https://jqueryui.com/download/)

  ### Walk-Through Video:

  ### Screenshots:
    - Landing page:

    - Login:

    - Create Event:

    -Edit Event:

## Continued Development:
1. Establishing a User Profile page where the user can enter their preferences.
2. Enhancing the mobile experience.
3. Adding Events to a Favourites tab.
    

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

## Link to the deployed application
  [here]

## Contributing

Contributions to this project will not be accepted at this time, as this project is an assessment piece for a coding course, and it must be the project author's own work. However, feel free to fork the repository and make your own changes!

## Credits

Many resources were used, such as [Google](https://www.google.com/) and [ChatGPT](https://chat.openai.com/) for consulting, [Canva](https://www.canva.com/] and [Lucid Chart](https://lucid.app/documents) for wireframing, [Bootstrap](https://getbootstrap.com/) for CSS styling, and of course all the Dependencies as stated above!

## Authors

Click the links below to reach out to any of the developers for this project.

Fergus Illman

Email: <a href="mailto:fergus.coding@gmail.com">fergus.coding@gmail.com</a>

[Link to my Github](https://github.com/Fergus-Codes)

Freddy Dordoni

Email: <a href="mailto:fede.dordoni@gmail.com">fede.dordoni@gmail.com</a>

[Link to my Github](https://github.com/AussieKing)

Lauren Cho

Email: <a href="mailto:"></a>

[Link to my Github]()

Thanks for visiting!
