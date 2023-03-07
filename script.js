const activity = document.getElementById('activity');
const generateBtn = document.getElementById('generate-btn');

const activities = [
    'Watch a funny cat video on YouTube',
    'Sing your favorite song at the top of your lungs',
    'Dance like no one is watching',
    'Take a 10-minute power nap',
    'Write a short story or poem',
    'Do a random act of kindness for someone',
    'Go for a walk and enjoy the fresh air',
    'Learn a new word and use it in a sentence',
    'Call a friend or family member just to say hi',
    'Read a chapter from your favorite book',
    'Make a cup of tea or coffee and enjoy it slowly',
    'Organize a drawer or closet',
    'Write down three things you are grateful for',
    'Try a new recipe or food',
    'Play a game or solve a puzzle',
    'Find a capybara',
    'Go to Starbucks',
    'Make a snack',
    'Hot Girl Walk',
    'Get laid',
    'Write code for a Procrastination Station website'
];

function generateActivity() {
    let randomIndex = Math.floor(Math.random() * activities.length);
    activity.innerHTML = activities[randomIndex];
}

generateBtn.addEventListener('click', function () {
    const current = activity.innerHTML;
    console.log(current)
    let newValue = generateActivity();
    while (current === newValue) {
        newValue = generateActivity();
    }
});
