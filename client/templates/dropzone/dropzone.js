Template.dropzoneMi.events({
    'dropped #dropzone': function(e){
        console.log('Uploaded')
        //alert('dropped');
        FS.Utility.eachFile(e, function(file){
            var newFile = new FS.File(file);
            Images.insert(newFile, function(err, result){
                if(err){
                    FlashMessages.sendError('There was an issue with the upload');
                    alert('error')
                }else{
                    Session.set('imageId', result._id);
                    toastr.success('image Uploaded')
                    //Modal.show('addinfo');
                    var imageUrl = '/cfs/files/Images/'+result._id;
                    console.log('/cfs/files/Images/'+result._id);
                    $('#image-url').val(imageUrl);
                }
            })
        })
    }
})
