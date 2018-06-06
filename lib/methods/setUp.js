Meteor.methods({
    'setUp': function (userId, setUpObj) {
        if (userId) {
            return Meteor.users.update({
                _id: userId
            }, {
                $set: {
                    isSetUp: true,
                    setUp: setUpObj,
                    profilePicture: setUpObj.image
                }
            });
        }
    }
})
