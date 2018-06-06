if (Meteor.isServer) {
    Meteor.methods({
        createProfileField: function (userId, profileObj) {
            Roles.addUsersToRoles(userId, profileObj.user_type);
            return Meteor.users.update({
                _id: userId
            }, {
                $set: {
                    profile: profileObj,
                    roles: [profileObj.user_type],
                    experience: []
                }
            })
        }
    })
}
