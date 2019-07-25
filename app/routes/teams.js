import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default class TeamsRoute extends Route {

  @service auth
  async beforeModel(transition){
    //before using super, make sure if its going to be parallel execution => Promis.all[]
    await super.beforeModel(transition)

    //send them to login if the user is not authenticated
    if(!this.auth.currentUserId){
      this.transitionTo('login')
    }

  }
}

