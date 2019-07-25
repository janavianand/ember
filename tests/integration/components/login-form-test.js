import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render,find,fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

export const prepareString =   /\s*\n+\s*/g

module('Integration | Component | login-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LoginForm />`);
    //  /\s*\n+\s*/g
    // \s -space \n - one or more new line
    assert.deepEqual(this.element.textContent.trim().replace(prepareString,'\n').split('\n'), ['Login','Select a user','Testy Testerson','Sample McData','id=']);

    //button disable check initially

    const button = this.element.querySelector('input[type="submit"]');
    assert.ok(button,'button on the screen');

    assert.equal(button.hasAttribute('disabled'),true,'initialy the disabled attribute is present')

    // Template block usage:
    // await render(hbs`
    //   <LoginForm>
    //     template block text
    //   </LoginForm>
    // `);

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('after selecting a user,submit button checks',async function(assert){
    await render(hbs `<LoginForm />`)

    const button = this.element.querySelector('input[type="submit"]');

    //const userSelect = find('select');

    //asserting or making the userId to be 1
    await fillIn('select','1');

    assert.equal(button.hasAttribute('disabled'),false,'initialy the disabled attribute is present')
  })
});
