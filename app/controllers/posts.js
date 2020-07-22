import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsController extends Controller {
    @tracked showDetail = false
    @tracked post = {}
    @tracked user = {
        name: null,
        email: null,
        website: null,
        phone: null
    }
    @action async toggleDetail(post) {
        this.showDetail = !this.showDetail
        if (post) {
            let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            this.user = await response.json()
            // console.log(user);
            // console.log(post);
            this.post = post;
            // this.post.user = user
        }
    }
}
