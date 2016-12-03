Template.registerHelper('isOwner', function(userId, ownerId){
    return userId == ownerId;
})

Template.registerHelper('myOpportunities', function(myId){
    let  myOpps = Opportunities.find({$where: "owner.id == myId"});
    console.log(myOpps.fetch());
    return myOpps;
})
