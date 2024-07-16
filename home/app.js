"use strict"



const dropdown = document.getElementById('productsDropdown');
const infoDisplay = document.getElementById("inStockInfo");

const categories = ["Collectibles", "Instruments", "Music", "Cards", "Books", "Video Games"];

categories.forEach(category => {
    let option = document.createElement("option");
    option.text = category;
    option.value = category;
    dropdown.appendChild(option);
});


//DROP DOWN
dropdown.addEventListener("change", function () {
    const selectedCategory = dropdown.value;
    
    switch (selectedCategory) {
        case "Collectibles":
            displayCollectibles(collectibles); // Show all collectibles
            break;
        case "Instruments":
            displayInstruments(instruments); // Show all instruments
            break;
        case "Music":
            displayMusic(music)// Show all music

            break;
        case "Cards":
            displayCards(cards) // Show all cards
            break;
        

        case "Books":
            displaybooks(books)
            break;

        case "Video Games":
            displayvideoGames(videoGames); // Show all video games
            break;

        default:
            infoDisplay.textContent = "No collectibles available for this category.";
            break;
    }
});

// COLLECTIBLES
let collectibles = [
    {
        name: "Funko Pop! Broadway: Hamilton- King George",
        price: 20,
        img: "/images/cpop1.jpg",
        descrip: "The Pop! Figure of King George from Hamilton captures the iconic character's regal presence and flair. With detailed design and vibrant colors, it's a must-have collectible for fans of the hit musical."
    },
    {
        name: "Funko Pop Animation: Bobs Burgers - Teddy",
        price: 35,
        img: "/images/cpop2.webp",
        descrip: "The Pop! Figure of Teddy from Bob's Burgers brings the beloved character to life with charming detail. With his signature apron and friendly demeanor, Teddy is instantly recognizable to fans of the show. This collectible captures the essence of Teddy's endearing quirks, making it a delightful addition to any Bob's Burgers collection. Teddy's Pop! Figure adds a touch of humor and warmth to any space."
    },
    {
        name: "Freddy Krueger plushie",
        price: 15,
        img: "/images/cplush1.jpg",
        descrip: "The Freddy Krueger plushy embodies the sinister essence of the Nightmare on Elm Street villain with iconic details. Perfect for horror fans, this plushy is a chilling yet playful addition to any collection or display."
    },
    {
        name: "Stitch plushie",
        price: 10,
        img: "/images/cplush2.jpg",
        descrip: "The Stitch plushie captures the lovable charm of the mischievous alien from Disney's Lilo & Stitch. With its blue fur, big ears, and endearing expression, this plushie is a delightful addition to any Disney collection."
    },
    {
        name: "LEGO pin",
        price: 5,
        img: "/images/cpin1.jpg",
        descrip: "The LEGO pin, shaped like a LEGO minifigure, is a playful accessory for LEGO enthusiasts of all ages. With its iconic design and vibrant colors."
    },
    {
        name: "Blackpink pin",
        price: 3,
        img: "/images/cpin2.jpg",
        descrip: "The Blackpink pin celebrates the iconic K-pop girl group with its stylish design and vibrant colors. Featuring the group's logo, this pin is a must-have accessory for fans. Whether worn on clothing, bags, or accessories, it showcases support for the beloved group. With its sleek and eye-catching appearance, the Blackpink pin adds a touch of fandom flair to any outfit. Perfect for displaying love and admiration for Blackpink's music and achievements, this pin is a cherished collectible for fans worldwide."
    }
];
// Display collectible info
function displayCollectibles(collectibles) {
    if (collectibles && collectibles.length > 0) {
        infoDisplay.innerHTML = collectibles.map(collectible => `
        <div class="card">
                <div class="item-details">
                    <h4>${collectible.name}</h4>
                    <div class="product-image">
                        <img src="${collectible.img}" alt="${collectible.name}" class="card__image">
                    </div>
                    <div class="price">$${collectible.price}</div>
                    <div class="description">${collectible.descrip}</div>
                    <a href="#" class="btn btn-warning">add to cart</a>
                </div>
            </div>
        `).join('');
   
    }
}


