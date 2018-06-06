Meteor.methods({
    runSetup: function(id){
        Meteor.users.update({_id: id}, {$set: {isSetUp: false}});
    }
})