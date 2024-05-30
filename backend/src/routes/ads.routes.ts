import express from "express";
import { delAds40, getAds, getAdsVille, updateAdsO }  from "../controllers/ads.controller";
import { getCategorie }  from "../controllers/category.controller";
const router = express.Router();

router.get("/", getAds);
router.get("/ville/:name", getAdsVille);
router.delete("/price/:myprice", delAds40);
router.put("/mydate", updateAdsO);

router.get("/:name", getCategorie);

export default router;