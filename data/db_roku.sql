-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- 생성 시간: 18-11-29 08:01
-- 서버 버전: 5.7.21
-- PHP 버전: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `db_roku`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_genre`
--

DROP TABLE IF EXISTS `tbl_genre`;
CREATE TABLE IF NOT EXISTS `tbl_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(125) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Drama'),
(2, 'Romance'),
(3, 'Comedy'),
(4, 'Action'),
(5, 'Crime'),
(6, 'Family'),
(7, 'Fantasy'),
(8, 'Adventure'),
(9, 'Animation'),
(10, 'Sci-fi'),
(11, 'Horror'),
(12, 'Thriller'),
(13, 'War'),
(14, 'Mystery'),
(15, 'Documentary');

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_videos`
--

DROP TABLE IF EXISTS `tbl_videos`;
CREATE TABLE IF NOT EXISTS `tbl_videos` (
  `videos_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `videos_name` varchar(125) NOT NULL,
  `videos_author` varchar(100) NOT NULL,
  `videos_desc` text NOT NULL,
  `videos_duration` varchar(25) NOT NULL,
  `videos_uploadDate` varchar(25) NOT NULL,
  `videos_url` varchar(255) NOT NULL,
  `videos_cover` varchar(75) NOT NULL,
  `videos_rating` tinyint(4) UNSIGNED NOT NULL,
  `videos_visits` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`videos_id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_videos`
--

