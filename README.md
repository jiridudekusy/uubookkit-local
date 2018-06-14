This tool starts local uuBookKit using JSON files exported by <https://www.npmjs.com/package/uubookkit-exporter>. Please see [jdk_localbookkitg01_main-server](jdk_localbookkitg01_main-server/README.md) for more information how to use this.

# How to develop ? 
## Prerequisites
- Node.js 8.4+

## IntelliJ settings
For proper configuration of your IDE go to Settings - Languages & Frameworks - JavaScript and select ECMAScript 6 JavaScript version. 
Also go to Settings - Languages & Frameworks - Node.js and NPM and enable Node.js Core library.
 
## Install and run client

1. Installation
    Open client folder and execute install in command line:

    > cd jdk_localbookkitg01_main-client
    > npm install

2. Run
    Execute command (in folder *_main-client):

    > npm start

4. In case of developing only client side of application you can open Index in browser - [localhost](http://localhost:1234/)

## Install and run server
1. Make you sure that command "npm run dist" (chapter uuApp Distribution Package Creation) in folder uu_appg01_main-client was called before next step.
2. Installation
    Open server folder and execute install in command line:

    > cd jdk_localbookkitg01_main-server 
    > npm install
3. Run
    Execute command (in folder *_main-server):

    > npm start
    
    Application starts locally on default port 6221 and can be accessed e.g. with browser (http://localhost:6221/uu-demoappg01-main/0-0/home).
