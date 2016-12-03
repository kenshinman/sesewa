Meteor.methods({
    'createOpportunity': function(userId, opportunityObject){
        //console.log(userId);
        //return false;
        if(Meteor.users.findOne({_id: userId}).profile.user_type == "employer"){
            return Opportunities.insert(opportunityObject)
        }else{
            throw new Meteor.Error(500, 'You are not an Employer')
        }
    }
})
