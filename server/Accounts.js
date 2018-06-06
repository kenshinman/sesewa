Accounts.onCreateUser(function (options, user) {

    if (typeof (user.services.facebook) != "undefined") {
        user.email = user.services.facebook.email;
        user.profilePicture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.username = user.services.facebook.name;
        user.profile = {
            first_name: user.services.facebook.first_name,
            last_name: user.services.facebook.last_name,
            fullname: user.services.facebook.first_name+' '+user.services.facebook.last_name,
            phone: null,
            user_type: "employee"
        };
        user.roles = ["employee"];
        //Roles.addUsersToRoles(user._id, ['employee']);
        //other fields which you can also insert as '' or null
    }

    /**/

    if (typeof (user.services.twitter) != "undefined") {
        user.email = '';
        user.profilePicture = user.services.twitter.profile_image_url;
        user.username = user.services.twitter.screenName;
        user.roles = ["employee"];
        //Roles.addUsersToRoles(user._id, ['employee']);
        //other fields which you can also insert as '' or null
    }

    if (typeof (user.services.google) != "undefined") {
        user.email = user.services.google.email;
        user.profilePicture = user.services.google.picture;
        user.username = user.services.google.name;
        user.profile = {
            first_name: user.services.google.given_name,
            last_name: user.services.google.family_name,
            fullname: user.services.google.name,
            phone: '',
            user_type: "employee"
        };
        user.roles = ["employee"];
        //Roles.addUsersToRoles(user._id, ['employee']);
        //other fields which you can also insert as '' or null
    }

    if (typeof (user.services.password) != "undefined") {
        user.profilePicture = '/img/avatar.png';
    }

    user.setUp = {
        gender: null,
        date_of_birth: null,
        im: null,
        image: null,
        current_city: null,
        current_city2: null,
        education_level: {
            level: null,
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
            preferred_industries: null,
            work_type: null,
            looking_for: null
        }

    }
    //user.roles = []
    user.isSetUp = false;
    user.inbox = [];
    /*if(user.profile.user_type == "employee"){
        user.experience = [];
    };*/

    return user;
});

Accounts.config(
    {
        sendVerificationEmail: true,
        forbidClientAccountCreation: false
    }
);

/*var loginAttemptVerifier = function (parameters) {
        if (parameters.user && parameters.user.emails && (parameters.user.emails.length > 0) && parameters.user.services.password) {
            // return true if verified email, false otherwise.
            var found = _.find(
                parameters.user.emails,
                function (thisEmail) {
                    return thisEmail.verified
                }
            );

            if (!found) {
                throw new Meteor.Error(500, 'Please verify your email address. We sent you an email. If you don\'t find in your inbox, please check your spam');
            }
            return found && parameters.allowed;
        } else if (parameters.user && parameters.user.services.twitter) {
            //console.log("you have logged in with twitter.");
            return true;
        } else if (parameters.user && parameters.user.services.facebook) {
            //console.log("you have logged in with facebook.");
            return true;
        } else if (parameters.user && parameters.user.services.google) {
            //console.log("you have logged in with google.");
            return true;
        } else {
            // console.log("user has no registered emails.");
            return false;
        }
    };
    Accounts.validateLoginAttempt(loginAttemptVerifier);*/
