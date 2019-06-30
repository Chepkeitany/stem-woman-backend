/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /health':             { action: 'health/index' },
  'GET /scholarships':       { action: 'scholarship/view-scholarships' },
  'GET /conferences':        { action: 'conference/view-conferences' },
  'GET /heroines':           { action: 'heroine/view-heroines' },
  'GET /mentors':            { action: 'mentor/view-mentors' },
  'GET /mentor':             { action: 'mentor/view-mentor' },
  'POST /conference':        { action: 'conference/create-conference'},
  'POST /heroine':           { action: 'heroine/create-heroine'},
  'POST /mentor':            { action: 'mentor/create-mentor'},
  'POST /scholarship':       { action: 'scholarship/create-scholarship'},
  'POST /user':              { action: 'user/create-user' },




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
