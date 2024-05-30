import { Request, Response } from "express";
import db from "../db/sqliteConfig";

// Afficher les annonces de la catégorie “vêtement”
const getCategorie = (req: Request, res: Response): void => {
      const selectedCategory: string = req.params.name;
      const stmt = db.prepare("Select * FROM good_corner gc inner join categorie c on gc.categorie_id = c.id where c.name = ? ");
      stmt.all(selectedCategory, (err, rows) => {
            if (err) {
                  console.error("Database error:", err);
                  res.status(500).send("Internal Server Error");
                  return;
              }
              res.status(200).send(rows);
          });
      stmt.finalize();
}

// Afficher les annonces des catégories “vêtement” et “voiture”
const get2Categorie = (req: Request, res: Response): void => {
      const selectedCategory1: string = "vêtement";
      const selectedCategory2: string = "voiture";
      const stmt = db.prepare("SELECT * FROM good_corner gc INNER JOIN categorie c ON gc.categorie_id = c.id WHERE c.name IN (?, ?)");
      stmt.all([selectedCategory1, selectedCategory2], (err, rows) => {
            if (err) {
                  console.error("Database error:", err);
                  res.status(500).send("Internal Server Error");
                  return;
              }
              res.status(200).send(rows);
          });
      stmt.finalize();
}
// Afficher le prix moyen des annonces de la catégorie “autre”
const getAveragePrice = (req: Request, res: Response): void => {
      const name: string = req.params.categorieName;
      const stmt = db.prepare("SELECT avg(price) as averagePrice FROM good_corner gc INNER JOIN categorie c ON gc.categorie_id = c.id WHERE c.name = ?");
      stmt.all([name], (err, rows: any[]) => {
            if (err) {
                  console.error("Database error:", err);
                  res.status(500).send("Internal Server Error");
                  return;
              }
              const averagePrice = rows[0].averagePrice;
              res.status(200).send("Average price = " + averagePrice);
          });
      stmt.finalize();
}
// Afficher les annonces des catégories dont le nom commence par un “v”
const getStartingLetterCategorie = (req: Request, res: Response): void => {
      const letterCategory: string = req.params.letter;
      const stmt = db.prepare("Select * FROM good_corner gc inner join categorie c on gc.categorie_id = c.id where c.name LIKE ?");
      stmt.all([`${letterCategory}%`], (err, rows) => {
            if (err) {
                  console.error("Database error:", err);
                  res.status(500).send("Internal Server Error");
                  return;
              }
              res.status(200).send(rows);
          });
      stmt.finalize();
}
// Créer un endpoint qui permet d’ajouter une annonce et de créer sa catégorie à la volée, tout cela dans une transaction


export { getCategorie, get2Categorie, getAveragePrice, getStartingLetterCategorie};