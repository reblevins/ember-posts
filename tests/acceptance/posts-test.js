import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | posts', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting /', async function(assert) {
        await visit('/');

        assert.equal(currentURL(), '/');
        assert.dom('h1').hasText('Ma Posts');
        // assert.dom('ul li').equal(1);
    });
});
