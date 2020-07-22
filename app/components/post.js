import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostComponent extends Component {
    @action toggleDetail() {
        this.args.toggleDetail()
    }
}
