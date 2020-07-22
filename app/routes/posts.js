import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
    async model(params) {
        let headers = {
            method: 'GET',
        }
        // var posts;
        let currentPage = (params.page) ? parseInt(params.page) : 1;
        // console.log(parms.page);
        // First fetch all posts so we'll know how many pages there are.
        // Ideally this would be something the aip sends with every call.
        let allPostsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        let allPosts = await allPostsResponse.json();
        let totalPages = Math.ceil(allPosts.length / 20);

        if (currentPage > totalPages || currentPage <= 0) {
            this.transitionTo('/1'); // Don't allow the user to enter a page number in the url that doesn't exist
        }
        // Now only get the 20 posts for the currentPage
        let paginatedPostsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=20`);
        let paginatedPosts = await paginatedPostsResponse.json();

        let previousPage = (currentPage != 1) ? (currentPage - 1) : null;
        let nextPage = (currentPage != totalPages) ? (currentPage + 1) : null;
        return {
            posts: paginatedPosts,
            totalPages: totalPages,
            currentPage: currentPage,
            previousPage: previousPage,
            nextPage: nextPage
        }
    }
}
