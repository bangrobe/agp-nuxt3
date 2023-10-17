export function getAllImageUrls(content) {
    let images = [];
    const regex = /<img.*?src="(.*?)"/g;
    let match;
    while ((match = regex.exec(content))) {
        // if (match[1].startsWith("https://api.agirlpic.com")) {
        //     match[1] = "/default" + match[1].slice("https://api.agirlpic.com".length);
        // }
        // if (match[1].startsWith("https://blogger.googleusercontent.com")) {
        //     match[1] = "/google" + match[1].slice("https://blogger.googleusercontent.com".length);
        // }
        images.push(match[1]);
    }
    return images;
}

export function getImagesUrls(content) {
    let DOMParsing = new DOMParser()
    let parsed = DOMParsing.parseFromString(content, "text/html")
    let images = [];
    // Now you can use querySelector to target the wanted element
    // or querySelectorAll and a loop for multiple elements
    let imgURL = parsed.querySelectorAll("img");
    imgURL.forEach(element => {
        images.push(replaceImageUrlByAlias(element.src));
    });
    return images;
}