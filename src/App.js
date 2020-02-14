import React,{Fragment, useState} from 'react';
import { Collapse, Button, CardBody, Card, Container, CardHeader } from 'reactstrap';


const App = () => {
	const [isOpen, setOpen] = useState(true);
	const [filmOpen, setFilmOpen] = useState(true);
	const [tvSession, setTvSession] = useState([{
		"name": "Dynasties - Season 1",
		"prices": {
		  "buy": 1299,
		  "rent": 499
		},
		"episodes": [
		  "Chimpanzee",
		  "Emperor Penguins",
		  "Lion",
		  "Painted Wolf",
		  "Tiger"
		],
		"description": "Dynasties is a documentary by Sir David Attenborough as he goes on a journey behind some of the most celebrated and endangered animals on the planet. Follow the stories of penguins, chimpanzees, lions, painted wolves, and tigers. "
	  },
	  {
		"name": "The Marvelous Mrs. Maisel - Season 1",
		"release": 2019,
		"prices": {
		  "buy": 2499,
		  "rent": 999
		},
		"episodes": [
		  "Pilot",
		  "Ya Shivu v Bolshom Dome Na Kholme",
		  "Because You Left",
		  "The Disappointment of the Dionne Quintuplets",
		  "Doink",
		  "Mrs. X at the Gaslight"
		],
		"description": "It's the late 1950s and Miriam 'Midge' Maisel has everything she has ever wanted -- the perfect husband, two kids and an elegant apartment on New York's Upper West Side. Her seemingly idyllic life takes a surprising turn when she discovers a hidden talent she didn't previously know she had -- stand-up comedy."
	  },
	  {
		"name": "Game of Thrones",
		"release": 2014,
		"prices": {
		  "buy": 2299,
		  "rent": 699
		},
		"episodes": [
		  "Winter Is Coming",
		  "The Kingsroad",
		  "Lord Snow",
		  "Cripples, Bastards, and Broken Things",
		  "The Wolf and the Lion",
		  "A Golden Crown",
		  "You Win or You Die",
		  "The Pointy End",
		  "Baelor",
		  "Fire and Blood"
		],
		"description": "George R.R. Martin's best-selling book series 'A Song of Ice and Fire' is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a deadly game for control of the Seven Kingdoms of Westeros, and to sit atop the Iron Throne."
	  },
	  {
		"name": "The Grinch",
		"release": 2012,
		"prices": {
		  "buy": 999,
		  "rent": 399
		},
		"episodes": [
		  "The Grinch"
		],
		"description": "With its nostalgic charm and indulgent fun, directors Yarrow Cheney and Scott Mosier bring back the Dr. Seuss classic in all its mischievous glory."
	  }]);
	const [films , setFilms] = useState([
		{
			"name": "Mulholland Drive",
			"release": 2001,
			"prices": {
			  "buy": 999,
			  "rent": 299
			},
			"description": "Mulholland Drive (stylized as Mulholland Dr.) is a 2001 neo-noir mystery film written and directed by David Lynch and starring Naomi Watts, Laura Harring, Justin Theroux, Ann Miller, and Robert Forster. It tells the story of an aspiring actress named Betty Elms (Watts), newly arrived in Los Angeles, who meets and befriends an amnesiac woman (Harring) recovering from a car accident. The story follows several other vignettes and characters, including a Hollywood film director (Theroux)."
		  },
		  {
			"name": "In the Mood for Love",
			"release": 2000,
			"prices": {
			  "buy": 599,
			  "rent": 199
			},
			"description": "In the Mood for Love is a 2000 Hong Kong romantic drama film written, produced, and directed by Wong Kar-wai. It tells the story of a man (played by Tony Leung) and a woman (Maggie Cheung) whose spouses have an affair together and who slowly develop feelings for each other."
		  }
	])
	const toggle = (open) => setOpen(open);
	return (
		<Fragment>
			<Container>
			<Button color="success" onClick={() => toggle(true)} style={{ marginBottom: '1rem' }}>Films</Button>
			<Button color="primary" onClick={() => toggle(false)} style={{ marginBottom: '1rem' }}>Tv Session</Button>
			<Collapse isOpen={isOpen}>
				<Card>
					<CardHeader>Films</CardHeader>
					<CardBody>
						{films.map(film => (
							<Fragment>
								<h6><b>Name :</b>{film.name}</h6>
								<h6><b>Release :</b>{film.release}</h6>
								<h6><b>Prices :</b> <strong>Buy :</strong>{film.prices.buy}, <strong>Rent :</strong>{film.prices.rent}</h6>
								<p><b>Description :</b>{film.description}</p>
							</Fragment>
						))}
					</CardBody>
				</Card>
			</Collapse>
			<Collapse isOpen={!isOpen}>
				<Card>
					<CardHeader>Tv Session</CardHeader>
					<CardBody>
						{tvSession.map(tv => (
							<Fragment>
								<h6><b>Name :</b>{tv.name}</h6>
								<h6><b>Prices :</b> <strong>Buy :</strong>{tv.prices.buy}, <strong>Rent :</strong>{tv.prices.rent}</h6>
								<h6><b>Episodes :</b>{tv.episodes.join(', ')}</h6>
								<p><b>Description :</b>{tv.description}</p>
							</Fragment>
						))}
					</CardBody>
				</Card>
			</Collapse>
			</Container>
		</Fragment>
	);
}

export default App;
