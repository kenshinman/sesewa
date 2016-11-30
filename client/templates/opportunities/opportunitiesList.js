Template.opportunitiesMi.events({

});

Template.opportunitiesMi.helpers({
    "opportunities": function(){
        return Opportunities.find({}, {$sort: {createdAt: -1}});
    }
});

Template.opportunitiesMi.onRendered(function(){
    if ($.fn.niceSelect) {
        $('[data-nice-select]').niceSelect();
    }
});

Template.opportunitiesMi.onCreated(function(){

});

