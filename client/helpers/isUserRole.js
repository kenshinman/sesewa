Template.registerHelper('isUserRole', function(userId, userRole){
    if(Roles.userIsInRole(userId, userRole)){
        return true;
    }else{
        return false;
    }
});
