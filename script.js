let noClickCount = 0;

function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');

    // 1. Make the Yes button grow
    // We increase the font size and padding multiplier based on click count
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.4}px`; // Grow by 40% each time

    // 2. Change text on No button (Optional: adds personality)
    const messages = [
        "Are you sure? 😢",
        "Really sure??",
        "Think again! 😣",
        "Last chance!",
        "Surely not?",
        "You're breaking my heart! 💔",
        "I'm gonna cry...",
    ];
    
    // Cycle through messages
    if (noClickCount < messages.length) {
        noBtn.innerText = messages[noClickCount];
    }

    // 3. Make No button shrink/disappear logic
    if (noClickCount >= 7) {
        noBtn.style.display = 'none'; // Hide the No button completely
    }
}

function handleYes() {
    // Hide the question screen
    document.getElementById('question-screen').classList.add('hidden');
    
    // Show the success screen
    document.getElementById('success-screen').classList.remove('hidden');
    
    // Optional: Trigger confetti or hearts here if you added a library, 
    // but we'll stick to CSS changes as requested!
}