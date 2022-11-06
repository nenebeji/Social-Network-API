# Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Project Description](#project-description)

- [Installation](#installation)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#test)

- [Questions](#questions)

- [Links](#links)

 - [Walthrough Video](#walkthrough-video)

- [License](#license)

## Project Description

This is a mongoDB and Express back end social network API application.

* When a user adds their database name, MySQL username, and MySQL password to an environment variable file they are connected to a database using Sequelize.

* When the user enters schema and seeds commands, a development database is created and is seeded with test data.

* When they enter the command to invoke the application their server is started and the Sequelize models are synced to the MySQL database.

* When they open API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.

* Users can test API POST, PUT, and DELETE routes in Insomnia to successfully create, update, and delete data in my database.


## Installation

Run `npm install`  to install dependencies.


## Screenshots

![App Image](/assets/images/GetUsers.png)
> Get all Users

![App Image](/assets/images/OneUser.png)
> Get a Single User

![App Image](/assets/images/GetThoughts.png)
> Get all Thoughts

![App Image](/assets/images/OneThought.png)
> Get a Single Thought


## Usage 

Run `npm run dev` to start the application.


## How to Contribute

1. Clone the repo using $ git clone git@github.com:nenebeji/Social-Network-API

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review


## Tests

Tests were run using  insomnia.


## Questions

Feel free to contact me for further questions via:

Github: https://github.com/nenebeji

Email: nenebeji@gmail.com


## Links

Github Repo: https://github.com/nenebeji/Social-Network-API


### Walthrough Video

https://drive.google.com/file/d/1v9qPa69lTiyd7DUafJladSLGshRDyrDh/view?usp=sharing


## License

The MIT License

  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more informaation you can click the link below:

https://opensource.org/licenses/MIT

Copyright (c) 2022 Oritsegidenene Beji.