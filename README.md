# contacts-ui-app

If you wish to test the Contacts Book UI app on your local machine, please install dependencies by running _npm i_ command from the root folder.

Then use _npm start_ command to run the application in development mode or _npm run build_ command to build a shippable folder of static files.

In the latter case you may serve it with a static server package:

_npm install -g serve_
_serve -s build_

Due to limited time that has been assigned to this exercise, I did not use TDD for this project. However, when writing unit tests, I always follow a very concrete convention and in order to present this, I have added one suite _validator.test.js_
I am happy to write more unit tests upon request, to prove the ability and present different approaches to test React components.

To run unit tests, please use _npm test_ command at the root folder level.
