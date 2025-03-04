let noClickCount = 0;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainVideo = document.getElementById('mainVideo');
const mainText = document.getElementById('mainText');
const buttonContainer = document.querySelector('.button-container');

function randomizeButtonPosition(button) {
    const containerWidth = buttonContainer.offsetWidth;
    const containerHeight = buttonContainer.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const x = Math.floor(Math.random() * (containerWidth - buttonWidth));
    const y = Math.floor(Math.random() * (containerHeight - buttonHeight));

    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

mainVideo.addEventListener('error', () => {
    console.error('Error loading video.');
});

yesButton.addEventListener('click', () => {
    mainVideo.src = 'video/yes_video.mp4'; 
    mainVideo.load();
    mainVideo.play().catch(e => {
        console.error('Error playing video:', e);
    });
    mainText.textContent = "Yes, thank you, I will make this worthwhile for us.";
    buttonContainer.style.display = 'none'; 
});

noButton.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount === 5) {
        mainVideo.src = 'video/no_video.mp4'; 
        mainVideo.load();
        mainVideo.play().catch(e => {
            console.error('Error playing video:', e);
        });
        mainText.textContent = "Okay, Thank you for your time, bye.";
        buttonContainer.style.display = 'none'; 
    } else {
        randomizeButtonPosition(noButton);
    }
});

window.addEventListener('resize', () => {
    randomizeButtonPosition(noButton);
});

yesButton.style.position = 'relative';
noButton.style.position = 'relative';
noButton.style.left = '0';
noButton.style.top = '0';