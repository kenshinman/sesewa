Template.registerHelper('getOwner', function(ownerId){
    //console.log(Meteor.users.findOne({_id: ownerId}));
    Meteor.call('getOwnerInfo', ownerId, function(error, result){
        if(error){
            console.log('could not get user')
            return false;
        }

        Session.set('ownerInfo', result);
    })

})

//get the images if the applicants at the bottom of single opportunity
Template.registerHelper('applicantsImages', function(applicantsIdArray){
    Meteor.call('getApplicantsImages', applicantsIdArray, function(error, result){
        if(error){
            console.log('There was an error getting your result')
        }
        //console.log(result);
        Session.set('appImages', result);
    })
});

Template.registerHelper('currentOwner', function(){
    return Session.get('ownerInfo');
});

Template.registerHelper('appImagesResult', function(){
    return Session.get('appImages');
});

