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
        replyTo: { sender: 'Mukutu • Story', text: "To Chicago" }
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
        message: "Where it all started",
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

        div.innerHTML = `
        <div class="chat-bubble ${item.sender === 'me' ? 'chat-me' : 'chat-her'} ${groupClass}">
            ${replyMarkup}
            ${imageMarkup}
            ${item.text ? `<p class="message-text">${item.text}</p>` : ''}
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