- make about page
- make contact page 
- make returant menu page 
- call resturant menu API 
- make routring for about and contact page
- ErrorComponent
- use link tag 
- make dynamic routing for resturant menu



## Namaste React Course by Akshay Saini

# _Episode 01 - Inception_

## Theory :

- What is `Emmet`?
- What is `CDN`? Why do we `use` it?
- Why is `React known as React`?
- What is `crossorigin in script tag`?
- What is difference between `React and ReactDOM`?
- What is difference between `react.development.js` and `react.production.js` files via CDN?

## Coding :

- Set up all the `tools in your laptop`
  - `VS Code`
  - `Chrome`
  - `Extensions of Chrome`
- Create a `new Git repo`
- Build your `first Hello World` program using,
  - Using `just HTML`
  - Using `JS to manipulate the DOM`
  - Using `React`
    - use `CDN Links`
    - Create `an Element`
    - Create `nested React Elements`
    - Use `root.render`
- `Push code to Github` (Theory as well as code)
- Learn about `Arrow Functions` before the next class

## References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8


## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Theory :

- What is `npm`?
- What is `Parcel/Webpack`? Why do we need it?
- Why is `.parcel-cache`?
- What is `npx`?
- What is difference between `dependencies vs devDependencies`?
- What is Tree Shaking?
- What is Hot Module Replacement?
- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- What is `.gitignore`? What should we add and not add into it?
- What is the difference between `package.json` and `package-lock.json` files?
- Why should I not modify `package-lock.json`?
- What is `node_modules`? Is it a good idea to push that on git?
- What is the `dist` folder?
- What is `browserlists`? and Read about different bundlers: vite, webpack, parcel
- Read about: `^-caret` and `~-tilde`
- React about Script types in html(MDN Docs)

## Coding :

In your existing project

- initialize `npm` into your repo
- install `react and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with `parcel`
- add script for "start" and "build" with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

## References:

- [Parcel Documentation](https://parceljs.org/docs/)
- [Parcel on Production](https://parceljs.org/features/production/)
- [Browserlists](https://browserslist.dev/)



## Namaste React Course by Akshay Saini

# Episode 03 - Laying the Foundation

## Topics

- `JSX`
- `React.createElement` vs `JSX`
- `Benefits of JSX`
- `Behind the Scenes of JSX`
- `Babel` & `parcel` role in JSX
- `Components`
- `Functional Components`
- `Composing Components`

## Theory :

- What is `JSX`?
- Superpowers of `JSX`.
- Role of type `attribute` in script tag? What `options can I use` there?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

## Coding :

- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

  - Create the `same element using JSX`
  - Create a `functional component of the same with JSX`
  - `Pass attribute` into the tag in `JSX`
  - `Composition of Component` (Add a component inside another)
  - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
  - Add a `Logo on Left`
  - Add a `search bar in middle`
  - Add `User icon on right`
  - Add `CSS to make it look nice`

## References:

- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)





## Namaste React Course by Akshay Saini

# Episode 04 - Talk is Cheap, show me the code

## Theory:

- Is `JSX` mandatory for React?
- Is `ES6` mandatory for React?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
- How can I write `comments` in JSX?
- What is `<React.Fragment></React.Fragment>` and `<></>`?
- What is `Reconciliation` in React?
- What is `React Fiber`?
- Why do we need `keys` in React?
- Can we use `index as keys` in React?
- What is `props in React`? Ways to.
- What is `Config Driven UI`?

## Coding:

- Build a `Food Ordering App`
  - Think of a `cool name` for your app
  - Build an `AppLayout`
  - Build a `Header Component` with `Logo` & `Nav Items` & `Cart`
  - Build a `Body Component`
    - Build `RestaurantList Component`
    - Build `RestaurantCard Component`
      - Use `static data initially`
      - Make your `card dynamic`(pass in props)
        - `Props` - passing arguments to a function - `Use Destructuring` & `Spread operator`
      - `Render` your cards with `dynamic data of restaurants`
      - Use `Array.map` to render all the restaurants in the body component

### PS. Basically do everything that I did in the class, in the `same sequence`. `Don't skip small things`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Virtual DOM](https://reactjs.org/docs/faq-internals.html)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [React Without ES6](https://reactjs.org/docs/react-without-es6.html)
- [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)





## Namaste React Course by Akshay Saini

# Episode 05 - Let's get Hooked!

## Theory:

- What is the `difference` between `Named export`, `Default export`, and `* as export`?
- What are `React Hooks`?
- Why do we need `useState Hook`?

## Code:

- `Clean up` your code.
- Create a `Folder Structure` for your app.
- Make `different files` for each Component.
- Create a `config file`.
- Use all types of `import and export`.
- Create a `Restaurant Filter button`
- Use `useState` to create a variable and `bind` it to the `Restaurant Filter Button`.
- Try to make your `Filter Button Work`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)




## Namaste React Course by Akshay Saini

# Episode 06 - Exploring the world

## Theory Assignment:

