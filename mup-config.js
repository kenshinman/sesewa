module.exports = {
    servers: {
        one: {
            "host": "104.131.102.134",
            "username": 'root',
            "pem": "C:/Users/KenshinMan.DESKTOP-PU4PNV5/.ssh/id_rsa",
            opts: {
                port: 22,
            },
            // password:
            // or leave blank for authenticate from ssh-agent
        }
    },

    meteor: {
        name: 'sesewa',
        path: 'C:/projects/meteor/sesewa',
        volumes: { // lets you add docker volumes (optional)
            "/var/uploads": "/var/uploads", // passed as '-v /host/path:/container/path' to the docker run command
            //"/second/host/path": "/second/container/path"
        },
        docker: {
            //image: 'kadirahq/meteord', // (optional)
            image: 'abernix/meteord:base', // use this image if using Meteor 1.4+
        },
        servers: {
            one: {}
        },
        buildOptions: {
            serverOnly: false,
        },
        env: {
            "PORT": 80,
            "ROOT_URL": "http://104.131.102.134/"
        },

        //dockerImage: 'kadirahq/meteord'
        deployCheckWaitTime: 60
    }
};
