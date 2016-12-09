Template.uploadedFiles.helpers({
    uploadedFile: function () {
        let theImages = myImages.find({
            userId: Meteor.userId()
        }).fetch();

        let imgObj = theImages[theImages.length - 1];
        let mainImg = imgObj._downloadRoute + '/' + imgObj._collectionName + '/' + imgObj._id + '/original/' + imgObj._id + '.' + imgObj.extension;
        let imgData = {
            mainObj: imgObj,
            imgUrl: mainImg
        };

        Session.set('imgDetails', imgData);
        return mainImg;
    }
});

Template.uploadForm.onCreated(function () {
    this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
    currentUpload: function () {
        return Template.instance().currentUpload.get();
    }
});

Template.uploadForm.events({
    'change #fileInput': function (e, template) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            // We upload only one file, in case
            // there was multiple files selected
            var file = e.currentTarget.files[0];
            if (file) {
                var uploadInstance = myImages.insert({
                    file: file,
                    streams: 'dynamic',
                    chunkSize: 'dynamic'
                }, false);

                uploadInstance.on('start', function () {
                    template.currentUpload.set(this);
                });

                uploadInstance.on('end', function (error, fileObj) {
                    if (error) {
                        alert('Error during upload: ' + error.reason);
                    } else {
                        //alert('File "' + fileObj.name + '" successfully uploaded');
                        toastr.success('Image Uploaded', 'Success!')
                    }
                    template.currentUpload.set(false);
                });

                uploadInstance.start();
            }
                setTimeout(function(){
                    $('#dropzone').hide();
                    $('#uploaded-image').show();
                }, 2000)
        }
    },
    'dropped #dropzone': function (e, template) {
        //console.log(e);
        // We upload only one file, in case
        // there was multiple files selected

        if (e.originalEvent.dataTransfer) {
            if (e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                /*UPLOAD FILES HERE*/
               var file = e.originalEvent.dataTransfer.files[0];
            }


            //var file = e.currentTarget.files[0];
            if (file) {
                var uploadInstance = myImages.insert({
                    file: file,
                    streams: 'dynamic',
                    chunkSize: 'dynamic'
                }, false);

                uploadInstance.on('start', function () {
                    template.currentUpload.set(this);
                });

                uploadInstance.on('end', function (error, fileObj) {
                    if (error) {
                        alert('Error during upload: ' + error.reason);
                    } else {
                        //alert('File "' + fileObj.name + '" successfully uploaded');
                        toastr.success('Image Uploaded', 'Success!')
                    }
                    template.currentUpload.set(false);
                });

                uploadInstance.start();
            }
            //alert('dropped');
            $('#uploaded-image').show();
        }
    },

});
