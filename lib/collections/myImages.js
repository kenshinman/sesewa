this.myImages = new Meteor.Files({
    debug: true,
    storagePath: function (){
        //return '/projects/meteor/sesewa/uploads'
        return '/var/uploads/sesewa/';
    } ,
    collectionName: 'myImages',
    allowClientCode: true, // Disallow remove files from Client
    onBeforeUpload: function (file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024 * 1024 * 10 && /png|jpg|jpeg/i.test(file.extension)) {
            return true;
        } else {
            return 'Please upload image, with size equal or less than 10MB';
        }
    }
});



if (Meteor.isServer) {
    myImages.denyClient();
    Meteor.publish('files.images.all', function () {
        return myImages.find().cursor;
    });

} else {

    Meteor.subscribe('files.images.all');

}

/*this.myImages.allow({
    insert: function(){return true;},
    update: function(){return true;},
    //download: function(){return true;}
});*/
