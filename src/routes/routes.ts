import { Login } from '../pages';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/home',
    name: 'Home',
    isPrivate: true,
  },
];

export default routes;
