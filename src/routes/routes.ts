import { Login, Home } from '../pages';

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
    component: Home,
    isPrivate: true,
  },
];

export default routes;
