Template.registerHelper('getOpportunities', function(){
    return Opportunities.find({}, {sort: {createdAt: -1}});
})
