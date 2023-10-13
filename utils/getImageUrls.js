export function getAllImageUrls(content) {
    let images = [];
    const regex = /<img.*?src="(.*?)"/g;
    let match;
    while ((match = regex.exec(content))) {
        images.push(match[1]);
    }
    return images;
}