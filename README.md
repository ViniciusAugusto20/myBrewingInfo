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

In the development of the project, in addition to the technologies already mentioned, it was also used [Context Api](https://pt-br.reactjs.org/docs/context.html) and [Husky](https://github.com/typicode/husky).

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

  * `try to login and see home page` - Adiciona um item entre os 10 primeiros na lista de desejos.

To run the tests, use the command:

```js
  npm test
```

__Pages__

A aplicação conta com duas páginas sendo a Home a default e a página de lista de desejos /wishlist.


## How to use the application

A tela inicial é composta por uma grade que contém todos os itens vindos da API. Nela é possível, adicionar itens ao clicar no coração em cima do item, ver informações do item e o preço do mesmo. Também é possível no campo de busca filtrar um item em específico. A outra tela a Lista de desejos é acessável ao clicar sobre o Coração ou sobre o nome. Nessa lista é mostrado todos os itens que o usuário adicionou como favoritos, também sendo possível realizar a remoção de itens por ela.
