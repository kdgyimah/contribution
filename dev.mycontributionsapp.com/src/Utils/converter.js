import showdown from "showdown";

const converter = new showdown.Converter({ openLinksInNewWindow: true });

export default converter;
