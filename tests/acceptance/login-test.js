import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {fillIn,click} from '@ember/test-helpers'
import StubAuthService from '../stubs/auth-service';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function(){
    this.owner.register('service:auth',StubAuthService);
  })

  test('visiting /login', async function(assert) {
    await visit('/login'); //visit the login
    assert.equal(currentURL(), '/login'); //got there

    //pick user with id 1
    await fillIn('select','1')
    //click sign in
    await click('input[type="submit"]');
    //got htere ok
    assert.equal(currentURL(),'/teams');
  });
});
