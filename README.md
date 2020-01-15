# angular-first-app

## Install the basic components for Angular:

To prepare the development environment for an Angular application, we need to install the CLI (Command Line Interface).
In order to install it, we need to have beforehand Nodejs installed on our machine.  


To install it, go to [The official Node.js platform](https://nodejs.org/en/) (I recommend using the more stable and latest "LTS"  version)

Once installed we need to install the Node Package Management (or "npm").
To check if we currently have the latest version, we will have to run the native console of our machine (examples below are used under Windows).

In the console, type the following:
```
npm install -g npm@latest
```


Once it's done, we can install the CLI of Angular:

```
npm install -g @angular/cli
```



To create a new Angular project, we will use the new installed CLI.
In the command line and under the folder where you want to create your project, write the following:

```
ng new "your project's name"
```


Once all files and packages are installed, navigate in the new created project and type the following:

```
ng serve
```


This will run the server application so we are able to see in real time in our browser the application.
In your browser, navigate through "localhost:4200" to see your app running. Your development environment is now ready.



## Add components, services:

To create a new component using Angular CLI, write to following:

```
ng generate component "your component's name"
```

To create a new service using Angular CLI, write to following:

```
ng generate service "your component's name"
```
