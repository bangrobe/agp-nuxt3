export const replaceImageUrlByAlias = (url) => {
    let imageUrl;
    if (url.startsWith("https://api.agirlpic.com")) {
        imageUrl = "/default" + url.slice("https://api.agirlpic.com".length);
    }
    if (url.startsWith("https://blogger.googleusercontent.com")) {
        imageUrl = "/google" + url.slice("https://blogger.googleusercontent.com".length);
    }
    if(!imageUrl) {
        return url;
    }
    return imageUrl;
}