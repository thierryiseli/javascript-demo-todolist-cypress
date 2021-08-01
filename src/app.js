import './views/home/HomeView';
import './views/about/AboutView';
import './views/header/HeaderView';

import { Router } from '@vaadin/router';

const router = new Router(document.querySelector('main'));
router.setRoutes([
    {
        path: '/',
        component: 'home-view'
    },
    {
        path: '/about',
        component: 'about-view'
    }
])