const onload = () => {
    const body = document.body;
    console.dir(body);

    const container = body.querySelector('div#container');
    
    let newTweet = document.createElement('div');
    container.appendChild(newTweet);

};