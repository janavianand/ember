import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default class LoginRoute extends Route {

  @service auth
  async beforeModel(transition){
    //before using super, make sure if its going to be parallel execution => Promis.all[]
    await super.beforeModel(transition)

    if(this.auth.currentUserId){
      this.transitionTo('teams')
    }

  }
}
