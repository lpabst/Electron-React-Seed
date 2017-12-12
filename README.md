# Electron + React Seed
Electron, React, Redux

### To get started:
* Clone this repo
* git remote set-url origin 'your new repo url here'
* Run `npm install`

##### Development
* Run `npm run dev` to start webpack-dev-server. Electron will launch automatically after compilation.

###### Build .exe 
* Run `npm run package` to have webpack compile your application into a .exe 

###### Test Prod
* If you want to test the production build (In case you think Babili might be breaking something) after running `npm run build` you can then call `npm run prod`. This will cause electron to load off of the `dist/` build instead of looking for the webpack-dev-server instance. Electron will launch automatically after compilation.
