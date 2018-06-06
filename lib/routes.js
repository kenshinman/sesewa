Router.configure({
    notFoundTemplate: 'notFound', //template with name notFound
    loadingTemplate: 'loading' //template with name loading
});

Router.onBeforeAction('loading'); //before every action call show loading template

Router.route("/", {
    name: "home",
    waitOn: function () {
        return [Meteor.subscribe('userData'), Meteor.subscribe('allOpportunities'), Meteor.subscribe("allImages")]
    },
    layoutTemplate: "homeLayout",
    template: "home"
});

Router.route("/employee/dashboard/:id", {
    name: "employee",
    waitOn: function () {
        return Meteor.subscribe('userData');
    },
    onBeforeAction: function () {
        if (!Roles.userIsInRole(Meteor.userId(), 'employee')) {
            toastr.warning('You are not allowed to view this page', 'Warning');
            Router.go('/');
        }
        let isValidId = Meteor.users.find({_id: this.params.id}).fetch();
        console.log(isValidId);
        if(isValidId.length < 1){
            toastr.warning('Invalid user address');
            Router.go('/');
        }
        this.next()
            //AccountsEntry.signInRequired(this);
    },
    /*onAfterAction: function(){

    },*/
    data: function(){
        return Meteor.users.findOne({_id: this.params.id});
    },
    layoutTemplate: "employeeLayout",
    template: "employee",
    seo: {
        title: 'Employee Dashboard - Sesewa.org', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    fastRender: true
});

Router.route('/employer', {
    name: 'employer',
    template: 'employer',
    waitOn: function () {
        return Meteor.subscribe('userData');
    },
    seo: {
        title: 'Employers on Sesewa.org', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    layoutTemplate: 'employerLayout'
})

Router.route('/employer/setup', {
    name: 'employer_setup',
    template: 'employerSetup',
    layoutTemplate: 'employerSetupLayout',
    waitOn: function () {
        return Meteor.subscribe('userData');
    },
    onBeforeAction: function () {
        if (!Roles.userIsInRole(Meteor.userId(), 'employer') || !Meteor.userId()) {
            toastr.warning('You need to login to view this page', 'Warning');
            Router.go('/');
        }
        this.next()
    },
    seo: {
        title: 'Intern Dashboard - Sesewa.org', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    fastRender: true
});

Router.route('/employer/dashboard/:id', {
    name: 'employer_dashboard',
    template: 'employerDashboard',
    layoutTemplate: 'employeeLayout',
    waitOn: function () {
        return [Meteor.subscribe('userData'), Meteor.subscribe('myOpportunities', Meteor.userId())]
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params.id});
    },
    onBeforeAction: function () {
        if (!Roles.userIsInRole(Meteor.userId(), 'employer')) {
            toastr.warning('You need to login to view this page', 'Hello there');
            Router.go('/');
        }
        this.next()
    },
    seo: {
        title: 'Employer Dashboard - Sesewa.org', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    fastRender: true
});

Router.route('/employer/new-opportunity', {
    name: 'new_opportunity',
    template: 'newOpportunity',
    layoutTemplate: 'employeeLayout',
    waitOn: function () {
        return Meteor.subscribe('userData');
    },
    onBeforeAction: function () {
        if (!Roles.userIsInRole(Meteor.userId(), 'employer')) {
            toastr.warning('You need to login to view this page', 'Hello there');
            Router.go('/');
        }
        this.next()
    },
    seo: {
        title: 'Create an Opportunity - Sesewa.org', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    fastRender: true
});

Router.route('/verify-email/:token', {
    name: 'verify_email',
    template: 'verifyEmail',
    layoutTemplate: 'homeLayout',
    waitOn: function () {
        return Meteor.subscribe('userData');
    },
    onBeforeAction: function () {
        Meteor.logout();
        Accounts.verifyEmail(this.params.token, function (error) {
            if (error) {
                toastr.error(error.reason, 'Oops! Error');
            }
            toastr.success('You have successfully verified your email address', 'Congrats <i class="fa fa-thumbs-up"></i>')
        });
        this.next()
    },
    seo: {
        title: 'Verify Your Email'
    },
    fastRender: true
});

Router.route('/dashboard', {
    name: 'dashboard',
    template: 'dashboard',
    layoutTemplate: 'homeLayout',
    waitOn: function () {
        return Meteor.subscribe('userData');
    },
    onBeforeAction: function () {
        if (Meteor.user()) {
            Router.go('/' + Meteor.user().profile.user_type + '/dashboard/'+Meteor.userId());
        } else {
            Router.go('/');
        }
        this.next()
    },
    fastRender: true
});

Router.route('/opportunities', {
    name: 'opportunitiesMi',
    template: 'opportunitiesMi',
    layoutTemplate: 'employeeLayout',
     waitOn: function () {
        [
            Meteor.subscribe('userData'),
            Meteor.subscribe('allOpportunities')
        ]
    },
    seo: {
        title: 'Internship Opportunities  - Sesewa.org', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    fastRender: true
});

Router.route('/opportunity/:_id/:slug', {
    name: 'singleOpportunity',
    template: 'singleOpportunity',
    layoutTemplate: 'employeeLayout',
    waitOn: function(){
        return Meteor.subscribe('singleOpportunity', this.params._id);
    },
    data: function(){
        return Opportunities.findOne({_id: this.params._id});
    },
    seo: {
        title: function(){
            return 'This is a single opportunity page'
        }, // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
        separator: '|'
    },
    fastRender: true
});


9758