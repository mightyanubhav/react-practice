# react-practice
Steps to create a running react file.

1) start with making index.html & styles.css;
2) make this folder git enabled by git init.
3) make this current folder npm init : making a package.json file
4) install parcel : like : npm i -D parcel : i for install -D for development type flag.
5) To run we can do npm parcel index.html
6) if it wont run then give start in package.json to parcel index.html then run npm run parcel

script {
    "start" : "parcel index.html"
    "build" : "parcel build index.html"
}
7) then write npm run start / npm start only for dev , but for server build we mst use only npm run build

// add .gitignore file then in that add, node_modules, dist, .parcel_cache to prevent them from moving into github.
8) again install package, react, & react-dom 
9) import them into App.js then start using 

import React from "react";
import ReactDOM from "react-dom";

10) to run this type of file convert normal script to type module
11) Now follow an industry standard of maintaining files ;

like making a folder src for all components including App.js, utility files in separatefolder, ( utils ) and other components in (component folder) . 

Src {
    components {
        Components.js
    }
    utils{
        mockData.js
        etc.
    }
    App.js
}