Images = new FS.Collection('Images', {
    stores: [new FS.Store.GridFS('Images')],
    filter: {
        allow: {
            contentTypes: ['image/*']
        },
        onInvalid: function(message){
            toastr.error(message, 'Only Images')
        }
    }
});

Images.allow({
    insert: function(){return true;},
    update: function(){return true;},
    download: function(){return true;}
});
