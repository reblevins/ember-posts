import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    beforeModel() {
        this.transitionTo('/1'); // When hitting /, forward to posts route /1
    }
}
