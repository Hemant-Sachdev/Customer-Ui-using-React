# React + Vite

Before getting started, Please ensure to run the following commands in tereminal: 

Creating a vite project : 
 * npm create vite@latest
 * Give name to project
 * select React
 * select Javascript

Go to the path created for the react project and change directory : cd path 

Now run the below mentioned commands in the same.
 * npm install // downloads an addidtional folder to your react project with the name node_modules.
 * npm install json-server
 * npm i bootstrap@5.3.3
 * npm i react-router-dom
 * npm i react-icons
 * npm run dev

To start the json server, open another terminal at the same time and change the directory as your project directory and run the command : json-server --watch db.json --port 5000

These commands help to setup the requisites for the 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
