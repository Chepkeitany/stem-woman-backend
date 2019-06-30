const uuid = require('uuid/v4');

module.exports = {
    inputs: {
      name:           { type:'string', required:true },
      email_address:  { type:'string', required:true },
    },

    exits: {
        duplicate:  { statusCode: 409 },
        success:    { statusCode: 201 },
    },

    fn: async function (inputs, exits) {
        const { email_address } = inputs;
        const duplicateUser = await User.findOne({ email_address });

        if (duplicateUser) {
            return exits.duplicate();
        }

        await User.create({
            ...inputs,
            id: uuid()
        });

        return exits.success();
    }


}