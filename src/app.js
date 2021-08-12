import './views/header/HeaderView';
import './views/home/HomeView';
import './views/about/AboutView';

import '@shoelace-style/shoelace/dist/shoelace';
import '@shoelace-style/shoelace/dist/themes/base.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import 'animate.css/animate.css'
import 'pwa-helper-components/pwa-install-button';
import 'pwa-helper-components/pwa-update-available';
import './custom.css'

import { Router } from '@vaadin/router';

import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library';

registerIconLibrary('ionicons', {
  resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('stroke', 'currentColor');
    [...svg.querySelectorAll('.ionicon-fill-none')].forEach(el => el.setAttribute('fill', 'none'));
    [...svg.querySelectorAll('.ionicon-stroke-width')].forEach(el => el.setAttribute('stroke-width', '32px'));
  }
});

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
]);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register(document.baseURI + "serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}