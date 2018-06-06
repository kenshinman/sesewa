/*Meteor.methods({
    'applyForOpportunity': function(userObj, opportunityId){
        if(userId){
            //CVs.insert()
            Meteor.users.update({_id: userId}, {$push: {"applications": opportunityId}});
            Opportunities.update({_id: opportunityId}, {$push: {"applicants": userObj}});
        }
    }
})*/
