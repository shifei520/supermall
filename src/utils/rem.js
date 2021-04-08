const baseSize = 32;
function setRem() {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  let htmlDom = document.querySelector("html");
  htmlDom.style.fontSize = 16 + "px";
  // const scale = document.documentElement.clientWidth / 750;
  // document.documentElement.style.fontSize =
  // baseSize * Math.min(scale, 2) + "px";
}
setRem();
window.onresize = function() {
  setRem();
};
