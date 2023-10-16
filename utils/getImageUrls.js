export function getAllImageUrls(content) {
    let images = [];
    const regex = /<img.*?src="(.*?)"/g;
    let match;
    while ((match = regex.exec(content))) {
        if (match[1].startsWith("https://api.agirlpic.com")) {
            match[1] = "/default" + match[1].slice("https://api.agirlpic.com".length);
        }
        if (match[1].startsWith("https://blogger.googleusercontent.com")) {
            match[1] = "/google" + match[1].slice("https://blogger.googleusercontent.com".length);
        }
        images.push(match[1]);
    }
    return images;
}