Meteor.methods({
    'getOwnerInfo': function (ownerId) {
        //console.log(ownerId);
        return Meteor.users.findOne({
            _id: ownerId
        }, {
            fields: {
                'profile': 1,
                'setUp': 1
            }
        });
    }
})
