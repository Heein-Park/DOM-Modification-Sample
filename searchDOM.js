const onload = () => {
    const body = document.body;
    const container = body.querySelector('div#container');
    
    let newTweet = document.createElement('div');
    newTweet.textContent = "dev";
    newTweet.classList.add('tweet');
    container.appendChild(newTweet);

};