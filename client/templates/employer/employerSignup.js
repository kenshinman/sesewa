Template.employerSignup.events({
    'change input:checkbox.agreement': function(e){
        var self = $(e.currentTarget);
        if(self.is(':checked')){
            $('button.submit-form').removeAttr('disabled')
        }else{
            $('button.submit-form').attr('disabled', 'disabled')
        }
    },

    'submit form#signupForm': function(e){
        e.preventDefault()
        var email = e.target.email.value;
        var password = e.target.password.value;
        var password1 = e.target.password1.value;
        var company_name = e.target.company_name.value;
        var user_type = e.target.user_type.value;

        var profile = {
            company_name: company_name,
            user_type: user_type,
            dateJoined: new Date()
        }

        if(email != "" && password === password1 && company_name !=""){
            //go ahead

            Accounts.createUser({
                email: email,
                password: password,
                username: company_name
            }, function(error){
                if(error){
                    console.log(error.reason, 'Error');
                    return false;
                }

                Meteor.call('createProfileField', Meteor.userId(), profile, function(error, response){
                    if(error){
                        toastr.error(err.reason, 'Error')
                        return false;
                    }
                })

                toastr.success('You have successfully created your Employer Account');
                Router.go('/dashboard')
            })
        }else{
            toastr.warning('All fields are required', 'Warning');
            return false;
        }
    }
});



Template.employerSignup.onRendered(function(){

    if($('input:checkbox.agreement').is(':checked')){
        alert('checked')
    }else{
       $('button.submit-form').attr('disabled', 'disabled') ;
    }
})
