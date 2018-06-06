Accounts.onLogin(function () {
   /* var username = Meteor.user().username || Meteor.user().profile.name
    if(Meteor.user().services.twitter && Meteor.user().email == ''){
        Session.set('emailStatus', 'notSet');
        //console.log('Your email is not update ooo');
    }else{
        Session.set('emailStatus', 'set');
        //console.log('You have logged in with something else');
    }*/
    $('#signinModal').modal('hide');
    $('.modal-backdrop').hide();
    /*toastr.success('You have Successfully Logged in.', 'Welcome! '+username+'');
    Router.go('/'+ Meteor.user().profile.user_type +'/dashboard');*/
});
/*
Accounts.onLogout(function () {
    toastr.success('You have Successfully Logged out.', 'Bye bye!');
    Router.go('/');
});*/
