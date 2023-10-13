export const removeTags = (str) => {

    str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
}

export const removeHTMLCommentAndBlankLines = (str) => {
    let result;
    result  = str.replace(/<!--[\s\S]*?-->/g, "");
    result = result.replace(/\n/g, "");
    return result;
}