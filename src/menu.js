
    let content = document.getElementById("content");
    
    const renderMenu = () =>{
        //render headline
        let headline = document.createElement('h1');
        let headlineTextNode = document.createTextNode("-Menu-");
        headline.appendChild(headlineTextNode);
        headline.classList.add("page-headline");
        //make the div container for the menu items
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add("content-wrapper");
        contentWrapper.classList.add("flexbox");
        //now make and append the necessary elements to the wrapper
        //make item name
        let contentHeadline = document.createElement('h1');
        let contentHeadlineTxNd = document.createTextNode("The Big Bob Burger");
        contentHeadline.appendChild(contentHeadlineTxNd);
        contentHeadline.classList.add("content-headline");
        //make burger image
        let contentImg = document.createElement("img");
        contentImg.classList.add("content-img");
        contentImg.setAttribute('src', "https://openclipart.org/download/269551/BigMac.svg");
        contentImg.setAttribute('alt', "burger");
        //make description
        let contentText = document.createElement('p');
        let contentTextTxNd = document.createTextNode("The Big Bob. Stacked with two 1/3 pound angus beef patties with all the fixins, it's sure to fill you up. Like its namesake, it'll bring a smile to your face and hasn't changed a bit since the 60s. If it ain't broke, don't fix it.");
        contentText.appendChild(contentTextTxNd);
        contentText.classList.add("content-text");

        //append them all to the wrapper
        contentWrapper.appendChild(contentHeadline);
        contentWrapper.appendChild(contentImg);
        contentWrapper.appendChild(contentText);
        
        //add stuff to content
        content.appendChild(headline);
        content.appendChild(contentWrapper);
        return;
        
    };

export{renderMenu};