const uuid = require('uuid/v4');

module.exports = {
    inputs: {
        id:           { type:'string', required:true, isUUID:true, unique:true },
        name:         { type:'string', required:true },
        photo_url:    { type:'string', required:true },
        description:  { type:'string', required:true },
        period_alive: { type:'string' },
        category:     { type:'string',required: true,
                        isIn: ['pioneer', 'unsung_hero', 'modern'] }
    },
    exits: {
        success:  { statusCode: 201 },
    },

    fn: async function(inputs, exits)  {
        await Heroine.create({
            ...inputs,
            id: uuid()
        });

        return exits.success();
    }
}