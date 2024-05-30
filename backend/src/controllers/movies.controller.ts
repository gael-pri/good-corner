import fs from "node:fs";
import { Request, Response } from "express";

const csvContent: string = fs.readFileSync('./src/assets/movies.csv', {
    encoding: 'utf-8'
});

const lines: string[] = csvContent.split(/\n/);
const moviesLines: string[] = lines.slice(1);
const moviesCount: number = moviesLines.length;


const getMovies = (req: Request, res: Response): void => { 
    res.send({moviesLines});
}

const getCountMovies = (req: Request, res: Response): void => { 
    console.log("Nombre de films : ", `${moviesCount}`);
    res.send({moviesCount});
}

// let priceTotal: number = 0;
// for (const movieLine of moviesLines) {
//     const movieDataCells: string[] = movieLine.split(/;/);
//     const moviePrice: string = movieDataCells[3];
//     //console.log(movieDataCells[1] + " : " + moviePrice)

//     priceTotal += parseInt(moviePrice);
// }

export { getMovies, getCountMovies };