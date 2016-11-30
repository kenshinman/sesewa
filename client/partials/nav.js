Template.body.events({
    'click .sign-out': function(e){
        Meteor.logout();
        Router.go('/');
        toastr.success('You have successfully Logged Out', 'Bye Bye');
    }
});
