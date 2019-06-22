module.exports = {
  friendlyName: 'Health Check',
  description: 'Health check endpoint',
  exits: {
    success: {
      statusCode: 200,
      friendlyName: 'Health check response.',
      description: 'Should return 200 OK.',
      outputExample: {
        'message': 'OK'
      },
    },
  },
  fn: async function (_, exits) {

    return exits.success();
  }
};
