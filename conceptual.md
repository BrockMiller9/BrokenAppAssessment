### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  You can use callbacks, promises, or async/await.

- What is a Promise?
  A promise is an object that represents the eventual completion or failure of an asynchronous operation.

- What are the differences between an async function and a regular function?
  An async function returns a promise. A regular function does not.

- What is the difference between Node.js and Express.js?
  Node.js is a runtime environment for JavaScript. Express.js is a framework for Node.js. Express.js is used to build web applications and APIs. Node.js is used to run JavaScript on the server. Express.js is built on top of Node.js. Express.js is a library that runs on Node.js.

- What is the error-first callback pattern?
  The error-first callback pattern is a convention for Node.js callbacks to return an error as the first argument and the result as the second argument.

- What is middleware?
  Middleware is a function that has access to the request object, the response object, and the next function. Middleware can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack.

- What does the `next` function do?
  The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

The code is not very performant because it is making three separate requests to the GitHub API. The code is also not very readable because the variable names are not very descriptive. The code is also not very reusable because it is only making requests to the GitHub API. The code is also not very scalable because if we wanted to make more requests, we would have to add more await statements.
