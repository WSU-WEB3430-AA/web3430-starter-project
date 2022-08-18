# A demo fullstack JavaScript (MERN) based web project

For creating and managing movie lists.

## Instructions
This application has two sides: a front-end powered by React and a back-end powered by express. For databases, we use MongoDB. 

After you clone or download this repository from GitHub, run the following to install required NPM packages. You only need to do this once.

```bash
npm install
```

Run the following command to install the required back-end packages:

```bash
npm install cookie-parser dotenv express express-session helmet mongoose morgan passport passport-local passport-local-mongoose pug
```

and the following command to install the required front-end packages:

```bash
npm install date-fns formik react react-avatar react-cookie react-datepicker react-dom react-icons react-router-dom react-toastify yup
```

and finally if you plan to use bootstrap, run the following command to install it:

```bash
npm install @popperjs/core bootstrap bootstrap-icons
```

**Note:** The above packages are not needed all at once but they are what we'll be using throughout the class. Additional packages can be installed using the `npm install` command.

Before you can run this application, you need to create a configuration file named `.env` under the main folder of your repository. This project has a file named `.env.example` that you can copy or rename to a `.env` file. This file should be like:

```bash
APP_SECRET=SeCrEt
APP_DEPLOYMENT=local
DB_URL=mongodb://127.0.0.1:27017/db_name_goes_here
PORT=8080
```

You'll need to change the values after the `=` sign to fit your application/situation; make sure no spaces are included. For the `APP_SECRET` variable, you may run the command below to generate a random secret key and replace `SeCrEt` with it. **_This file is meant to be local and will not be saved into GitHub when you commit and push your repository._**

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('base64'));"
```

To run the application, open two terminals. Under the first terminal, compile the front-end components in a development mode into the `public/` folder using the command:

```bash
npm run deploy
```

Under the second terminal, start the local development server using the command:

```bash
npm run server
```

Visit http://localhost:8080/ in the browser to view your application.

**NOTE**: To compile the front-end components in a production mode, use the command:

```bash
npm run build
```

Notice that this project is equipped with `eslint` which should report any problems you might have in your JavaScript. The linter will runn automatically when you run the preview two commands. You can call the linter directly by running the command:

```bash
npm run lint
```

This project is also equipped with `prettier` which you can call to format your code (html, js, css, and scss) by calling the command:

```bash
npm run format
```