const uuid = require('uuid/v4');

module.exports = {
    inputs: {
        id:           { type:'string', required:true, isUUID:true, unique:true },
        name:         { type:'string', required:true, unique:true },
        target_group: { type:'string', required:true },
        deadline:     { type:'string', required:true },
        link:         { type:'string' }
    },
    exits: {
        success:  { statusCode: 201 },
    },

    fn: async function(inputs, exits)  {
        await Scholarship.create({
            ...inputs,
            id: uuid()
        });

        return exits.success();
    }
}