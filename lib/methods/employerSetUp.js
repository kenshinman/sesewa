Meteor.methods({
    'employerSetUp': function (userId, setUpObj) {
        if (userId) {
            return Meteor.users.update({
                _id: userId
            }, {
                $set: {
                    setUp: setUpObj,
                    profilePicture: setUpObj.image,
                    isSetUp: true
                }
            })
        }
    }
})
