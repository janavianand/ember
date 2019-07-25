import Component from '@glimmer/component';
import {action} from '@ember/object'
import {tracked} from '@glimmer/tracking'

export default class LoginFormComponent extends Component {

  @tracked userId = null;

  handleLogin(){
    console.log('userId=',this.userId);
  }
  get isDisabled(){
    return !this.userId
  }

  // @action binding this to the component
  @action
  //two way binding. as the UI changes, the userId syncs or changes
  onSelectChanged(evt){
    this.userId = evt.target.value
  }

  @action
  onLoginFormSubmit(evt){
    /**
     * @type {HTMLFormElement}
     */
    evt.preventDefault();
    //const form = evt.target;
    //console.log(evt)
     /**
     * @type {HTMLSelectElement}
     */
    //const userSelect = form.querySelector('select');
    //No need of selector as we can tie that up to this.userId

    if(this.isDisabled) return
    this.handleLogin()
  }
}
