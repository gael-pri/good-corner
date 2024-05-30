import express from "express";
import { delAds40, getAds, getAdsVille, updateAdsO }  from "../controllers/ads.controller";

const router = express.Router();

router.get("/", getAds);
router.get("/ville/:name", getAdsVille);

router.delete("/price/:myprice", delAds40);

router.put("/mydate", updateAdsO);

export default router;