INSERT INTO `tbl_videos` (`videos_id`, `videos_name`, `videos_author`, `videos_desc`, `videos_duration`, `videos_uploadDate`, `videos_url`, `videos_cover`, `videos_rating`, `videos_visits`) VALUES
(1, 'Venom', 'Jeff Pinkner', 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego “Venom” to save his life.', '112 min', '2018', 'venom.mp4', 'venom.jpg', 7, 22950),
(2, 'Skyscraper', 'Rawson Marshall Thurber', 'Framed and on the run, a former FBI agent must save his family from a blazing fire in the world\'s tallest building.', '102 min', ' 2018', 'skyscraper.mp4', 'skyscraper.jpg', 8, 14119),
(3, 'Snitch', 'Justin Haythe', 'Construction company owner John Matthews learns that his estranged son, Jason, has been arrested for drug trafficking. Facing an unjust prison sentence for a first time offender courtesy of mandatory minimum sentence laws, Jason has nothing to offer for leniency in good conscience. Desperately, John convinces the DEA and the opportunistic DA Joanne Keeghan to let him go undercover to help make arrests big enough to free his son in return. With the unwitting help of an ex-con employee, John enters the narcotics underworld where every move could be his last in an operation that will demand all his resources, wits and courage to survive.', '112 min', '2013', 'snitch.mp4', 'snitch.jpg', 7, 72413),
(4, 'SuperFly', 'Alex Tse', 'Career criminal Youngblood Priest wants out of the Atlanta drug scene, but as he ramps up sales, one little slip up threatens to bring the whole operation down before he can make his exit.', '116 min', '2018', 'SuperFly.mp4', 'SuperFly.jpg', 5, 1275),
(5, 'Dragnet', 'Jack Webb', 'The equally-straight-laced and \"by the book\" nephew of Joe Friday must work with his more laid-back partner to solve a mystery and save \"The Virgin\" Connie Swail...', '106 min', '2011', 'Dragnet.mp4', 'Dragnet.jpg', 6, 28394),
(6, 'Toy Story 2', 'John Lasseter', 'Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al\'s Toy Barn kidnaps Woody. Andy\'s toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.', '92 min', '1999', 'toyStory2.mp4', 'toyStory2.jpg', 8, 4399672),
(7, 'Return Of The Killer Tomatoes!', 'John De Bello', 'Crazy old Professor Gangreen has developed a way to make tomatoes look human for a second invasion.', '98 min', '1998', 'returnkiller.mp4', 'returnkiller.jpg', 8, 39471),
(8, 'Money Monster', 'Alan Di Fiore', 'Financial TV host Lee Gates and his producer Patty are put in an extreme situation when an irate investor takes over their studio.', '98 min', '2016', 'MoneyMonster.mp4', 'MoneyMonster.jpg', 8, 51386),
(9, 'Chosen', 'Chaim Potok', 'An unassuming young lawyer leads a fight against the Nazis near the end of the Second World War.', '90 min', '2016', 'chosen.mp4', 'chosen.jpg', 4, 3214),
(10, 'The Human Centipede', 'Tom Six', 'During a stopover in Germany in the middle of a carefree road trip through Europe, two American girls find themselves alone at night when their car breaks down in the woods. Searching for help at a nearby villa, they are wooed into the clutches of a deranged retired surgeon who explains his mad scientific vision to his captives\' utter horror. They are to be the subjects of his sick lifetime fantasy: to be the first to connect people, one to the next, and in doing so bring to life \"the human centipede.\"', '92 min', '2009', 'theHumanCent.mp4', 'theHumanCent.jpg', 10, 89465),
(11, 'Julia', 'Alvin Sargent', 'After suffering a brutal trauma, Julia uses an unorthodox form of therapy to restore herself.', '95 min', '2014', 'julia.mp4', 'julia.jpg', 5, 5312),
(12, 'Crimson Peak', 'Guillermp del Toro', 'In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathes, bleeds… and remembers.', '110 min', '2015', 'CrimsonPeak.mp4', 'CrimsonPeak.jpg', 8, 87435),
(13, 'Darkest Day', 'Dan Rickard', 'Dan wakes up on a beach with no memory. He discovers an empty city ravaged by a deadly virus. After befriending a small group of survivors it soon becomes clear the army are hunting him down, and the group are forced on a dangerous journey to escape.', '90 min', '2015', 'darkest.mp4', 'darkest.jpg', 9, 88488),
(14, 'X-Men: Apocalypse', 'Bryan Singer', 'After the re-emergence of the world\'s first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.', '144 min', '2016', 'apocalypse.mp4', 'apocalypse.jpg', 7, 20166),
(15, 'Tiny Giants 3D', 'Mark Brownlow', 'A short about what happens under and around us. A chipmunk and a small mouse go on an adventure; they grow and learn about life and its obstacles.', '44 min', '2014', 'tinyGiants.mp4', 'tinyGiants.jpg', 8, 7981),
(16, 'Interrogation', 'Adam Rodin', 'After the FBI receives a threat that endangers the entire city, an interrogator (Copeland) and an I.T. specialist (Perry) are plunged into a series of mind games with a criminal mastermind, desperately racing against time to uncover the villain\'s true agenda as they fight to protect thousands of lives. Copeland and Perry deliver a knockout blow in this electrifying thriller that crackles with edge-of-your-seat suspense.', '93 min', '2016', 'interro.mp4', 'interro.jpg', 6, 57874),
(17, 'Mr. Troop Mom', 'Thomas Ian Griffith', 'Public Defender Eddie is a widower with a 13 year-old daughter, Naomi. A classic workaholic, Eddie has been M.I.A. for most of Naomi\'s big moments. But when an unfortunately timed accident gives Eddie the opportunity to become the \"Team Mom\" for the Killer Bees, Naomi\'s team in the Spring Action Classic at camp Hulka\'s Rock, he grabs it.', '84 min', '2009', 'mrTroop.mp4', 'mrTroop.jpg', 4, 3211),
(18, 'Warcraft', 'Chris Metzen', 'The peaceful realm of Azeroth stands on the brink of war as its civilization faces a fearsome race of invaders: orc warriors fleeing their dying home to colonize another. As a portal opens to connect the two worlds, one army faces destruction and the other faces extinction. From opposing sides, two heroes are set on a collision course that will decide the fate of their family, their people, and their home', '123 min', '2016', 'warcraft.mp4', 'warcraft.jpg', 6, 315666),
(19, 'Pray For Death', 'James Booth', 'Akira Saito, a Japanese businessman lives in Tokyo with his Japanese-American wife Aiko and their children, Takeshi and Tomoya. When the family has a chance to move to the United States so that Aiko can teach the children about their American heritage, they pack up and head for Houston, Texas and run a restaurant. This is where the trouble begins....', '92 min', '1985', 'pray.mp4', 'pray.jpg', 3, 1651),
(20, 'Ratchet & Clank', 'Kevin Munroe', 'Ratchet and Clank tells the story of two unlikely heroes as they struggle to stop a vile alien named Chairman Drek from destroying every planet in the Solana Galaxy. When the two stumble upon a dangerous weapon capable of destroying entire planets, they must join forces with a team of colorful heroes called The Galactic Rangers in order to save the galaxy. Along the way they\'ll learn about heroism, friendship, and the importance of discovering one\'s own identity.', '94 min', '2016', 'ratchet.mp4', 'ratchet.jpg', 6, 12154),
(21, 'Larry Gaye: Renegade Male Flight Attendant', 'Mike Sikowitz', 'Comedy - A self-anointed \'renegade\' male flight attendant must save the day when the airline he works for tries to eliminate flight attendants as a cost-cutting measure. - Stanley Tucci, Rebecca Romijn, Jayma Mays', '99 min', '2015', 'larry.mp4', 'larry.jpg', 9, 42771),
(22, 'Puerto Ricans In Paris', 'Ian Edelman', 'Two Puerto Rican NYPD detectives head to Paris to track down a stolen handbag.', '82 min', '2015', 'puerto.mp4', 'puerto.jpg', 3, 11211),
(23, 'War', 'Philip G. Atwell', 'FBI agent Jack Crawford is out for revenge when his partner is killed and all clues point to the mysterious assassin Rogue. But when Rogue turns up years later to take care of some unfinished business, he triggers a violent clash of rival gangs. Will the truth come out before it\'s too late? And when the dust settles, who will remain standing?', '103 min', '2007', 'war.mp4', 'war.jpg', 2, 1113),
(24, 'Sinister Squad', 'Jeremy M. Inman', 'When a supernatural cult threatens Earth, Alice must assemble a team of fairy tale villains to face the literal forces of Death.', '90 min', '2016', 'sinster.mp4', 'sinster.jpg', 2, 9874),
(25, 'Tell', 'R. Luna', '\r\nEthan Tell is a small time crook who makes a big-time score when he steals 1 million dollars. Ironically, his life radically changes for the worst when he discovers that stealing the money was the easy part and he now must keep his partner, his wife, his parole officer, and two corrupt detectives from stealing it from him.', '89 min', '2014', 'tell.mp4', 'tell.jpg', 8, 74441),
(26, 'Marvel\'s Avengers', 'Joss Whedon', 'When Thor\'s evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D.', '143 min', '2012', 'avengers.mp4', 'avengers.jpg', 10, 915664);

-- --------------------------------------------------------

--
-- 테이블 구조 `tbl_vid_genre`
--

DROP TABLE IF EXISTS `tbl_vid_genre`;
CREATE TABLE IF NOT EXISTS `tbl_vid_genre` (
  `vid_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `videos_id` mediumint(9) NOT NULL,
  `genre_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`vid_genre_id`)
) ENGINE=MyISAM AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- 테이블의 덤프 데이터 `tbl_vid_genre`
--

