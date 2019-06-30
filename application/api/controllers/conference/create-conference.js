const uuid = require('uuid/v4');

module.exports = {
    inputs: {
        id:           { type:'string', required:true, isUUID:true, unique:true },
        name:         { type:'string', required:true, unique:true },
        location:     { type:'string', required:true },
        link:         { type:'string' }
    },
    exits: {
        success:  { statusCode: 201 },
    },

    fn: async function(inputs, exits)  {
        await Conference.create({
            ...inputs,
            id: uuid()
        });

        return exits.success();
    }
}