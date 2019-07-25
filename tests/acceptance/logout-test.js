import { module, test } from 'qunit';
import { visit, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import StubAuthService from '../stubs/auth-service';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function(){
    this.owner.register('service:auth',StubAuthService);
  })

  test('visiting /logout', async function(assert) {
    //this.owner.lookup('service:auth')._uid = '1' (or)
    let auth = this.owner.lookup('service:auth');//auth._writeUserId('1') or we can do it without exposing the private function

    auth.setUserId('1') //logged in

    await visit('/teams');
    assert.equal(currentURL(), '/teams');

    await click('.team-sidebar__logout-button')
    assert.equal(currentURL(), '/login');

    await click('select')
    assert.equal(currentURL(), '/login');
    assert.equal(auth.currentUserId,'',"User is logged out at the end")

    //await pauseTest();
     //alternative to debugger but provides interactive browser and does not freeze the program like debugger does
  });
});
