import express from "express";
import { getMovies, getCountMovies }  from "../controllers/movies.controller";

const router = express.Router();

router.get("/movies", getMovies);
router.get("/movies/count", getCountMovies);

export default router;