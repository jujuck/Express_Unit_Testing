CREATE TABLE albums (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  picture VARCHAR(255),
  artist VARCHAR(255)
);


INSERT INTO albums
  (title, genre, picture, artist)
  VALUES
  ('Nevermind', "Grunge", "swimming_baby.png", "Nirvana"),
  ('Welcome to the cruel Worlg', "Rock", "smoking_man.png", "Ben Harper"),
  ('By The Way', "Rock", "Standing_man.png", "RHCP");

CREATE TABLE track (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    youtube_url VARCHAR(255),
    id_album INT NOT NULL,
    CONSTRAINT `fk_albumsid`
    FOREIGN KEY (`id_album`)
    REFERENCES `prep_checkpoint3_and_test`.`albums` (`id`)
);

INSERT INTO track
  (id, title, youtube_url, id_album)
  VALUES
  (1, 'Smells Like Teen Spirit', 'https://smellsliketeenspirit.nirvana.com', 1),
  (2, 'In Bloom', 'https://inbloom.nirvana.com', 1),
  (3, 'Come As You Are', 'https://comeasyouare.nirvana.com', 1),
  (4, 'The three of us', 'https://thethreeofus.benharper.com', 2),
  (5, 'Whipping Boy', 'https://whippingboy.benharper.com', 2),
  (6, 'Like a King', 'https://likeaking.benharper.com', 2),
  (7, 'By The Way', 'https://bytheway.RHCP.com', 3),
  (8, 'The zephyr song', 'https://thezephyrsong.RHCP.com', 3),
  (9, 'Throw away your television', 'https://throwawayyourtelevision.RHCP.com', 3);
