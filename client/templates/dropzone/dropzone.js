Template.dropzoneMi.events({
    'dropped #dropzone': function(e){
        console.log('Uploaded')
        //alert('dropped');
        if (e.originalEvent.dataTransfer) {
            if (e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                /*UPLOAD FILES HERE*/
               var file = e.originalEvent.dataTransfer.files[0];
            }

            if(file){
                fsFile = new FS.File(file);

                Images.insert(fsFile, function(err, result){
                    if(err){
                        throw new Meteor.Error(err);
                    }else{

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

                    }
                });
            }
        }


       /* FS.Utility.eachFile(e, function(file){
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
        })*/
    },

    'change .fileInput': function(e){
        //console.log('Uploaded')

        var file = e.currentTarget.files[0];

        if(file){
                fsFile = new FS.File(file);

                Images.insert(fsFile, function(err, result){
                    if(err){
                        throw new Meteor.Error(err);
                    }else{

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

                    }
                });
            }

        /*FS.Utility.eachFile(e, function(file){
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
        })*/
    }
})
