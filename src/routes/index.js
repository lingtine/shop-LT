import { Home, News, Product, AboutUs, Account } from '~/pages';
import { DefaultLayout, HaveSlideBar } from '~/layouts';

const privateRoutes = [];
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/about-us', component: AboutUs, layout: HaveSlideBar },
    { path: '/news', component: News, layout: HaveSlideBar },
    { path: '/account', component: Account, layout: DefaultLayout },
    { path: '/sales', component: Product, layout: DefaultLayout },
    { path: '/product', component: Product, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
