<<<<<<<< HEAD:PoslovnaProjekat/deployment/web/dist/WebIconProperty-Bon9K84_.js
import { AssertionError, asResult, dynAvailable, getStaticResourceUrl } from './index-JDXCDs53.js';
========
import { AssertionError, asResult, dynAvailable, getStaticResourceUrl } from './index-DRM94Sf-.js';
>>>>>>>> feat/sales-domain:PoslovnaProjekat/deployment/web/dist/WebIconProperty-CkJqYHVz.js

const WebIconProperty = ({ icon }) => {
  if (!icon)
    throw new AssertionError();
  switch (icon.type) {
    case "image":
      return asResult(dynAvailable({ type: icon.type, iconUrl: getStaticResourceUrl(icon.iconUrl) }));
    case "glyph":
    case "icon":
      return asResult(dynAvailable(icon));
  }
};

export { WebIconProperty };
