import jsdom from 'jsdom';
export default defineEventHandler(async (event) => {
  
  const { JSDOM } = jsdom;
  const slug = event.context.params.article;
  const content = await $fetch(`/proxy/wp/v1/post-details-by-slug?slug=${slug}`);
  const dom = new JSDOM(content.post_content);
  const imagesSelector = dom.window.document.querySelectorAll("img");
  let images = [];
  imagesSelector.forEach(element => {
    images.push(element.src);
  })
  return images
})