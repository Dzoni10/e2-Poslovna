<<<<<<<< HEAD:PoslovnaProjekat/deployment/web/dist/uEIG9e6s-D5bs4rlT.js
import { allowStateChangesInsideComputed, runInAction, configure } from './index-JDXCDs53.js';
========
import { allowStateChangesInsideComputed, runInAction, configure } from './index-DRM94Sf-.js';
>>>>>>>> feat/sales-domain:PoslovnaProjekat/deployment/web/dist/BkqAssms-a3v8x28y.js

function runActionInComputed(action) {
  return allowStateChangesInsideComputed(() => runInAction(action));
}
configure({ enforceActions: "always" });
const scheduledActions = [];
function scheduleAction(action) {
  scheduledActions.push(action), 1 === scheduledActions.length && setTimeout(() => runInAction(() => scheduledActions.splice(0).forEach((f) => f())), 0);
}

export { runActionInComputed, scheduleAction };
