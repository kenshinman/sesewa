Meteor.methods({
    'getOwnerInfo': function (ownerId) {
        console.log(ownerId);
        var info = Meteor.users.find({
            _id: ownerId
        }, {
            fields: {
                'profilePicture': 1,
                'username': 1
            }
        })

        console.log(info.fetch());
        return info.fetch();
    }
})
