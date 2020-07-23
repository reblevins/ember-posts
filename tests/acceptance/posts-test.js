import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | posts', function(hooks) {
    setupApplicationTest(hooks);

    test('visiting / forwards to /1', async function(assert) {
        await visit('/');

        assert.equal(currentURL(), '/1');
        assert.dom('h1').hasText('Da Blawg');
        assert.dom('ul li').exists({ count: 20 });
    });

    test('clicking post opens modal', async function(assert) {
        await visit('/2');

        this.setProperties({
            model: {
                currentPage: 1
            }
        });
        assert.dom('article.post').doesNotExist();

        await click('ul li');
        assert.dom('article.post').exists();
    });
});
