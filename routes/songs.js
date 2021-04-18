/* The Artist Routes: (150 points total) */
// Step 1 (25 points): Require the correct controller actions
const {
  index, show, create, update, destroy
} = require('../controllers/songs');

// Step 2 (125 points): Using the most semantically coorect HTTP methods,
// add the correct 5 routes for the above 5 actions.
// NOTE: There's no authentication, so make sure you don't accidently
// include the middleware in your statements!
module.exports = router => {

  router.get('/songs', index);
  router.get('/songs/:id', show);
  router.post('/songs', create);
  router.put('/songs', update);
  router.delete('/songs', destroy);

  return router;
};