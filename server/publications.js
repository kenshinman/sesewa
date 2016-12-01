Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({
            _id: this.userId
        }, {
            fields: {
                //'services': 0,
                'profilePicture': 1,
                'setUp': 1,
                'username': 1,
                'isSetUp': 1,
                'profile': 1,
                'roles': 1,
                'registered_emails': 1
            }
        });
    } else {
        this.ready();
    }
});

Meteor.users.allow({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    }
});

Meteor.publish('allOpportunities', function(){
    return Opportunities.find({});
})
