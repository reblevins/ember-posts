import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostsComponent extends Component {
    @tracked showDetail = false;
    numberPosts = 20;
    
    @action toggleDetail() {
        this.showDetail = !this.showDetail
    }
}
