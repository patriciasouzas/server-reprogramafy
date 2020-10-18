const express = require("express")
const router = express.Router()
const controller = require("../controllers/musicsController")

router.get("/musicas", controller.getMusics)
router.get("/musicas/:id", controller.getMusicsById)
router.get("/artistas", controller.getArtists)

module.exports = router