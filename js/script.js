const themetoggle = document.querySelector('.theme');

// Call the function
fetchData();

const theme = localStorage.getItem('theme');
//check if theme is set in local storage
if (theme) document.body.classList.add(theme);
//toggle theme
themetoggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode')
    } else {
        localStorage.removeItem('theme')
    }
});

async function fetchData() {
    try {
        const response = await fetch('js/data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Get the first user from the JSON data
        const firstUser = data.users[0];

        // Select elements in the Facebook card
        document.querySelector('.facebook-user').textContent = firstUser.username;
        document.querySelector('.facebook-followers').textContent = firstUser.followers;
        document.querySelector('.facebook-update').textContent = `+${firstUser.changeToday} Today`;

        // Get the second user from the JSON data
        const secondUser = data.users[1];

        // Select elements in the twitter card
        document.querySelector('.twitter-user').textContent = secondUser.username;
        document.querySelector('.twitter-followers').textContent = secondUser.followers;
        document.querySelector('.twitter-update').textContent = `+${secondUser.changeToday} Today`;

        const thirdUser = data.users[2];

        // Select elements in the isntagram card
        document.querySelector('.instagram-user').textContent = thirdUser.username;
        document.querySelector('.instagram-followers').textContent = thirdUser.followers;
        document.querySelector('.instagram-update').textContent = `+${thirdUser.changeToday} Today`;

        const fourthUser = data.users[3];

        // Select elements in the youtube card
        document.querySelector('.youtube-user').textContent = fourthUser.username;
        document.querySelector('.youtube-followers').textContent = fourthUser.subscribers;
        document.querySelector('.youtube-update').textContent = `+${fourthUser.changeToday} Today`;

        const firstOver=data.overview[0];
        // Select elements in the Facebook card views
        document.querySelector('.viewsF').textContent = firstOver.value;
        document.querySelector('.views-pF').textContent = firstOver.percentage;

        const secondOver=data.overview[1];
        // Select elements in the Facebook card likes
        document.querySelector('.likesF').textContent = secondOver.value;
        document.querySelector('.likes-pF').textContent = secondOver.percentage;

        const thirdOver=data.overview[2];
        // Select elements in the instagram card likes
        document.querySelector('.likesI').textContent = thirdOver.value;
        document.querySelector('.likes-pI').textContent = thirdOver.percentage;

        const fourthOver=data.overview[3];
        // Select elements in the instagram card views
        document.querySelector('.viewsI').textContent = fourthOver.value;
        document.querySelector('.views-pI').textContent = fourthOver.percentage;

        const fivethOver=data.overview[4];
        // Select elements in the twitter card retweets
        document.querySelector('.retweetsT').textContent = fivethOver.value;
        document.querySelector('.retweets-pT').textContent = fivethOver.percentage;

        const sixthOver=data.overview[5];
        // Select elements in the twitter card likes
        document.querySelector('.likesT').textContent = fivethOver.value;
        document.querySelector('.likes-pT').textContent = fivethOver.percentage;

        const seventhOver=data.overview[6];
        // Select elements in the youtube card likes
        document.querySelector('.likesY').textContent = seventhOver.value;
        document.querySelector('.likes-pY').textContent = seventhOver.percentage;

        const eighthOver=data.overview[7];
        // Select elements in the youtube card views
        document.querySelector('.viewsY').textContent = eighthOver.value;
        document.querySelector('.views-pY').textContent = eighthOver.percentage;
        

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

