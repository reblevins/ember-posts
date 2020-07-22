import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    beforeModel() {
        if (!params) {
            this.transitionTo('/1'); // Implicitly aborts the on-going transition.
        }
    }
    async model() {
        let headers = {
            method: 'GET',
        }
        // var posts;
        let currentPage = (params.page) ? params.page : 1;
        let allPostsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        let allPosts = await allPostsResponse.json();
        let paginatedPostsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=20`);
        let paginatedPosts = await paginatedPostsResponse.json();
        let totalPages = Math.ceil(paginatedPosts.length / 20)
        return {
            posts: paginatedPosts,
            totalPages: totalPages,
            currentPage: currentPage
        }
    }
}
