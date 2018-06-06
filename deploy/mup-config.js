module.exports = {
    servers: {
        one: {
            "host": "45.55.36.111",
            "username": 'root',
            "pem": "~/.ssh/id_rsa"
                // password:
                // or leave blank for authenticate from ssh-agent
        }
    },

    meteor: {
        name: 'sesewa',
        path: '../',
        volumes: { // lets you add docker volumes (optional)
            "/host/path": "/container/path", // passed as '-v /host/path:/container/path' to the docker run command
            "/second/host/path": "/second/container/path"
        },
        docker: {
            //image: 'kadirahq/meteord', // (optional)
            image: 'abernix/meteord:base', // use this image if using Meteor 1.4+
        },
        servers: {
            one: {}
        },
        buildOptions: {
            serverOnly: true,
        },
        env: {
            ROOT_URL: 'http://45.55.36.111/',
            //MONGO_URL: 'mongodb://localhost/meteor'
        },

        //dockerImage: 'kadirahq/meteord'
        deployCheckWaitTime: 60
    },

    mongo: {
        oplog: true,
        port: 27017,
        servers: {
            one: {},
        },
    },
};