INSERT INTO `tbl_vid_genre` (`vid_genre_id`, `videos_id`, `genre_id`) VALUES
(1, 1, 4),
(2, 1, 12),
(3, 1, 11),
(4, 2, 12),
(5, 2, 4),
(6, 3, 4),
(7, 3, 12),
(8, 4, 4),
(9, 4, 12),
(10, 5, 3),
(11, 5, 5),
(12, 6, 9),
(13, 6, 3),
(14, 6, 8),
(15, 7, 3),
(16, 7, 10),
(17, 8, 4),
(18, 8, 1),
(19, 9, 13),
(20, 9, 4),
(21, 10, 11),
(22, 11, 11),
(23, 12, 11),
(24, 12, 14),
(25, 12, 1),
(26, 13, 8),
(27, 14, 10),
(28, 14, 4),
(29, 14, 7),
(30, 15, 6),
(31, 15, 15),
(32, 16, 4),
(33, 16, 12),
(34, 17, 3),
(35, 17, 8),
(36, 18, 7),
(37, 19, 4),
(38, 19, 12),
(39, 20, 6),
(40, 21, 3),
(41, 22, 3),
(42, 22, 4),
(43, 23, 4),
(44, 23, 5),
(45, 24, 4),
(46, 25, 4),
(47, 25, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
