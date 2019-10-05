# First Recon Mock Backend

This is intended to be a stand-in for the eventual backend API application
that drives the scouting app.

## Getting started

1. Generate the database
    * `npx sequelize db:migrate`
    * `npx sequelize db:seed games`
    * `npx sequelize db:seed event-types`
    * `npx sequelize db:seed game-pieces`
    * `npx sequelize db:seed field-elements`
    
    TODO: Eventually you should be able to run `npx sequelize db:seed:all`
    to get everything, but at least for the moment, that's not working yet.

2. Start the application
    * `DEBUG=firstrecon* npm start`
    * You should see a message that the application is started on port 5000.