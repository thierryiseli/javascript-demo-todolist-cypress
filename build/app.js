import './views/header/HeaderView.js';
import './views/home/HomeView.js';
import './views/about/AboutView.js';

import './_snowpack/pkg/@shoelace-style/shoelace/dist/shoelace.js';
import './_snowpack/pkg/@shoelace-style/shoelace/dist/themes/base.css.proxy.js';
import './_snowpack/pkg/@shoelace-style/shoelace/dist/themes/dark.css.proxy.js';
import './_snowpack/pkg/animate.css/animate.css.proxy.js'
import './_snowpack/pkg/pwa-helper-components/pwa-install-button.js';
import './_snowpack/pkg/pwa-helper-components/pwa-update-available.js';
import './app.css.proxy.js'

import { Router } from './_snowpack/pkg/@vaadin/router.js';

import { registerIconLibrary } from './_snowpack/pkg/@shoelace-style/shoelace/dist/utilities/icon-library.js';

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