# Winter Bowl

An awesome made for keeping track of your bowling score!!! and a successful marriage of Webpack, Angular2, and .NET Core

![Winter Bowl](https://github.com/Stephn-R/winterbowl/blob/master/winterbowl.png)

## Requirements

- .NET Core 1.0.0-rc4-004771
- Node v7.6.0

## Run app locally

After satisfying the requirements above, run the following commands to get started:

```sh
# Enter the webapp folder
cd src/
# Install NPM Dependencies
npm install
# Install .NET Dependencies
dotnet restore
# Run the web application (localhost:5000 by default)
dotnet run
```

## Run using Docker Composer

```sh
# Prepare the image network
docker-compose build
# Run the image
docker-compose up
```

## Run using Docker

```sh
# Prepare the image
docker build -t winter-bowl .
# Run the image
docker run -it --rm winter-bowl
```

## Run Karma tests

Everything is all wired up and "Webpackerized". So all you to do is the following:

```sh
# Run the tests with the following command
npm test
```

## Pages to visit:

- [Bowling ScoreCard](http://localhost:5000/#/)
- [Error Page](http://localhost:5000/Home/Error)
- [Swagger Docs](http://localhost:5000/swagger)

## Notes

### General
- src/Client/ contains all the Angular 2 code
- src/Server/ contains all the .NET Core code
- All the code has been neatly commented for easy readability
- A Postman Collection was provided via the docs/ folder for testing the API
- Circle CI integration for validating the Docker builds and running tests to retrieve artifacts
- KarmaJS testing the AngularJS code and providing coverage reports

### Server
- Webpack Middleware is used to compile the code live in dev mode
- Server utilizes new C# 6.0 concepts such as Expression Bodies and auto-properties
- Server Endpoints follow the Commander Design Pattern for simplying execution

### Client
- This application does not use the SystemJS implementation of Angular 2 (:innocent:)
- Implemented Angular2 using typescript, bootstrap, and angular-toaster.
- Bundles code using Webpack 2 + Typescript helpers
- All stylesheets are compiled from Sass through PostCSS to add autoprefixings, and then are converted to strings
- All stylesheets apply directly to their components and do not "bleed" into other components
- Barreling and Angular Modules are just a few of the things done to improve code management (Read more: [Angular 2 Styles and File Structure by John Papa](https://johnpapa.net/angular-2-styles/))
- The Angular2 code also adheres to the [SOLID Patterns](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

Direct all questions via email to -> [Stephen Rodriguez](mailto:steprodriguez10@gmail.com)

## Looking Forward

If given additional time to continune building this project, I would envision doing the following:

- Begin using Git Flow for better source control tree management
- Add linting tools to enforce code styling amongst multiple devs
- and so much more... :smile:
