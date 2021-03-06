import Ember from 'ember';

import SessionService from 'ember-simple-auth/services/session';

import config from '../config/environment';

export default SessionService.extend({
    tokenObserver: Ember.observer('data.authenticated.access_token', function() {
        if (this.get('data.authenticated.access_token')) {
            const url = `${config.AUTHENTICATION_HOST}/userinfo`;
            console.log(url);
            Ember.$.ajax({
                dataType: 'json',
                url: url,
                success: (responseData) => {
                    this.set('userProfile', {
                        fullName: responseData.preferred_username,
                        agentId: responseData.agentId,
                        email: responseData.email,
                        isFocusGroupMember: responseData.agentId !== '1016',
                    });
                },
                error: (responseData) => {
                    console.log(responseData);
                    // If fetching the user profile errors, sign out to
                    // retrieve a new token.
                    this.invalidate();
                },
                headers: {
                    Authorization: `bearer ${this.get('data.authenticated.access_token')}`,
                },
            });
        } else {
            this.set('userProfile', undefined);
        }
    }),
});
