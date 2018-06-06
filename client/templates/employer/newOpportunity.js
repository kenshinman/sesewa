Template.newOpportunity.onRendered(function () {

    CKEDITOR.replace('opportunity_description');
    CKEDITOR.replace('opportunity_requirements');
    CKEDITOR.add;

});

function sluggify(str) {
    str = str.toLowerCase().trim().replace(/\W/g, '-').split(" ");
    if (str[str.length - 1] == " ") {
        str[str.length - 1] = "";
    }
    str = str.join("-");

    return str
}

Template.newOpportunity.events({
    "submit form#new-opportunity": function (e) {
        e.preventDefault();

        var opportunityObject = {
            title: e.target.title.value.trim(),
            slug: sluggify(e.target.title.value) ,
            description: e.target.description.value,
            requirements: e.target.requirements.value,
            opportunity_type: e.target.opportunity_type.value,
            location: e.target.location.value.trim(),
            expiresAt: new Date(e.target.expiry_date.value),
            duration: e.target.duration.value,
            salary: e.target.salary.value,
            createdAt: new Date(),
            owner: {
                id: Meteor.userId(),
                image: Meteor.user().profilePicture,
                username: Meteor.user().username
            },
            applicants: [],
            hires: []
        }
        //console.log(opportunityObject);
        //return false;


        Meteor.call('createOpportunity', Meteor.userId(), opportunityObject, function (error, response) {
            if (error) {
                toastr.error(error.reason, 'Error');
                return false;
            }
            toastr.success('You have successfully created an opportunity', 'Success')
            Router.go('/dashboard');
        });
        return false;
    }
})


// image:"/cfs/files/Images/SxawnsWBggLqd858a", username:"kaydence co"
