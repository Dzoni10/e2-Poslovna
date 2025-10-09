<<<<<<<< HEAD:PoslovnaProjekat/deployment/web/dist/WebStaticImageProperty-Cl4Gen30.js
import { asProperty, fromConstant$, dynAvailable, getStaticResourceUrl } from './index-JDXCDs53.js';
========
import { asProperty, fromConstant$, dynAvailable, getStaticResourceUrl } from './index-DRM94Sf-.js';
>>>>>>>> feat/sales-domain:PoslovnaProjekat/deployment/web/dist/WebStaticImageProperty-Dq4ynMoj.js

const WebStaticImageProperty = asProperty((config) => {
  return fromConstant$(dynAvailable({ uri: getStaticResourceUrl(config.image.uri), name: (uri = config.image.uri, /([^/$]+?)(\?|$)/.exec(uri)?.[1] ?? "") }));
  var uri;
});

export { WebStaticImageProperty };
