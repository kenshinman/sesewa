Template.registerHelper('thisYear', function(){
    return new Date().getFullYear();
})

Template.registerHelper('fromThisYear', function(year){
    var thisYear = new Date().getFullYear(),
        years = [];
    for(var year = thisYear; year <= thisYear+10; year++){
        years.push(year)
    }

    return years;
});

Template.registerHelper('beforeThisYear', function(year){
    var thisYear = new Date().getFullYear(),
        years = [];
    for(var year = (thisYear - 10); year <= thisYear; year++){
        years.push(year);
    }
    //console.log(years);
    return years;
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format("ddd Do MMM, YYYY");
});

Template.registerHelper('fromNow', function(date) {
  return moment(date).fromNow();
});
