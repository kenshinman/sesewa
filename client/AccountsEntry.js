Meteor.startup(function () {
    AccountsEntry.config({
      privacyUrl: '/privacy-policy',
      termsUrl: '/terms-of-use',
      homeRoute: '/',
      passwordSignupFields: 'USERNAME_OR_EMAIL',
      showOtherLoginServices: true,
       fluidLayout: true,
       useContainer: false,
       signInAfterRegistration: false,
       emailVerificationPendingRoute: '/verification-pending',
       showSpinner: true,
       spinnerOptions: { color: "#000", top: "80%" }

    });
  });
