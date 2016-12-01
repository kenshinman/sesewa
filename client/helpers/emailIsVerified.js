Template.registerHelper('emailIsVerified', function(userId){
   return Meteor.user().registered_emails[0].verified;
});
