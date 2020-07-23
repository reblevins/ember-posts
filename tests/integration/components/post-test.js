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
            post: {
                userId: 1,
                id: 1,
                title: "Title",
                body: "Body"
            },
            user: {
                email: "Sincere@april.biz",
                name: "Leanne Graham",
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org"
            }
        });
        this.set('toggleDetail', (actual) => {
            // let expected = { comment: 'You are not a wizard!' };
            assert.deepEqual(actual, expected, 'submitted value is passed to external action');
        });
        await render(hbs`<Post
            @post={{this.post}}
            @user={{this.user}}
            @toggleDetail={{this.toggleDetail}}
        />`);

        assert.dom('article h2').hasText('Title');
        assert.dom('article p').hasText('Body');
        assert.dom('article div.user-info').exists()
        assert.dom('article div.user-info h3').hasText("User Info")
        assert.dom('article div.user-info .name span.value').hasText("Leanne Graham")
        assert.dom('article div.user-info .website a').hasText("hildegard.org")
        assert.dom('article div.user-info .email a').hasText("Sincere@april.biz")
        assert.dom('article div.user-info .phone span.value').hasText("1-770-736-8031 x56442")
    })
});
