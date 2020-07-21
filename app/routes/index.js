import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    async model() {
        let headers = {
            method: 'GET',
        }
        var posts;
        await fetch('https://jsonplaceholder.typicode.com/posts', headers).then(response => {
            return response.json()
        }).then(obj => {
            posts = obj
        });
        return {
            posts: posts
        }
    }
}