- What is `Microservice`?
- What is `Monolith architecture`?
- What is the `difference` between `Monolith and Microservice?
- Why do we need a `useEffect Hook`?
- What is `Optional Chaining`?
- What is `Shimmer UI`?
- What is the `difference` between `JS expression and JS statement`?
- What is `Conditional Rendering`? explain with a code example.
- What is `CORS`?
- What is `async and await`?
- What is the use of `const json = await data.json()`; in `getRestaurants()`?

## Coding Assignment:

- Play with the `useEffect Hook` to see when it is called? (before or after render)
- Play with the `dependency array` in useEffect Hook.
- Play with the `developer console` by putting a `debugger` in render and `useEffect`.
- Call an `actual API call`.
- `Handle Error` in your `API call`.
- Build `Shimmer UI` when `data is not loaded`.
- `Render your UI` with `actual API data`.
- Make `Search functionality` work.
- Make a `Login Logout` button that `toggles with a state`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)



## Namaste React Course by Akshay Saini

# Episode 07 - Finding the Path

## Theory Assignment:

- What are various ways to `add images` into our App? Explain with `code examples`.
- What would happen if we do `console.log(useState())`?
- How will `useEffect` behave if we `don't add` a `dependency array`?
- What is `SPA`?
- What is the `difference` between `Client Side Routing` and `Server Side Routing`?

## Coding Assignment:

- Add `Shimmer Effect without installing a library`.
- Install `react-router-dom`.
- Create an `appRouter` and `Provide it to the app`.
- Create a `Home, About, and Contact Page` with Link (use child routes).
- Make an `Error page` for `routing errors`.
- Create a `Restaurant Page` with `dynamic restaurant ID`.
- (Extra) - Create a `login Page` using `Formik Library`.

## References:

- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)




## Namaste React Course by Akshay Saini

# Episode 08 - Let's get Classy

## Theory Assignment:

- What is the `order of life cycle method calls` in `Class Based Components`?
- Why do we use `componentDidMount`?
- Why do we use `componentWillUnmount`? Show with `example`.
- (Research) Why do we use `super(props)` in `constructor`?
- (Research) Why `can't we have` the `callback function` of `useEffect async`?

## Coding Assignment:

- Create `Class Based` Component.
  - Create 2 `class-based child components`.
  - `Pass props` from `Parent to child`.
  - Create a `constructor`.
  - Create a `state variable` inside child.
  - Use `this.setState` to update it.
  - What if there are `multiple state variables`?
  - Write a `console.log` for each lifecycle method.
  - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
  - Use `clearInterval` to `fix the issue` caused by the `interval`

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)




## Namaste React Course by Akshay Saini

# Episode 08 - Let's get Classy

## Theory Assignment:

- What is the `order of life cycle method calls` in `Class Based Components`?
- Why do we use `componentDidMount`?
- Why do we use `componentWillUnmount`? Show with `example`.
- (Research) Why do we use `super(props)` in `constructor`?
- (Research) Why `can't we have` the `callback function` of `useEffect async`?

## Coding Assignment:

- Create `Class Based` Component.
  - Create 2 `class-based child components`.
  - `Pass props` from `Parent to child`.
  - Create a `constructor`.
  - Create a `state variable` inside child.
  - Use `this.setState` to update it.
  - What if there are `multiple state variables`?
  - Write a `console.log` for each lifecycle method.
  - Play with the `console logs` to find out the `correct order of their execution`.
- Create `interval` inside `componentDidMount`?
  - Use `clearInterval` to `fix the issue` caused by the `interval`

## References:

- [React Life Cycle Method Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Akshay Saini Code Link](https://bitbucket.org/namastedev/namaste-react-live/src/master/)




## Namaste React Course by Akshay Saini

# Episode 09 - Optimizing our App

## Theory Assignment:

- When and why do we need `lazy()`?
- What is `suspense`?
- Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
- `Advantages and Disadvantages` of using this `code splitting pattern`?
- When `do we and why do we need suspense`?

## Coding Assignment:

- Create your `custom hooks`.
- Try out `lazy and suspense`
- Make your `code clean`.

## References:

- [React Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React lazy](https://react.dev/reference/react/lazy#suspense-for-code-splitting)


## Namaste React Course by Akshay Saini

# Episode 11 - Data is the new oil

## Theory Assignment:

- What is prop drilling?
- What is lifting the state up?
- What are Context Provider and Context Consumer?
- If you don't pass a value to the provider does it take the default value?

## Coding Assignment:

- Practice React Context with code examples
- Try out Nested Contexts

## References:

- [Lifting State Up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
- [React Context](https://react.dev/reference/react/useContext)



## Namaste React Course by Akshay Saini

# Episode 12 - Let's Build Our Store

## Theory Assignment:

- Advantages of using Redux Toolkit over Redux
- Explain Dispatcher.
- Explain Reducer.
- Explain Slice.
- Explain Selector.
- Explain createSlice and the configuration it takes.

## Coding Assignment:

- Practice making a store, and slices and do read and write operations using Redux Store
- Build Cart Flow using Redux Store

## References:

- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)



## Namaste React Course by Akshay Saini

# Episode 13 - Time for the Test

## Theory Assignment:

- What are the difference types of Testing?
- React Testing Library and It's set up
- What is Jest and why do we use it?
- Jest setup and installation of it's related

## Coding Assignment:

- Setup React Testing Library
- Write Unit Tests for Contact, RestaurantCard components
- Write an Integration Test Case for the Search Feature on the Homepate
- Write Integration Test for Add to Cart flow


