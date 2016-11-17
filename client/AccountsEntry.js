Meteor.startup(function () {
    AccountsEntry.config({
      privacyUrl: '/privacy-policy',
      termsUrl: '/terms-of-use',
      homeRoute: '/',
      dashboardRoute: '/dashboard',
      profileRoute: 'profile',
      passwordSignupFields: 'USERNAME_OR_EMAIL',
      showSignupCode: true,
      showOtherLoginServices: true,
      extraSignUpFields: [{
        field: "name",
        name: "",
        label: "Full Name",
        placeholder: "e.g. Naruto Sandime",
        type: "text",
        required: true
       }],
       fluidLayout: false,
       useContainer: true,
       signInAfterRegistration: false,
       emailVerificationPendingRoute: '/verification-pending',
       showSpinner: true,
       spinnerOptions: { color: "#000", top: "80%" }

    });
  });