// INSTRUMENTS

let instruments = [
    {
        name: "Violin",
        price: 100,
        img: "/images/istring2.jpg",
        descrip: "Discover the elegance and charm of the violin with this special sale offer. Crafted with precision and care, this violin boasts a rich, resonant tone and exquisite craftsmanship. Perfect for beginners and experienced musicians alike, it comes complete with essential accessories, including a bow and case.  Don't miss this chance to bring the timeless beauty of the violin into your musical journey."
    },
    {
        name: "Clarinet",
        price: 200,
        img: "/images/iww1.jpg",
        descrip: "Embrace the melodious tones of the clarinet with this exclusive sale opportunity. Crafted with precision and quality materials, this clarinet offers a rich and versatile sound suitable for various musical styles."
    },
    {
        name: "Acoustic Guitar",
        price: 100,
        img: "/images/istring1.jpg",
        descrip: "This acoustic guitar offers an opportunity to acquire a timeless instrument known for its warm, natural sound. With its elegant design and versatile playability, it's perfect for musicians of all skill levels."
    },
    {
        name: "Saxophone",
        price: 650,
        img: "/images/iww2.webp",
        descrip: "Elevate your musical prowess with this discounted saxophone, perfect for both beginners and seasoned players. Crafted with precision and attention to detail, it offers a smooth, vibrant tone and effortless playability."
    },
    {
        name: "Drum Set",
        price: 700,
        img: "/images/iper1.jpg",
        descrip: "Unleash your rhythmic potential with this discounted drum set, perfect for aspiring drummers and seasoned musicians alike. Featuring sturdy construction and versatile sound options."
    },
    {
        name: "Xylophone",
        price: 80,
        img: "/images/iper2.webp",
        descrip: "Discover the joy of making music with this xylophone on sale, perfect for musicians of all ages. Crafted with precision and quality materials, it offers clear, resonant tones and exceptional durability. With its colorful keys and intuitive layout, it's ideal for beginners learning the basics of melody and rhythm. Whether for educational purposes, musical exploration, or creative expression, this discounted xylophone is a valuable addition to any home or classroom."
    }
];
// Display Instruments info
function displayInstruments(instruments) {
    if (instruments && instruments.length > 0) {
        infoDisplay.innerHTML = instruments.map(instrument => `
        <div class="card">
                <div class="item-details">
                    <h4>${instrument.name}</h4>
                    <div class="product-image">
                        <img src="${instrument.img}" alt="${instrument.name}" class="card__image">
                    </div>
                    <div class="description">${instrument.descrip}</div>
                    <div class="price">$${instrument.price}</div>
                    <a href="#" class="btn btn-warning">add to cart</a>
                </div>
            </div>
        `).join('');

    }
}

// CARDS

