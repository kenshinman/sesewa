//CVs = new Mongo.Collection('cvs');

CVs = new FS.Collection('CVs', {
    stores: [new FS.Store.GridFS('CVc')],
    filter: {
        allow: {
            contentTypes: [
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ]
        },
        onInvalid: function(message){
            toastr.error(message, 'Only Images')
        }
    }
});

ApplicationData = new Mongo.Collection('applicationdata');

CVs.allow({
    insert: function(){return true;},
    update: function(userId, doc, fields, modifier){
        if (userId && doc.userId === userId) {
            return true;
        }
    },
    //download: function(){return true;}
});
