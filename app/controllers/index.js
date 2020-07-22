import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @tracked showDetail = false
    @tracked post = {}
    @action async toggleDetail(post) {
        this.showDetail = !this.showDetail
        if (post) {
            let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            let user = await response.json()
            console.log(user);
            console.log(post);
            this.post = post
            this.post.user = user
        }
    }
}
