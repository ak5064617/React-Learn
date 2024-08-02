

#NPM 
 - NPM doesnot have full form 
 - NPM doesnot stand node package manager 
 - NPM manage packages 
 - NPM is a repository for all the pacakges
 - All the packages hosted here on the repsitory
 - 
 

#package.json 
   - this is configuration for NPM 
   - it is a json structure
   - dev dependencies reqiures for development phase like - jasmine,parcel, 
   - dependencies => it reqiures for production 

#package-lock.json
 - it maintains the exact version of any package
 - it is log of packages, so we need to push to github

#node_modules
  - it is databse of packages or libraries when we will install any package it will contain all the dependecies and nested dependecies (transitive dependencies) 
  - it is just like uinverse of packages
  - if we will have package.json and package-lock.json we can recreate node_modules even it will be deleted so we dont need to push node modules in github

#parcel
 - Creates Dev Build
 - Create Local Server
 - HMR => Hot Module Replacement
 - File Watcing Alogorithm which is written in CPP 
 - Parcel Cache => so it build next build faster 
 - Image Optimisation
 - Minification
 - Bundling 
 - Compressiong 
 - (npx parcel index.html) for dev build 
 - (npx parcel build index.html) for production build
 - consistent hashing 
 - Diffential Bundling - to support older browsers 
 - diagnostic 
 - Error Hnadling 
 - we can also host in HTTPS 
 - Tree Shaking => remove unused code for us 
 - Diffrent dev anf prod bundles 

#BrowsersList 
   - it will use for compatibilty with browsers
   
