const shortenText = (txt) => {
  return txt.split(" ").slice(0, 3).join("");
};
export { shortenText };
