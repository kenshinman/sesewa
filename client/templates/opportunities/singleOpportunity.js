Template.singleOpportunity.events({
    "click a.apply": function(e){
        e.preventDefault();

        $('#applyModal').modal('toggle');
        $('.modal-backdrop').show();

        console.log('clicked')
    },
    /*"submit form#apply": function(e){
        e.preventDefault();

        let file = $('#cv').get(0).files[0];

        if(file){
            fsFile = new FS.File(file);

            CVs.insert(fsFile, function(err, result){
                if(err){
                    throw new Meteor.Error(err);
                }else{

                    Meteor.call('applyForOpportunity', userId, opportunityid);
                    //window.location.reload();

                    event.target.email.value = "";
                    $('#profileImage').val('');
                    toastr.success('Profile Photo Updated', 'Yay!!!');
                    return false;
                }
            });
        }

        return false;
    }*/
})
