import fs from "node:fs";
import { Request, Response } from "express";

import db from "../db/sqliteConfig";

// Afficher toutes les annonces
const getAds = (req: Request, res: Response): void => {
      db.all("SELECT * FROM good_corner", (err, rows) => {
              res.send(rows);
      })
}

// Afficher toutes les annonces d'une ville au choix
const getAdsVille = (req: Request, res: Response): void => {
      const ville: string = req.params.name;
      const stmt = db.prepare("SELECT * FROM good_corner where location = ?");
      stmt.all(ville, (err, rows) => {
            res.send(rows);
      })
      stmt.finalize();
}

// Supprimer les annonces avec un prix supérieur à 40€
const delAds40 = (req: Request, res: Response): void => {
      const price: number = parseFloat(req.params.myprice);
      const stmt = db.prepare("Delete FROM good_corner where price > ?");
      stmt.run(price, function(err) {
            if (err) {
                  console.error("Database error:", err);
                  res.status(500).send("Internal Server Error");
                  return;
              }
      
              res.status(200).send(`Deleted ${this.changes} ads with price greater than ${price}€`);
          });
      stmt.finalize();
}

// Mettre à jour les annonces du 1er Septembre avec un prix à 0€
const updateAdsO = (req: Request, res: Response): void => {
      const dateAds: string = req.params.mydate;
      const stmt = db.prepare("update FROM good_corner set price = 0 where createdAt = ?");
      stmt.all(dateAds, function(err) {
            if (err) {
                  console.error("Database error:", err);
                  res.status(500).send("Internal Server Error");
                  return;
              }
      
              res.status(200).send(`updated ${this.changes} ads from date ${dateAds} to 0€`);
          });
      stmt.finalize();
}
// Afficher la moyenne des prix des annonces de la ville de Paris
// Créer une nouvelle annonce
// BONUS : Afficher la moyenne des prix des annonces par ville
// BONUS 2 : Modifier le endpoint de suppression des annonces avec un prix supérieur pour qu’il prenne en paramètre de body de delete  le prix plancher

// Insérer ces catégories :
            // vêtement
            // voiture
            // autre
// Ajouter une catégorie à chaque annonce
// Afficher les annonces de la catégorie “vêtement”
// Afficher les annonces des catégories “vêtement” et “voiture”
// Afficher le prix moyen des annonces de la catégorie “autre”
// Afficher les annonces des catégories dont le nom commence par un “v”
// Créer un endpoint qui permet d’ajouter une annonce et de créer sa catégorie à la volée, tout cela dans une transaction


export { getAds, getAdsVille, delAds40,updateAdsO };