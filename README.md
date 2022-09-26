## About
Simple app where clients can search shops near their current location. 
This app uses "navigator.geolocation" for obtaining client location coords and "FORESQUARE v3 places API" for getting places near client current location. If "navigator.geolocation" is not supported i used external service who obtains client location by Ip address.


## Built with
Project is created with:
* Technology: React(Typescript)
    * React router - for page navigation
    * Axios: for fetching data from FOURSQUARE Api
    * Cypress: for app E2E testing
    * Design: Custom css used in 'Common' components like button, inpu, card ...  
    * React Grid: responsive grid system
* App structure:
    * Layout: app layout (ex: nav, main, footer, aside)
    * Common: shared reusable commponents like button, input, modal ...
    * Components: commponents like navigation, footer with not many features
    * Pages: app page components like Home, Places ...
    * Features: places( components, design, api )
    * Context:  PlaceContext for storing places returned from the Api ( not needed but if the app grows switching to Redux Toolkit with RTK will be better option)
    * Hooks: custom hooks 
    * Types: custom types 
    * Models: creating objects using Class so we can have more controll of reusing the same object
   

## Installation 
**_NOTE:_**  The project contains *.env* file that is bed practice but for testing purpose I pushed that file because 'FOURSQUARE v3 places api' uses token who we need to send via Request headers(Authorization) so we are allowed to access the Api. This token is created by me and is added in that *.env* file. If anyone wants to change that token and use another feel free to change the token in that *.env* file. I'm writing this note because i'm not sure that person who will use this app has FOURSQUARE account and token.
1. Clone the repo: *git clone https://github.com/alintertec/izicap.git*
2. Install NPM packages: *npm install*
3. Run the app in the dev mode: *npm run start*
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
5. Run the tests: *npm run cy:open*
6. Production build: *npm run build* 


## License
Distributed under the MIT License. See LICENSE.txt for more information.


## Contact
Email: atanas.lazarovski@intertec.io
Project link: https://github.com/alintertec/izicap