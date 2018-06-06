Template.registerHelper('isGraduate', function(education_level){
    if(education_level.level == "Graduate"){
        return true;
    }
});

Template.registerHelper('isUnderGraduate', function(education_level){
    if(education_level.level == "Undergraduate"){
        return true;
    }
});

Template.registerHelper('isPreUniversity', function(education_level){
    if(education_level.level == "Pre-University"){
        return true;
    }
});
