import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | posts', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<Posts />`);
        assert.dom('ul').hasClass('posts');
        assert.dom('ul li').exists({ count: 20 });

    });
    test('clicking li renders post', async function(assert) {
        await render(hbs`<Posts />`);

        assert.dom('ul li').exists();
        assert.dom('article').doesNotExist();

        await click('ul li');
        assert.dom('article').exists();
    });
});
