import express from "express";
import { get2Categorie, getAveragePrice, getCategorie, getStartingLetterCategorie}  from "../controllers/category.controller";

const router = express.Router();

router.get("/:name", getCategorie);
router.get("/v&v", get2Categorie);
router.get("/average/:categorieName", getAveragePrice);
router.get("/startingWith/:letter", getStartingLetterCategorie);

export default router;