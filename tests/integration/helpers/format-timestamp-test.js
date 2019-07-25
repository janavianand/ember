import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    // this.set('inputValue', '1234');

    await render(hbs`{{format-timestamp '04-21-2017 12:01:04 PM'}}`);

    assert.equal(this.element.textContent.trim(), 'Apr 21, 2017 00:01:04 AM');
  });
});
