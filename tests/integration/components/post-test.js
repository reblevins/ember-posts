import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | post', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<Post />`);

        assert.dom('article').hasClass('post');
    });

    test('it renders attributes', async function(assert) {
        this.setProperties({
            userId: 1,
            id: 1,
            title: "Title",
            body: "Body",
        });
        await render(hbs`<Post
            @title={{this.title}}
        />`);

        assert.dom('article h2').hasText('Title');
    })
});
