# My Brewing Info

## :mag: Who is

This project list a many Breweries infos using a [Public Api](https://styled-components.com/). More details see the following gif

![](/public/demonstrationGif.gif)

## :building_construction: Stack
This project was developed with the following technologies:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Cypress](https://www.cypress.io/)
- [Material-UI](https://mui.com/pt/)
- [Formik](https://formik.org/docs/overview)
- [Yup](https://www.npmjs.com/package/yup)
- [React-Icons](https://react-icons.github.io/react-icons/)

In the development of the project, in addition to the technologies already mentioned, it was also used [Context Api](https://pt-br.reactjs.org/docs/context.html) and [Husky](https://github.com/typicode/husky). The code organization and sctruction is basead on the Atomic Design :atom_symbol:.

## :rocket: Startup

```js
  yarn install
```
Later

```js
  yarn start
```
## :test_tube: Tests

The application has 7 tests developed in Cypress.

  * `try to login and see home page` - This test performs the process of accessing an application.
  * `try to remove a item on list` - This test removes an item from the brewery listing.
  * `try to change page` - This test tries to change page to application.
  * `try to back login screen` - This test evaluates whether it is possible to return to the beginning of the application by clicking on "Go Back".
  * `try to verify if has error case user don't check age` - This test verify exists error when user has not confirmed the check age.
  * `try to verify on send not alphabetical char to input name has error` - This test types a character that is not valid and tests if there is an error for it.
  * `try to verify if button Enter is disabled with no props passed` - This test validate if button "Enter" is disabled when not have data.

To run the tests, use the command:

```js
  npm test
```

## How works the application

The application has two pages, the first being the login screen where the user enters his name and surname (this field validates if the data entered are only letters) and then confirms that he is of legal age, there is also a button on the screen that only will be available if all the fields on the screen are filled in correctly (in case of missing information or errors, they are displayed under the respective field). If everything is correct, the "Enter" button would be available for clicking and when clicking it takes the user to the second screen.

The second screen is composed at its top by the information of the user's name typed in the previous screen (information provided by the Context Api) and a "Go Back" button that, when clicked, removes the saved user (clears the context) and returns to the Login. In the rest of the screen we have the cards containing the information of the breweries.

Each card has the functionality to remove it from the grid display (this removal is performed only on the frontend) and the functionality to add extra information (functionality made using a react state).

The display of cards consists of 6 cards and it is possible to remove 5, if the user tries to remove all cards an error message will be shown and there will be no proceeding in this removal operation.

A pagination was created so that the user can change the information displayed in the grids (as the api did not return a totalizer of breweries, the value of 42 pages was used as a model). This component was the only part created using Material-UI the since the lib provides this component having a good performance and simplicity in its implementation.


