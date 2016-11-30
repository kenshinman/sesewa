Template.registerHelper('emailIsVerified', function(userId){
   return Meteor.user().emails[0].verified;
});
