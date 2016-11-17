Template.signUpForm.events({
    'submit #sign-up-form': function(e){
        e.preventDefault();

        var userData = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            username: e.target.username.value,
            full_name: e.target.first_name.value+ ' ' +e.target.last_name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
            password1: e.target.password1.value,
        }




        if(userData.first_name !="" && userData.last_name !="" && userData.email !="" && userData.username !="" && userData.phone !="" && userData.password !="" && userData.password1 !="" && userData.password == userData.password1)
        {
        console.log(userData);
        return false;
        Accounts.createUser({
            email: userData.email,
            password: userData.password,
            username: userData.username,
            profile: {
                first_name: userData.first_name,
                last_name: userData.last_name,
                fullname: userData.full_name,
                phone: userData.phone,
                gender: null,
                date_of_birth: null,
                im: null,
                image: null,
                current_city: null,
                current_city2: null,
                education_level: {
                    level: Session.get('educational_level'),
                    pre_university: {
                        school: null,
                        current_year: null
                    },
                    undergraduate: {
                        institution: null,
                        current_level: null,
                        expected_graduation_year: null,
                        cgpa: null
                    },
                    graduate: {
                        institution: null,
                        graduating_cgpa: null,
                        graduation_class: null,
                        status: null, //i am..
                        expected_month_of_service: null
                    }
                },
                preferences: {
                    preferred_industries: [],
                    work_type: [],
                    looking_for: []
                }

            },
            roles: [ "employee" ]
        }, function(err){
            if(err){
                toastr.error(err);
                console.log(err)
            }else{
                toastr.success("Your registration was successful, You are now logged in.");
                Router.go('/dashboard');
            }
        })
        }else{
            alert('not good')
        }
        return false;
    }
})
