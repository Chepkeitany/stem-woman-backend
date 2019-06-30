const uuid = require('uuid/v4');

module.exports = {
  inputs: {
    available_timings: { type:'string' },
    description:       { type:'string', required:true },
    location:          { type:'string', required:true },
    name:              { type:'string', required:true },
    photo_url:         { type:'string', required:true },
    skills:            { type:'ref', columnType: 'text[]', required:true },
    timezone:          { type:'string', required:true },
    email_address:     { type:'string', required:true },
  },

  exits: {
    duplicate:  { statusCode: 409 },
    success:    { statusCode: 201 },
  },

  fn: async function (inputs, exits) {

    const { email_address } = inputs;
    const duplicateMentor = await User.findOne({ email_address });

    if (duplicateMentor) {
        return exits.duplicate({ message: "Duplicate mentor creation"});
    }

    await User.create({
      name: inputs.name,
      email_address: inputs.email_address,
      type: 'mentor',
      id: uuid()
    });

    await Mentor.create({
      ...inputs,
      id: uuid()
    });

    return exits.success();
  }
};
