# Jest Testing
Writing tests for:
  * reducers 
  * action creators 
  * async action creators 
  
*Look at the Redux Docs for more information on frontend testing with Jest*
*Refresh yourself on writing RSpec tests aswell*
[Facebook Jest Docs](https://facebook.github.io/jest/docs/en/expect.html)
[Redux Testing Docs](https://redux.js.org/docs/recipes/WritingTests.html)

## Motivations for testing:
* serves as documentation
* assurances that new changes won't break existing code base 
* if refactoring or new features do break, helps track them down 
* find bugs 
* TDD workflow 

# Jest 
* Facebook's JS testing framework 
* made for testing React (works for testing vanilla JS as well)
* simple movking of components, libraries, etc.

## Setup 
* npm install --save-dev jest 
* npm install --save-dev redux-mock-store
* change script in package.json to 'jest'

```JavaScript
"scripts": {
  "test": "jest",
  "postinstall": "webpack",
  "webpack": "webpack --watch"
},
```

* Make new babelrc file in root diretory; .babelrc file: add presets js6

```JavaScript
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

## Add folder in frontend folder 'practice'
* create folder in practice folder ( __test__)
* do this in each folder you're running tests in (ie- reducers, action creators)

## Testing Redux 
* Relatively simple 
* Pure Functions 

*See the reducers folder for how the reducer tests should look*
 
## Testing Synchronous Action Creators 

*See actions folder to see tests*




