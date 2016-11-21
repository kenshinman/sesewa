Template.setupModal.events({
    'submit #set-up-form': function(e){
        e.preventDefault();
        console.log($(e.target).serialize());
    }
});

Template.setupModal.onRendered(function(){
    $('#my-datepicker').datepicker();
})
