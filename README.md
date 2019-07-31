## Tyler Kung's Synapsefi Interview Project

Left credentials in my .env file, in case someone wanted to run this locally.

Project is live on [Netlify](https://lucid-kowalevski-83bd03.netlify.com/).

### To run locally

From base directory run `npm install`, then launch with `npm start`.

### Project Overview

The project contains the following features:

1) User registration creates Synapse user and saves credentials on localStorage allowing the user to login with a previously made account.
2) User login, includes oauth at login with refresh_token.
3) Once the user is logged in, user data is stored with Redux.
4) User can link a bank account with Synapse to their session using sandbox credentials.
5) Linked bank data is also stored with Redux.

Front-end bootstrapped with create-react-app, Material-ui for user interface.
