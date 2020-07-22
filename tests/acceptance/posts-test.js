import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | posts', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
        await visit('/');

        assert.equal(currentURL(), '/1');
        assert.dom('h1').hasText('posts.exe');
        assert.dom('ul li').exists({ count: 20 });
    });

    test('clicking next', async function(assert) {
        await visit('/');

        assert.dom('a.next').exists()
        await click('a.next');
        assert.equal(currentURL(), '/2');
    });

    test('clicking previous', async function(assert) {
        await visit('/');

        assert.dom('a.previous').doesNotExist()
        await click('a.next');

        assert.dom('a.previous').exists()
        await click('a.previous');
        assert.equal(currentURL(), '/1');
    });
});
