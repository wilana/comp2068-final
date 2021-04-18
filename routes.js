module.exports = router => {
  require('./routes/artists')(router);
  require('./routes/songs')(router);

  return router;
};