let cards = [
    {
        name: "Scarlet & Violet Pokemon 151 Booster Pack",
        price: 5,
        img: "/images/cpokemons.webp",
        descrip: "Pokémon Trading Card Game: Scarlet vs. Violet introduces 151 new cards along with an extra 10 cards. Trainers can explore a variety of Pokémon, including VMAX forms and Shiny Pokémon, enhancing gameplay diversity."
    },
    {
        name: "Pokemon TCG: Crown Zenith Elite Trainer Box",
        price: 50,
        img: "/images/cpokemonl.jpg",
        descrip: "The Pokémon Crown Zenith Elite Trainer Box offers trainers a comprehensive collection of tools and cards for competitive play. With a range of booster packs, including sought-after Pokémon V and VMAX cards, players can enhance their decks and expand their collections. The box also includes premium accessories like card sleeves, dice, and status counters for a complete gaming experience."
    },
    {
        name: "YuGiOh Battle of Chaos Booster",
        price: 100,
        img: "/images/cyugiohs.jpg",
        descrip: "The pack introduces thrilling new cards and strategies for dueling enthusiasts. With a focus on chaos-themed monsters and spells, players can unleash devastating combos and turn the tide of battle."
    },
    {
        name: "Battle Pack 2: War of the Giants",
        price: 100,
        img: "/images/cyugiohl.webp",
        descrip: "The War of Giants: Round 2 - Battle Pack 2 expansion offers duelists an exciting array of cards for strategic gameplay. Featuring powerful monsters and game-changing spells, players can craft versatile decks to outmaneuver their opponents."
    },
    {
        name: "Magic: The Gathering Kamigawa Booster Pack",
        price: 5,
        img: "/images/cmagics.webp",
        descrip: "Kamigawa Neon Dynasty Draft Booster delivers an array of cards for drafting and deck building. With a focus on the futuristic setting of Kamigawa, players can explore new mechanics and strategies."
    },
    {
        name: "Murders at Karlov Manor Commander Deck",
        price: 40,
        img: "/images/cmagicl.jpg",
        descrip: "In Magic: The Gathering - Murders at Karlv Manor Commander, players immerse themselves in a murder mystery-themed expansion set. Commanders lead their decks through a thrilling investigation filled with intrigue and suspense. With new cards and mechanics, players must outwit their opponents while uncovering the secrets of Karlv Manor. As players navigate through twists and turns, they must strategize carefully to solve the mystery and emerge victorious in this thrilling Commander format expansion."
    }




];

// Display Cards info
function displayCards(cards) {
    if (cards && cards.length > 0) {
        infoDisplay.innerHTML = cards.map(card => `
        <div class="card">
        <div class="item-details">
            <h4>${card.name}</h4>
            <div class="product-image">
                <img src="${card.img}" alt="${card.name}" class="card__image">
            </div>
            <div class="description">${card.descrip}</div>
            <div class="price">$${card.price}</div>
            <a href="#" class="btn btn-warning">add to cart</a>
        </div>
    </div>
        `).join('');

    }
}


// VIDEO GAMES

let videoGames = [
    {
        name: "God of War Ragnarök",
        price: 40,
        img: "/images/vpsnew.jpg",
        descrip: "In the much-anticipated sequel to God of War (2018), Kratos and Atreus navigate a perilous odyssey through the vast expanse of Norse mythology, confronting formidable deities and the looming cataclysm of Ragnarök."
    },
    {
        name: "Tomb Raider",
        price: 15,
        img: "/images/vpsold.jpg",
        descrip: "Tomb Raider, a revolutionary action-adventure video game, emerged in 1996 as the brainchild of Core Design and Eidos Interactive. This groundbreaking title introduced gamers to the indomitable Lara Croft, captivating audiences with her daring exploits. Initially debuting on the Sega Saturn, Tomb Raider swiftly conquered additional platforms, including MS-DOS and the PlayStation."
    },
    {
        name: "The Witcher 3: Wild Hunt",
        price: 15,
        img: "/images/vxboxnew.jpg",
        descrip: "In the Northern Kingdoms, Geralt of Rivia confronts the cataclysmic rampage of the Wild Hunt, unearthing a riveting tale and encountering memorable characters."
    },
    {
        name: "The Simpsons: Hit & Run",
        price: 50,
        img: "/images/vxboxold.jpg",
        descrip: "In 2003, Radical Entertainment released The Simpsons: Hit & Run, an action-adventure game published by Vivendi Universal Games. It's the twenty-second installment in the series."
    },
    {
        name: "The Legend of Zelda™: Tears of the Kingdom",
        price: 70,
        img: "/images/vnintendonew.jpg",
        descrip: "Embark on an epic adventure in Legend of Zelda: Tears of the Kingdom, exclusively on Nintendo Switch. Navigate Hyrule's vast landscapes and mystical skies, wielding Link's new powers against looming threats."
    },
    {
        name: "Donkey Kong Country 2: Diddy's Kong Quest",
        price: 25,
        img: "/images/vnintendoold.jpg",
        descrip: "Released in 1995, Donkey Kong Country 2: Diddy's Kong Quest is a platform game by Rare, published by Nintendo for the SNES. Launch dates vary: 21 November 1995 in Japan, 4 December in North America, and 14 December in Europe. This sequel to the original DKC follows Diddy Kong's quest to rescue Donkey Kong from the clutches of the villainous King K. Rool. With its innovative gameplay and stunning visuals, DKC 2 captivated gamers worldwide."
    }




];

