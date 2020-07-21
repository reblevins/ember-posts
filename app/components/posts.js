import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsComponent extends Component {
    @tracked showDetail = false;
    numberPosts = 20;
    @tracked currentPost = 0;

    get posts() {
        console.log(this.args);
        let { posts } = this.args
        return posts.slice(this.currentPost, this.numberPosts)
    }

    @action toggleDetail() {
        this.showDetail = !this.showDetail
    }
    @action next() {
        this.currentPost = this.currentPost + this.numberPosts
    }
}
