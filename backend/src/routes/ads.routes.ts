import express from "express";
import { delAds40, getAds, getAdsVille, updateAdsO }  from "../controllers/ads.controller";

const router = express.Router();

router.get("/ads", getAds);
router.get("/ads/ville/:name", getAdsVille);

router.delete("/ads/price/:myprice", delAds40);

router.put("/ads/mydate", updateAdsO);

export default router;