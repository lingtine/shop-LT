import { Home, News, Product, AboutUs } from '~/pages';
import { DefaultLayout } from '~/layouts';

const privateRoutes = [];
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/news', component: News, layout: DefaultLayout },
    { path: '/product', component: Product, layout: DefaultLayout },
    { path: '/about-us', component: AboutUs, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
