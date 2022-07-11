const onload = () => {
    const body = document.body;
    const container = body.querySelector('div#container');
    
    let newTweet = document.createElement('div');
    newTweet.textContent = "dev";
    newTweet.classList.add('tweet');
    container.appendChild(newTweet);

    let ddButton = document.createElement('button');
    ddButton.textContent = "Doomsday Button";
    ddButton.classList.add('tweet', 'button');
    container.appendChild(ddButton);

    ddButton.addEventListener("click", () => {
        console.log("Click");
        let tweetList = body.querySelectorAll('div.tweet');
        for(let tweet of tweetList) {
            tweet.remove();
        }
    })
};