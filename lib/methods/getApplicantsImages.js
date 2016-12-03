Meteor.methods({
    getApplicantsImages: function (applicantsIdArray) {
        let allImages = [];
        for (let i = 0; i < applicantsIdArray.length; i++) {
            let applicantsId = applicantsIdArray[i];
            //console.log('applicants id ' + applicantsId)

            //get the profilePicture (url) of all the applicants
            let userImage = Meteor.users.findOne({
                _id: applicantsId
            }).profilePicture;

            allImages.push(userImage)
        }

        //return an array to the template and user {{#each}}
        return allImages;
    }
})
