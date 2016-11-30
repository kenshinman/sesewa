Template.employerSetup.onRendered(function(){
   CKEDITOR.replace('company_description');
   CKEDITOR.add;

});

Template.employerSetup.events({
    'submit #employer-setup-form': function(e){
        e.preventDefault();

        var setUp = {
            image: e.target.company_logo.value,
            industry: e.target.industry.value,
            company_size: e.target.company_size.value,
            company_type: e.target.company_type.value,
            company_description: e.target.company_description.value,
            contact_details: {
                phone: e.target.phone.value,
                website: e.target.website.value,
                contact_person_name: e.target.contact_person_name.value,
                contact_person_position: e.target.contact_person_position.value,
                company_address: e.target.company_address.value,
                company_state: e.target.company_state.value
            }
        }

        Meteor.call('employerSetUp', Meteor.userId(), setUp, function(error, result){
            if(error){
                toastr.error(error.reason, 'Error' );
                return false;
            }
            toastr.success('Your Account has bee successfully set up', 'Congratulations')
            Router.go('/employer/dashboard');

        })
        return false;
    }
})
