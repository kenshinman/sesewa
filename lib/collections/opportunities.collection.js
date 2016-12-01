Opportunities = new Mongo.Collection('opportunities');

var opportunitiesSchema = new SimpleSchema({
    title: {
        type: String,
        optional: false,
        label: "Job Title"
    },
    slug: {
        type: String,
        optional: false
    },

    description: {
        type: String,
        optional: false,
        label: "Job Description"
    },
    requirements: {
        type: String,
        optional: false,
        label: "Job Description"
    },
    opportunity_type: {
      type: String,
        optional: false
    },
    location: {
      type: String,
        optional: false
    },
    expiersAt: {
        type: Date,
        optional: true,
        label: "Offer Valid Till"
    },
    duration: {
        type: String,
        optional: true,
        label: "How long is the Job?"
    },
    salary: {
        type: String,
        optional: true,
        label: "Salary Amount"
    },
    createdAt: {
        type: Date,
        optional: true,
    },
    owner: {
        type: Object,
        optional: false
    },
    "owner.image":{
        type: String,
        optional: false
    },
    "owner.username":{
        type: String,
        optional: false
    },
    applicants: {
        type: Array,
        optional: true
    },
    "applicants.$": {
        type: Object
    }

})

Opportunities.attachSchema(opportunitiesSchema)

Opportunities.allow({
    insert: function(){return true;},
    update: function(userId, doc, fields, modifier){
        if (userId && doc.userId === userId) {
            return true;
        }
    },
    //download: function(){return true;}
});
