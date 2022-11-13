const router = require('express').Router();

const thoughtsRoutes = require("./api/thoughts-routes");

router.use("/thoughts", thoughtsRoutes);
  
router.use((req, res) => {
  res.status(404).send('<h1> 404 Error!</h1>');
});

module.exports = router;
