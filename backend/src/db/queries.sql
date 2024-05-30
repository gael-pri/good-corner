Drop table if EXISTS good_corner;
Drop table if EXISTS categorie;

CREATE TABLE categorie (
  id integer PRIMARY KEY,
  name varchar(255) not null
);

INSERT INTO categorie (name) VALUES
('vêtement'),
('voiture'),
('autre');

CREATE TABLE good_corner (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  owner VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  picture VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  createdAt DATETIME NOT NULL,
  categorie_id int not NULL,
  FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);

INSERT INTO good_corner (title, description, owner, price, picture, location, createdAt,categorie_id) VALUES
('Appartement en centre-ville', 'Charmant appartement en plein cœur de Bordeaux, proche de toutes commodités.', 'Jean Dupont', 1200, 'appart1.jpg', 'Bordeaux', '2024-05-28 09:00:00',2),
('Studio moderne', 'Studio moderne et lumineux, idéal pour étudiant.', 'Marie Durand', 700, 'studio1.jpg', 'Bordeaux', '2024-05-28 09:30:00',2),
('Maison familiale', 'Grande maison familiale avec jardin et piscine.', 'Pierre Martin', 2500, 'maison1.jpg', 'Bordeaux', '2024-05-28 10:00:00',2),
('Chambre chez l habitant', 'Chambre meublée chez l habitant, quartier calme.', 'Lucie Bernard', 450, 'chambre1.jpg', 'Bordeaux', '2024-05-28 10:30:00',2),
('Loft spacieux', 'Loft spacieux et design, proche des transports en commun.', 'Antoine Lefevre', 1800, 'loft1.jpg', 'Bordeaux', '2024-05-28 11:00:00',2),
('Appartement haussmannien', 'Bel appartement haussmannien avec moulures et parquet.', 'Sophie Moreau', 2100, 'appart2.jpg', 'Paris', '2024-05-28 11:30:00',2),
('Studio cosy', 'Petit studio cosy, idéal pour jeune professionnel.', 'Julien Robert', 900, 'studio2.jpg', 'Paris', '2024-05-28 12:00:00',2),
('Maison de ville', 'Maison de ville avec jardin privatif, quartier tranquille.', 'Claire Dubois', 3200, 'maison2.jpg', 'Paris', '2024-05-28 12:30:00',1),
('Appartement avec vue', 'Appartement avec vue imprenable sur la Tour Eiffel.', 'Marc Lefebvre', 2600, 'appart3.jpg', 'Paris', '2024-05-28 13:00:00',1),
('Chambre étudiante', 'Chambre étudiante dans une résidence sécurisée.', 'Nathalie Laurent', 550, 'chambre2.jpg', 'Paris', '2024-05-28 13:30:00',1),
('T2 en centre-ville', 'Appartement T2 en plein centre de Lyon, proche des commerces.', 'Henri Simon', 1300, 'appart4.jpg', 'Lyon', '2024-05-28 14:00:00',1),
('Studio étudiant', 'Studio meublé, idéal pour étudiant, à proximité de l université.', 'Isabelle Mathieu', 600, 'studio3.jpg', 'Lyon', '2024-05-28 14:30:00',1),
('Maison avec terrasse', 'Maison avec grande terrasse et vue sur la colline de Fourvière.', 'Bertrand Michel', 2700, 'maison3.jpg', 'Lyon', '2024-05-28 15:00:00',1),
('Chambre chez l habitant', 'Chambre chez l habitant, quartier calme et verdoyant.', 'Laetitia Perrin', 500, 'chambre3.jpg', 'Lyon', '2024-05-28 15:30:00',1),
('Loft industriel', 'Loft de style industriel avec grandes baies vitrées.', 'Damien Girard', 1900, 'loft2.jpg', 'Lyon', '2024-05-28 16:00:00',3),
('Appartement rénové', 'Appartement entièrement rénové, proche des transports.', 'Camille Rousseau', 1400, 'appart5.jpg', 'Bordeaux', '2024-05-28 16:30:00',3),
('Studio ensoleillé', 'Studio lumineux, situé au dernier étage d un immeuble moderne.', 'Philippe Roy', 750, 'studio4.jpg', 'Bordeaux', '2024-05-28 17:00:00',3),
('Maison d architecte', 'Maison d architecte avec jardin et piscine, très moderne.', 'Véronique Leroy', 3000, 'maison4.jpg', 'Paris', '2024-05-28 17:30:00',3),
('Appartement familial', 'Grand appartement familial, proche des écoles et parcs.', 'Alain Fournier', 2400, 'appart6.jpg', 'Paris', '2024-05-28 18:00:00',3),
('Studio meublé', 'Studio meublé et équipé, idéal pour étudiant.', 'Sandrine Millet', 650, 'studio5.jpg', 'Lyon', '2024-05-28 18:30:00',3);
