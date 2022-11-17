let content = document.getElementById("content");

    const renderAbout = () =>{
        //make elements
        //render headline
        let headline = document.createElement('h1');
        let headlineTextNode = document.createTextNode("-About-");
        headline.appendChild(headlineTextNode);
        headline.classList.add("page-headline");
        //make the div container for the about items
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add("content-wrapper");
        contentWrapper.classList.add("flexbox");
        //now make and append the necessary elements to the wrapper
        //make item name
        let contentHeadline = document.createElement('h1');
        let contentHeadlineTxNd = document.createTextNode("Who we are");
        contentHeadline.appendChild(contentHeadlineTxNd);
        contentHeadline.classList.add("content-headline");
        //make image
        let contentImg = document.createElement("img");
        contentImg.classList.add("content-img");
        contentImg.setAttribute('src', "https://images.pexels.com/photos/2386728/pexels-photo-2386728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

        contentImg.setAttribute('alt', "Bob and Tucker");

        let contentImg2 = document.createElement("img");
        contentImg2.classList.add("content-img");
        contentImg2.setAttribute('src', "https://images.pexels.com/photos/8721365/pexels-photo-8721365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

        contentImg2.setAttribute('alt', "A good night");
        //make description
        let contentText = document.createElement('p');
        contentText.innerHTML = '<p class="content-text">Here at Bob\'s Country Bunker, we play all types of music. Country <em>and</em> Western.</p>'

        //append them all to the wrapper
        contentWrapper.appendChild(contentHeadline);
        contentWrapper.appendChild(contentImg);
        contentWrapper.appendChild(contentImg2);
        contentWrapper.appendChild(contentText);
        //append elements to content
        content.appendChild(headline);
        content.appendChild(contentWrapper);
        return;
    };

export{renderAbout};