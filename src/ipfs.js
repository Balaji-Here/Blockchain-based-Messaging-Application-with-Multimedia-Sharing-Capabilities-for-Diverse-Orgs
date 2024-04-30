const ipfsClient = require('ipfs-http-client');
const projectId = 'My First Key';
const projectSecret = 'CGOjT35ti38Ys2B5xkI7Eofxz5hM8gWw57ABSFIJ5WIUOd8ptZbjdw';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});