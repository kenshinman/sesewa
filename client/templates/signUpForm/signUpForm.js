Template.signUpForm.events({
    'submit #sign-up-form': function (e) {
        e.preventDefault();

        var userData = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            username: e.target.username.value,
            full_name: e.target.first_name.value + ' ' + e.target.last_name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            password1: e.target.password1.value,
            user_type: e.target.user_type.value
        }

        var profile = {
            first_name: userData.first_name,
            last_name: userData.last_name,
            fullname: userData.full_name,
            phone: userData.phone,
            user_type: userData.user_type
        }

        //Session.set('profile', profile);

        if (userData.first_name != "" && userData.last_name != "" && userData.email != "" && userData.username != "" && userData.phone != "" && userData.password != "" && userData.password1 != "" && userData.password == userData.password1) {
            //console.log(userData);
            //return false;
            Accounts.createUser({
                email: userData.email,
                password: userData.password,
                username: userData.username,
            }, function (err) {
                if (err) {
                    toastr.error(err);
                    console.log(err)
                } else {

                    Meteor.call('createProfileField', Meteor.userId(), profile, function(error, response){
                        if(error){
                            toastr.error(error.reason, 'Error');
                            return false;
                        }else{
                            $('#signupModal').modal('toggle');
                            $('.modal-backdrop').hide();
                            Roles.addUsersToRoles(Meteor.userId(), ['employee'])
                            toastr.success("Your registration was successful, You are now logged in.");
                            Router.go('/dashboard');
                        }
                    });

                }
            })

            /* var profile = {
                     firstName: userData.first_name,
                     lastName: userData.last_name,
                     fullName: userData.full_name,
                     phone: userData.phone,
                     type: "employee"

                 }

             Meteor.call('createUserMi', userData, profile, function(error, response){
                 if(error){
                     toastr.error( error.reason, 'Error');
                     return false;
                 }else{
                     toastr.success( 'Welcome to Sesewa, Your account has been created', 'Congrats');
                 }
             })*/
        } else {
            toastr.error('All fields are required, Please fill them.', 'Required');
            return false;
        }
        return false;
    }
})
