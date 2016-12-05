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
                    //Modal.show('addinfo');
                    var imageUrl = '/cfs/files/Images/'+result._id;
                    Session.set('imageUrl', imageUrl);

                    console.log(imageUrl);

                    $('#dropzone').hide();
                    $('.spinner').show();
                    setTimeout(function(){
                        $('.spinner').hide();
                        $('#uploaded-image').attr('src', imageUrl);
                        $('#uploaded-image').show();
                        toastr.success('image Uploaded');
                    }, 3000);

                    $('#image-url').val(imageUrl);
                }
            })
        })
    },

    'change .fileInput': function(e){
        console.log('Uploaded')

        FS.Utility.eachFile(e, function(file){
            var newFile = new FS.File(file);
            Images.insert(newFile, function(err, result){
                if(err){
                    FlashMessages.sendError('There was an issue with the upload');
                    alert('error')
                }else{
                    //Modal.show('addinfo');
                    var imageUrl = '/cfs/files/Images/'+result._id;
                    Session.set('imageUrl', imageUrl);

                    console.log(imageUrl);

                    $('#dropzone').hide();
                    $('.spinner').show();
                    setTimeout(function(){
                        $('.spinner').hide();
                        $('#uploaded-image').attr('src', imageUrl);
                        $('#uploaded-image').show();
                        toastr.success('image Uploaded');
                    }, 1000);

                    $('#image-url').val(imageUrl);
                }
            })
        })
    }
})