// Display Video Games
function displayvideoGames(videoGames) {
    if (videoGames && videoGames.length > 0) {
        infoDisplay.innerHTML = videoGames.map(videoGame => `
        <div class="card">
        <div class="item-details">
            <h4>${videoGame.name}</h4>
            <div class="product-image">
                <img src="${videoGame.img}" alt="${videoGame.name}" class="card__image">
            </div>
            <div class="description">${videoGame.descrip}</div>
            <div class="price">$${videoGame.price}</div>
            <a href="#" class="btn btn-warning">add to cart</a>
        </div>
    </div>
        `).join('');

    }
}



// BOOKS
let books = [
    {
        name: "Action Comics (1938-) #1",
        price: 20,
        img: "/images/bcomicold.jpg",
        descrip: "Superman debuts as the iconic superhero, created by Jerry Siegel and Joe Shuster. His extraordinary abilities, including super strength and flight, are showcased as he battles corruption and injustice in Metropolis."
    },
    {
        name: "Batman Vol 2 23 ",
        price: 4,
        img: "/images/bcomicnew.webp",
        descrip: "In Batman: Zero Year - Comic 23, Bruce Wayne, emerging as Batman, battles against the villainous Red Hood Gang. Set amidst the chaos of Gotham City's blackout, Batman faces his toughest challenge yet, grappling with both personal demons and the city's descent into darkness. As the Red Hood's sinister plans unfold, Batman's determination and resourcefulness are put to the ultimate test."
    },
    {
        name: "Watchmen #1: Moore, Alan, Gibbons, Dave",
        price: 25,
        img: "/images/bnovelold.jpg",
        descrip: "In the groundbreaking graphic novel Watchmen by Alan Moore and Dave Gibbons, a group of retired superheroes investigates the murder of one of their own amid rising tensions of nuclear war"
    },
    {
        name: "Teenage Mutant Ninja Turtles: The Last Ronin ",
        price: 20,
        img: "/images/bnovelnew.jpg",
        descrip: "In TMNT: The Last Ronin, set in a dystopian future, the last surviving Teenage Mutant Ninja Turtle seeks vengeance against those who decimated his brothers and the city they once protected."
    },
    {
        name: "Naruto, Vol. 1: Uzumaki Naruto",
        price: 10,
        img: "/images/bmangaold.jpg",
        descrip: "In the debut volume of Naruto, Masashi Kishimoto introduces us to Naruto Uzumaki, a mischievous ninja-in-training with dreams of becoming Hokage, the leader of his village."
    },
    {
        name: "Hunter X Hunter, Vol. 36",
        price: 10,
        img: "images/bmanganew.jpg",
        descrip: "In chapter 36, Gon Freecss and his friends continue their intense training in preparation for the Hunter Exam. Amidst the challenges they face, Gon demonstrates his determination and resolve to become a Hunter like his father. Meanwhile, Kurapika grapples with his own inner demons and motivations, driven by a thirst for revenge against the Phantom Troupe. As the exam progresses, alliances are tested, and new adversaries emerge, pushing the characters to their limits in pursuit of their goals."
    }

];

