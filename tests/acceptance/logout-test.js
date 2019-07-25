import { module, test } from 'qunit';
import { visit, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /logout', async function(assert) {
    await visit('/teams');
    assert.equal(currentURL(), '/teams');

    await click('.team-sidebar_logout-button')
    assert.equal(currentURL(), '/logout');
    //await pauseTest();
     //alternative to debugger but provides interactive browser and does not freeze the program like debugger does
  });
});
