# CorkBoardIt - OMSCS CS 6400 - Team 108

This holds the code for our team project. It:

- Has a NodeJS backend (using express)
- Uses PostgreSQL as a backend datastore
- Has a React frontend that calls out to the backend via its JSON api
- Uses Prettier for code formatting

The app is running live on Heroku at
[http://corkboardit.herokuapp.com/](http://corkboardit.herokuapp.com/).

## Prerequisites

Since this is a class on databases, I suppose the most important part is to make
sure PostgreSQL is installed. You can download and install it
[here](https://www.postgresql.org/download/), or via whatever other preferred
method you're used to. On a Mac, `brew install postgres` works well.

You will need NodeJS installed to run this locally, preferably the latest 10.x
release. You can get it [here](https://nodejs.org/en/).

We also use Yarn instead of npm for package management. Installation
instructions can be found [here](https://yarnpkg.com/en/docs/install).

We are also using [Prettier](http://prettier.io), which is a widely-used code
formatting tool that ideally you configure to run in your editor on save, to
keep our formatting consistent. There are installation instructions on their
website [here](https://prettier.io/docs/en/editors.html), for your favorite
editor, or you can alternately just run `npm run prettier` before committing.

To deploy to Heroku, you'll need the Heroku CLI. Installation instructions can
be found [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

## Database Setup

To create a database user and the empty database, run:

    yarn db:init:local

_NOTE: This will nuke your existing database, and gets you back to a blank slate._

## Running

Install dependencies:

    yarn

And run:

    yarn dev

To build the frontend in production mode and serve it the same way Heroku does,
run:

    yarn start:local

## Deploying

To deploy to Heroku, make sure you have access to the app with your Heroku
account, add the git remote via the Heroku CLI, and then run:

    git push heroku master
