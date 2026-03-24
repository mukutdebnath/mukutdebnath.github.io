// STEP 1: Your Data
const storyData = [
    // --- 1. A Simple Chat Message ---
    // {
    //     type: 'chat',
    //     sender: 'her',
    //     text: "Look at this!",
    //     image: 'hug_propose_day.jpg', // Main image in bubble
    //     replyTo: {
    //         sender: 'her',
    //         text: "Send me a pic!",
    //         thumb: 'hug_propose_day.jpg' // Small image next to reply text
    //     }
    // },
    { type: 'date', text: 'June 15, 2023' },
    {
        type: 'chat',
        sender: 'her',
        text: "Arreh Mukutu<br>Kmn asos 🌚",
        replyTo: { 
            sender: 'Mukutu • Story', 
            text: "To Chicago",
            thumb: 'insta-story-chicago.jpg',
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Hii Chandrima.. ami bhalo tui ko",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Amio asi bhalo",
    },


    { type: 'date', text: 'October 24, 2023' },
    {
        type: 'chat',
        sender: 'her',
        text: "Hi",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Mukutu",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Hellooo",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Memory toh thakbo ida 😅",
        replyTo: {
            sender: 'You • Status',
            text: "Me and Mukutu going on this ride together on Nabami 2023 is a core memory for us now 🤣 beacuse I unintentionally almost killed him 😭 (0:30)",
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ho kya matlab tor ta core nah 🤨",
    },
    {
        type: 'milestone',
        title: "Puja 2023",
        photo: 'dp-2023-rides.jpg',
        message: "When it all started",
        emoji: '🎉',
    },

    { type: 'date', text: 'October 12, 2024' },
    {
        type: 'chat',
        sender: 'me',
        text: "Ishhhh, ida kere dili 🙈",
        replyTo: {
            sender: 'You • Status',
            text: "Uff Mukut ki lagcheee!!! Carrying my sling bag so well 🫢",
            thumb: 'dp-2024-sling-bag.jpg'
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Amar nijeree deikha hasi paitase ei photo dat",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Jaani toh 🤣",
        replyTo: {
            sender: 'Mukutu',
            text: 'Amar nijeree deikha hasi paitase ei photo dat'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Elligai koisi haaste paros haashi paya thakle",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Bye bye 🥹",
        replyTo: {
            sender: 'You • Status',
            text: "Humara Mukutu ab Sundar Pichai ks MUkutu bann gaya 😞✨ Bye bye Mukutu....Phir aana treat dene 😈",
            thumb: 'dp-2024-portrait.jpg',
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ei photo da bhalo uthse",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Kemne bhalo na uitha thaake",
        replyTo: {
            sender: 'Mukutu',
            text: 'Ei photo da bhalo uthse'
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Tui toh amar thika lomba na taile 😅",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Photo te toh same e lagtase",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Hmmmm",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Maybe ami ektu neeche aslam",
        reaction: '😂',
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Uneven Surface",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Kya hi hoga height dekhke",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Shi baat h",
        replyTo: {
            sender: 'You',
            text: 'Kya hi hoga height dekhke'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Tata",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Tata, ami tor status e reply dite thakum, tui status dite thak🤣",
        replyTo: {
            sender: 'You',
            text: 'Tata'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "😭😭😭",
        replyTo: {
            sender: 'Mukutu',
            text: 'Tata, ami tor status e reply dite thakum, tui status dite thak🤣'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Wow",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Tui koto bhalo",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ho Khub bhalo ami🫠",
        replyTo: {
            sender: 'You',
            text: 'Tui koto bhalo'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Amar moto",
    },
    {
        type: 'photo',
        src: 'dp-2024-collage.jpg',
        caption: 'Puja 2024' // Optional caption
    },

    { type: 'date', text: 'February 20, 2025' },
    {
        type: 'chat',
        sender: 'me',
        text: "Ami ajke meghalaya jaitasi",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Bondhurar shonge",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Bala sobi tulis 🌚",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Post koris",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Dekhi eibar jodi kisu bhalo photo tulte pari taile kormu",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Areh pahar er modhye shahrukh khan pose",
    },    
    {
        type: 'chat',
        sender: 'me',
        text: "Amar pose deikha sobai haissa dibo",
        replyTo: {
            sender: 'You',
            text: 'Areh pahar er modhye shahrukh khan pose',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Areh emneo sarakkhon haashi",
        reaction: '🥲',
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Arektu haashum arki",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Thik ase hasaitasi tore",
    },

    { type: 'date', text: 'February 24, 2025' },
    {
        type: 'chat',
        sender: 'her',
        text: "Tore koisi shahrukh khan pose<br>Tui dekhi one handed pose des",
        replyTo: {
            sender: 'Mukutu',
            text: 'Blue Lagoon, Meghalaya',
            thumb: 'insta-story-meghalaya.jpg'
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Songe lathi aslo toh bhablam srk pose re ami modify e koira dei 😅",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "🤣🤣🤣🤣🤣",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Cool",
    },
    { type: 'date', text: 'July 15, 2025' },
    {
        type: 'chat',
        sender: 'her',
        text: "Kitare",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Kmn asos",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Yoo",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Bhalo Bhalo",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Tui kemon ko",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ajke amrar colleger convocation aslo",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Cool cool",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ajke mauj masti crow raat me",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Kal se job shob firse",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Yes🥲",
        replyTo: {
            sender: 'You',
            text: 'Kal se job shob firse'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Areh mon kharap koris nh",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Message koira lais<br>Kharap tarap bhala hoiya jaibo",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Woow",
        replyTo: {
            sender: 'You',
            text: 'Message koira lais<br>Kharap tarap bhala hoiya jaibo'
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Yes right",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ready thakis amar message er ligga",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Always 🌚",
    },
    { type: 'date', text: 'September 25, 2025' },
    {
        type: 'chat',
        sender: 'me',
        text: "Hello",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Yo mukutuuuu",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Kemon asos ko",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Bhaloi",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Tui ki land korsos agt?",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Yes ajke",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Elligai mone porse Agartalar manusher kotha 🌚",
        reaction: '😂',
    },
    {
        type: 'photo',
        src: 'dp-2025-collage.jpg',
        caption: 'Puja 2024' // Optional caption
    },
    { type: 'date', text: 'October 17, 2025' },
    {
        type: 'chat',
        sender: 'her',
        text: 'Don\'t get me wrong but throughout school i used to think you\'re the typical nerd',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'But after we started talking you proved me wrong',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'I used to think the same about me too 🤣',
        reaction: '🤣',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'LMAO',
    },
    { type: 'date', text: 'October 24, 2025' },
    {
        type: 'chat',
        sender: 'me',
        text: 'Onek porishrom korsos',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Bhalo skills ase dekhi tor',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Ami toh ekebarr nerdyy tor pov thikka then 😂',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Okkhon tore amar nerdy lagena<br>Tui eto shoytan nije experience korsi pore ei nerdy image churmar koira bhainga gese',
        replyTo: {
            sender: 'Mukutu',
            text: 'Ami toh ekebarr nerdyy tor pov thikka then 😂',
        },
        reaction: '😂',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Iskul e thakte lagti nerd<br>Goto bosor thikao ei image fade hoite shuru korse',
    },

    { type: 'date', text: 'October 27, 2025' },
    {
        type: 'chat',
        sender: 'her',
        text: 'All the best for tomorrow',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Thanks',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'It\'s gonna be a long day with all that food and rest',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'For me?',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'All that food?',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Rest? What?',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Context please',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'You need an \'All the best\' for tomorrow because',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'You have office',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'And it\'ll be a very tiring day with all that nice food at the cafeteria',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Thanks again',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'And work also?',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'No?',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Oh you go there to work????',
        replyTo: {
            sender: 'Mukutu',
            text: 'And work also?',
        },
        reaction: '😂',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'All i hear about is food and rest',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'So i thought that\'s what you do',
    },

    { type: 'date', text: 'November 10, 2025' },
    {
        type: 'chat',
        sender: 'her',
        text: 'Life er first job<br>First day<br>First class korsi',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Special feeling',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Kemon lagtase?',
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Mukutuuuuuuuuuu',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Is this a new name of the feeling?',
        replyTo: {
            sender: 'Mukutu',
            text: 'Mukutuuuuuuuuuu',
        }
    },
    {type: 'date', text: 'November 27, 2025'},
    {
        type: 'chat',
        sender: 'me',
        text: 'Imagine sitting here with your fav person and having gorom cha',
        replyTo: {
            sender: 'Mukutu',
            text: 'Look at this 🥹',
            thumb: 'sakleshpur-1.jpg'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Yes',
        replyTo: {
            sender: 'Mukutu',
            text: 'Imagine sitting here with your fav person and having gorom cha'
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'That\'s the dream',
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Yeah and now imagine sitting here and having coffee with me 🫠',
        replyTo: {
            sender: 'You',
            text: 'That\'s the dream',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Imagined right away after seeing the photo',
        replyTo: {
            sender: 'Mukutu',
            text: 'Yeah and now imagine sitting here and having coffee with me 🫠',
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Ki ki imagine korsos? 🌚',
        replyTo: {
            sender: 'You',
            text: 'Imagined right away after seeing the photo',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Don\'t be noty<br>Sitting and sipping oi imagine korsi',
        replyTo: {
            sender: 'Mukutu',
            text: 'Ki ki imagine korsos? 🌚',
        }
    },
    {
        type: 'chat',
        sender: 'me',
        text: 'Imagine walking with your fav person here',
        replyTo: {
            sender: 'Mukutu',
            text: 'Photo',
            thumb: 'sakleshpur-2.jpg',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: 'Stop missing me already',
        replyTo: {
            sender: 'Mukutu',
            text: 'Imagine walking with your fav person here',
        }
    },
    {type: 'date', text: 'December 25, 2025'},
    {
        type: 'chat',
        sender: 'me',
        text: "Fucck",
        replyTo: {
            sender: 'You',
            text: 'Video',
            thumb: 'santa-and-deer.jpeg',
        } 
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Fucck",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "That looks",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Crazyyyy",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ashole",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Santa and the deer",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Got a gaali out of you<br>LMAO 🤣",
        reaction: '😂',
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Bhala hoise onek",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Thank Youuuu",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Mone hoitase",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Thaak",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ki",
        replyTo: {
            sender: 'Mukutu',
            text: 'Thaak',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Oma",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ki mone hoitase",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ki muskil",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Koibini?",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Mone hoitase",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ei haath dhoira",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ne",
        image: 'santa-and-deer-full.jpeg',
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Dhor",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ki korbi kor",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ei haath dhoira",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ek knee te boya",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Propose",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ohhhhhhh",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Nice",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Kaafi sahi thinking",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Impressive",
    },


    {type: 'date', text: 'December 29, 2025'},
    {
        type: 'chat',
        sender: 'me',
        text: "Fadasna kisu thanda yane",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ami thanda hoiya roisi",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Amarei loiya jaa",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Ho, Thanda toh paitasi na",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Tore e nimu",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Tore e joraya dhormu",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Ho, That should work for you",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "That should work perfectly",
        reaction: '❤️',
    },


    {type: 'date', text: 'December 31, 2025'},
    {
        type: 'chat',
        sender: 'me',
        text: "Ratre surprise dekhamu",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Surprise???",
        replyTo: {
            sender: 'Mukutu',
            text: 'Ratre surprise dekhamu',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Koto raate",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Onek ratre",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Are you ready for surprise",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Yes",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "",
        image: 'watch.jpeg',
    },
    {
        type: 'chat',
        sender: 'her',
        text: "How is it a surprise to me?",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Thik tohh",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "See this watch was unexpected",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "So its a surprise 🤣",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "I have such a good humour",
    },
    {
        type: 'chat',
        sender: 'her',
        text: "You do, you do",
        replyTo:{
            sender: 'Mukutu',
            text: 'I have such a good humour',
        }
    },
    {type: 'date', text: 'January 1, 2026'},
    {
        type: 'chat',
        sender: 'her',
        text: "Happy New Year ♥️",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Happy New Year",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Dekhsos tor ligga saal bodlaya disi, kemon lagse arekta surprise?",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "",
        replyTo: {
            sender: 'Video Call',
            text: '1 hr, 34 min',
        }
    },
    {
        type: 'chat',
        sender: 'her',
        text: "Goodnight boyfriend",
    },
    {
        type: 'chat',
        sender: 'me',
        text: "Goodnight girlfriend",
    },
    {
        type: 'photo',
        src: 'cd-collage.jpg',
    },

    
    // my madam
    // tore joraya dhormu
    // oh you tickle me mukutu, if its engineerging I will contact you
    // nicknames, nail 
    // art propose reaction, 
    // surprise propose
    // --- 5. A Celebration Break (Mid-scroll vibe) ---
    {
        type: 'celebration',
        icon: '💖',
        text: "And just like that, everything changed..."
    },
];


const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];
const numberOfPieces = 50;
const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffccd5', '#fff0f3'];

function createConfetti() {
    for (let i = 0; i < numberOfPieces; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 1,
            rotation: Math.random() * 360
        });
    }
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
        p.y += p.speed;
        p.rotation += p.speed;
        if (p.y > canvas.height) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
    });
    requestAnimationFrame(updateConfetti);
}

createConfetti();
updateConfetti();

// Add this at the bottom of your existing confetti logic
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Optional: clear and restart confetti pieces to match new width
    pieces = [];
    createConfetti();
});

// --- EMOJI EXPLOSION LOGIC ---
function explodeEmojis(x, y, emojiIcon) {
    const count = 12; // Number of emojis
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.className = 'emoji-particle';
        span.innerHTML = emojiIcon || '❤️';

        // Random directions
        const tx = (Math.random() - 0.5) * 300 + 'px';
        const ty = (Math.random() - 0.5) * 300 - 150 + 'px';

        span.style.setProperty('--tx', tx);
        span.style.setProperty('--ty', ty);
        span.style.left = x + 'px';
        span.style.top = y + 'px';

        document.body.appendChild(span);
        setTimeout(() => span.remove(), 2000);
    }
}

// STEP 2: The Render Function
const container = document.getElementById('timeline-container');

storyData.forEach((item, index) => {
    const div = document.createElement('div');
    // This assigns classes like "timeline-item chat-her-wrapper" 
    // or "timeline-item chat-me-wrapper"
    const wrapperType = item.type === 'chat' ? `${item.type}-${item.sender}` : item.type;
    div.className = `timeline-item ${wrapperType}-wrapper`;

    if (item.type === 'date') {
        div.innerHTML = `
        <div class="timeline-date-header">
            <span>${item.text}</span>
        </div>
    `;
    }
    else if (item.type === 'chat') {
        // --- SMART GROUPING LOGIC ---
        const prev = storyData[index - 1];
        const next = storyData[index + 1];
        let groupClass = '';

        const isPrevSame = prev && prev.type === 'chat' && prev.sender === item.sender;
        const isNextSame = next && next.type === 'chat' && next.sender === item.sender;

        if (isPrevSame && isNextSame) groupClass = 'middle';
        else if (isPrevSame) groupClass = 'bottom';
        else if (isNextSame) groupClass = 'top';

        // --- REPLY MARKUP ---
        let replyMarkup = '';
        if (item.replyTo) {
            const thumbMarkup = item.replyTo.thumb
                ? `<img src="images/${item.replyTo.thumb}" class="reply-thumb">`
                : '';

            replyMarkup = `
            <div class="reply-box ${item.replyTo.thumb ? 'has-thumb' : ''}">
                <div class="reply-content">
                    <p><strong>${item.replyTo.sender || 'Story'}</strong></p>
                    <p>${item.replyTo.text}</p>
                </div>
                ${thumbMarkup}
            </div>`;
        }

        let imageMarkup = item.image
            ? `<img src="images/${item.image}" class="bubble-image">`
            : '';

        const reactionClass = item.reaction ? 'has-reaction' : '';
        const reactionMargin = item.reaction ? '20px' : '2px';
        const reactionMarkup = item.reaction
            ? `<div class="bubble-reaction">${item.reaction}</div>`
            : '';

        // 2. Inject the class into the div
        div.innerHTML = `
            <div class="chat-bubble ${item.sender === 'me' ? 'chat-me' : 'chat-her'} ${groupClass}" style="margin-bottom:${reactionMargin}">
                ${replyMarkup}
                ${imageMarkup}
                ${item.text ? `<p class="message-text">${item.text}</p>` : ''}
                ${reactionMarkup} 
            </div>
        `;
    }
    else if (item.type === 'milestone') {
        // We'll still use the random rotation for a "scattered" look, applied to the wrapper
        const randomRot = (Math.random() * 6 - 3).toFixed(2);

        // Create the wrapper for the flipping logic
        const flipContainer = document.createElement('div');
        flipContainer.className = 'milestone-card';
        flipContainer.style.transform = `rotate(${randomRot}deg)`; // This handles the initial scatter

        // This is vital: the flip Container itself needs the click listener, 
        // and we must prevent the scatter rotation from being overridden.
        flipContainer.innerHTML = `
            <div class="milestone-card-inner" onclick="handleMilestoneClick(event, '${item.emoji}')">
                <div class="milestone-front">
                    <img src="images/${item.photo}" alt="${item.title}">
                </div>
                
                <div class="milestone-back">
                    <h3>${item.title}</h3>
                    <p>${item.message}</p>
                </div>
            </div>
        `;

        // We need a slight adjustment to the CSS and JS structure here to handle the initial random rotation
        // PLUS the flip animation without conflict. Let's adjust the wrapper slightly.

        // Create the overall wrapper
        const div = document.createElement('div');
        div.className = 'timeline-item milestone-wrapper';
        div.style.transform = `rotate(${randomRot}deg)`; // Scatter here

        div.innerHTML = `
            <div class="milestone-card" onclick="handleMilestoneClick(event, '${item.emoji}')">
                <div class="milestone-front">
                    <img src="images/${item.photo}">
                </div>
                <div class="milestone-back">
                    <h3>${item.title}</h3>
                    <p>${item.message}</p>
                </div>
            </div>
        `;

        container.appendChild(div);
        return; // Stop processing the rest of the loop for this item
    }

    else if (item.type === 'photo') {
        // Generate a random tilt between -4 and +4 degrees
        const randomTilt = (Math.random() * 8 - 4).toFixed(2);

        div.className = 'timeline-item scrapbook-photo-wrapper';
        div.innerHTML = `
            <div class="scrapbook-photo" style="transform: rotate(${randomTilt}deg)">
                <img src="images/${item.src}" alt="Memory" loading="lazy">
                ${item.caption ? `<p class="photo-caption">${item.caption}</p>` : ''}
            </div>
        `;
    }

    container.appendChild(div);
});

// --- CLICK HANDLER ---
// --- UPDATED CLICK HANDLER ---
function handleMilestoneClick(event, emoji) {
    const card = event.currentTarget;

    // 1. Explosive Emoji (keep this as is)
    if (typeof explodeEmojis === 'function') {
        explodeEmojis(event.clientX, event.clientY, emoji);
    }

    // 2. Toggle the flip class
    card.classList.toggle('is-flipped');
}

// This function watches for elements entering the screen
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: stop watching once it has appeared
            // revealOnScroll.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the viewport
});

// Apply the watcher to every timeline item
document.querySelectorAll('.timeline-item').forEach(item => {
    revealOnScroll.observe(item);
});


const canvasReveal = document.getElementById('scratch-canvas');
const ctxReveal = canvasReveal.getContext('2d', { willReadFrequently: true });
let isDrawing = false;

function initScratchCard() {
    canvasReveal.width = 320; 
    canvasReveal.height = 450;

    // 1. Fill with a "Silver" coating
    const gradient = ctxReveal.createLinearGradient(0, 0, 320, 450);
    gradient.addColorStop(0, '#adb5bd');
    gradient.addColorStop(0.5, '#dee2e6');
    gradient.addColorStop(1, '#adb5bd');
    
    ctxReveal.fillStyle = gradient;
    ctxReveal.fillRect(0, 0, canvasReveal.width, canvasReveal.height);

    // Add some "texture" to the silver
    ctxReveal.fillStyle = 'rgba(255,255,255,0.1)';
    for(let i=0; i<500; i++) {
        ctxReveal.fillRect(Math.random()*320, Math.random()*450, 1, 1);
    }
}

// 2. The Erasing Function
function scratch(e) {
    if (!isDrawing) return;

    const rect = canvasReveal.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctxReveal.globalCompositeOperation = 'destination-out'; // This "erases" the top layer
    ctxReveal.beginPath();
    ctxReveal.arc(x, y, 25, 0, Math.PI * 2); // Brush size 25
    ctxReveal.fill();

    checkRevealProgress();
}

// 3. Check if enough is scratched to show the message
function checkRevealProgress() {
    const imageData = ctxReveal.getImageData(0, 0, canvasReveal.width, canvasReveal.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparentPixels++;
    }

    const percentage = (transparentPixels / (canvasReveal.width * canvasReveal.height)) * 100;
    
    if (percentage > 10) { // If 50% is scratched, fade the rest
        canvasReveal.style.transition = 'opacity 1s ease';
        canvasReveal.style.opacity = '0';
        setTimeout(() => canvasReveal.remove(), 1000);
    }
}

// Event Listeners
canvasReveal.addEventListener('mousedown', () => isDrawing = true);
canvasReveal.addEventListener('touchstart', () => isDrawing = true);
window.addEventListener('mouseup', () => isDrawing = false);
window.addEventListener('touchend', () => isDrawing = false);
canvasReveal.addEventListener('mousemove', scratch);
canvasReveal.addEventListener('touchmove', (e) => { e.preventDefault(); scratch(e); });

// Run the setup
initScratchCard();