// Display Books
function displaybooks(books) {
    if (books && books.length > 0) {
        infoDisplay.innerHTML = books.map(book => `
        <div class="card">
        <div class="item-details">
            <h4>${book.name}</h4>
            <div class="product-image">
                <img src="${book.img}" alt="${book.name}" class="card__image">
            </div>
            <div class="description">${book.descrip}</div>
            <div class="price">$${book.price}</div>
            <a href="#" class="btn btn-warning">add to cart</a>
        </div>
    </div>
        `).join('');

    }
}



//MUSIC 

let music = [
    {
        name: "Abbey Road by The Beatles",
        price: 30,
        img: "images/mrecordold.webp",
        descrip: "Come Together, Something, Maxwell's Silver Hammer, Oh! Darling, Octopus's Garden, I Want You (She's So Heavy), Here Comes the Sun, Because, You Never Give"
    },
    {
        name: "Lover by Taylor Swift ",
        price: 40,
        img: "/images/mrecordnew.jpg",
        descrip: "I Forgot That You Existed, Cruel Summer, Lover, The Man, The Archer, I Think He Knows, Miss Americana & The Heartbreak Prince, Paper Rings, Cornelia Street, Death by a Thousand Cuts, London Boy, Soon You'll Get Better (feat. Dixie Chicks), False God, You Need To Calm Down, Afterglow, ME! (feat. Brendon Urie of Panic! At The Disco), It's Nice To Have a Friend, Daylight<"
    },
    {
        name: "Appetite For Destruction by Guns 'n Roses",
        price: 15,
        img: "/images/mcassetteold.jpg",
        descrip: "Welcome to the Jungle, It's So Easy, Nightrain, Out Ta Get Me, Mr. Brownstone, Paradise City, My Michelle, Think About You, Sweet Child o' Mine, You're Crazy, Anything Goes, Rocket Queen"
    },
    {
        name: "Awesome Mix, Vol. 2 by Guardians of The Galaxy Vol. 2",
        price: 12,
        img: "/images/mcassettenew.jpg",
        descrip: "Mr. Blue Sky, Fox on the Run, Lake Shore Drive, The Chain, Bring It on Home to Me, Southern Nights, My Sweet Lord, Brandy (You're a Fine Girl), Come a Little Bit Closer, Wham Bam Shang-a-Lang, Surrender, Father and Son, Flash Light, Guardians Inferno"
    },
    {
        name: "Thriller by Michael Jackson",
        price: 10,
        img: "/images/mcdold.jpg",
        descrip: "Wanna Be Startin' Somethin', Baby Be Mine, The Girl Is Mine (with Paul McCartney), Thriller, Beat It, Billie Jean, Human Nature, P.Y.T. (Pretty Young Thing), The Lady in My Life"
    },
    {
        name: "Un Verano Sin Ti by Bad Bunny",
        price: 20,
        img: "/images/mcdnew.webp",
        descrip: "Un Verano Sin Ti, La Noche de Anoche (with Rosalía), Te Mudaste, 100 Millones (with Luar La L), Pa' Romperla (with Don Omar), El Mundo es Mío (with Mora), Si Veo a Tu Mamá, La Zona, Soy El Diablo (with Natanael Cano), Trellas (with Mora), Bichiyal (with Yaviah), A Tu Merced, Safaera (with Jowell & Randy and Ñengo Flow), Como Antes (with Wisin & Yandel), RLNDT (with Zion & Lennox and Jhay Cortez), Vete."
    }

];

// Display Music
function displayMusic(music) {
    if (music && music.length > 0) {
        infoDisplay.innerHTML = music.map(music => `
        <div class="card">
        <div class="item-details">
            <h4>${music.name}</h4>
            <div class="product-image">
                <img src="${music.img}" alt="${music.name}" class="card__image">
            </div>
            <div class="description">${music.descrip}</div>
            <div class="price">$${music.price}</div>
            <a href="#" class="btn btn-warning">add to cart</a>
        </div>
    </div>`
    ).join('');

    }
}
