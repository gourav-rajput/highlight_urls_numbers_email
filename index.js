const ifUrl = (str) => {
  const result = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return result ? true : false;
};

const ifNumber = str => {
  return str === 0 || typeof str === "number"
};

const ifEmail = (str) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(str).toLowerCase());
};

const getHTML = (str) => {
  const stringArr = str.split(" ");
  let pTag = document.createElement("p");
  stringArr.forEach(currStr => {
    let spantag = document.createElement("span");
    if(ifUrl(currStr)) {
      spantag.style.color = "green";
    } 
    if(ifNumber(currStr)) {
      spantag.style.color = "yellow";
    } 
    if(ifEmail(currStr)) {
      spantag.style.color = "red";
    } 
    if(spantag.style.color) {
      spantag.innerText = ` ${currStr}`;
      pTag.append(spantag);
    } else {
      pTag.append(` ${currStr}`);
    }
  });
  return pTag;
};