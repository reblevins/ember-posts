import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsComponent extends Component {
    @tracked showDetail = false;
    numberPosts = 20;
    @tracked currentPost = 0;
    @tracked currentPage = 1;
    @tracked totalPages = 0;
    get posts() {
        let { posts } = this.args
        this.totalPages = Math.ceil(posts.length / this.numberPosts)
        // let min =
        // posts = posts.slice((this.currentPage - 1) * this.numberPosts, ((this.currentPage - 1) * this.numberPosts + this.numberPosts));
        return posts;
    }

    @action toggleDetail() {
        this.showDetail = !this.showDetail
    }
    @action next() {
        if (this.currentPage == this.totalPages) return
        this.currentPage = this.currentPage + 1
    }
    @action previous() {
        if (this.currentPage == 1) return
        this.currentPage = this.currentPage - 1
    }
}
