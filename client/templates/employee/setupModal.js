Template.setupModal.helpers({
    "myInstitutions": function(){
        return Institutions.find({}, {$sort: {school_name: 1}});
    }
})

Template.setupModal.events({
    'change input:radio[name=education_level]': function (e) {
        var self = $(e.currentTarget);

        //ehcj clicked, change the session variable 'education_level' to this current value
        if (self.is(':checked')) {
            Session.set('education_level', self.val());
        }
    },

    "change input:checkbox.work-type": function (e) {
        var self = $(e.currentTarget);
        var workTypeArray = Session.get('work_types');
        if (self.is(":checked") && workTypeArray.indexOf(self.val()) < 0) {
            workTypeArray.push(self.val());
            Session.set('work_types', workTypeArray)
        } else {
            workTypeArray.splice(workTypeArray.indexOf(self.val()), 1);
            Session.set('work_types', workTypeArray);
        }
    },

    "change input:checkbox.looking-for": function (e) {
        var self = $(e.currentTarget);
        var lookingTypeArray = Session.get('looking_for');
        if (self.is(":checked") && lookingTypeArray.indexOf(self.val()) < 0) {
            lookingTypeArray.push(self.val());
            Session.set('looking_for', lookingTypeArray)
        } else {
            lookingTypeArray.splice(lookingTypeArray.indexOf(self.val()), 1);
            Session.set('looking_for', lookingTypeArray);
        }
    },



    'submit #set-up-form': function (e) {
        e.preventDefault();

        var selectedArray = $('#pref_industries').select2('data');

        var newPrefArr = [];

        for (var i = 0; i < selectedArray.length; i++) {
            console.log(selectedArray[i].text);
            newPrefArr.push(selectedArray[i].text)
        }

        console.log(newPrefArr)

        var education_level_ = Session.get('education_level');
        var education_level_value;

        if (education_level_ == "Graduate") {
            education_level_value = {
                level: Session.get('education_level'),
                institution: $('#grad_institution').val().trim(),
                graduating_cgpa: e.target.graduating_cgpa.value,
                graduation_class: e.target.graduating_class.value,
                status: e.target.nysc.value, //i am..
                expected_month_of_service: e.target.expected_month_of_service.value
            }
        } else if (education_level_ == "Undergraduate") {
            education_level_value = {
                level: Session.get('education_level'),
                institution: $('#underg_institution').val().trim(),
                current_level: e.target.underg_current_year.value,
                expected_graduation_year: e.target.expected_graduation_year.value,
                cgpa: e.target.cgpa.value
            }
        } else if (education_level_ == "Pre-University") {
            education_level_value = {
                level: Session.get('education_level'),
                school: e.target.preuni_school.value,
                current_year: e.target.preuni_current_year.value
            }
        }

        var setUp = {
            image: Session.get('imageUrl'),
            gender: e.target.gender.value,
            date_of_birth: e.target.date_of_birth.value,
            im: e.target.im.value,
            current_city: e.target.current_city.value,
            current_city2: e.target.current_city2.value,
            education_level: education_level_value,
            preferences: {
                preferred_industries: newPrefArr,
                work_type: Session.get('work_types'),
                looking_for: Session.get('looking_for')
            }

        }
        console.log(setUp);
        //return false;

        Meteor.call('setUp', Meteor.userId(), setUp, function (error, response) {
            if (error) {
                toastr.error(error.reason, 'Error')
                return false
            }
            Router.go('/dashboard');
            toastr.success('Congrats! Your Set Up is complete.');
            $('.profile-card-value > .label:nth-child(1)').addClass('label-primary')
            $('.profile-card-value > .label:nth-child(2)').addClass('label-danger')
            $('.profile-card-value > .label:nth-child(3)').addClass('label-success')
            $('.profile-card-value > .label:nth-child(4)').addClass('label-info')
        })
        return false;
    }
});

Template.setupModal.onRendered(function () {
    $('#my-datepicker').datepicker();
    $('#underg_institution').select2();
    $('#grad_institution').select2();

    //automatically set education level
    var education_level = $('input:radio[name=education_level]:checked').val();
    Session.set('education_level', education_level);

    Session.set('pref_industries', []);
    Session.set('work_types', []);
    Session.set('looking_for', []);

})
