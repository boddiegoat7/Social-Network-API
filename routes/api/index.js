const router = require("express").Router();
const thoughtsRoutes = require("./thoughts-routes");

router.use("/api", thoughtsRoutes);


module.exports = router;
