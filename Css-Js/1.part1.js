try {
  var ua = window.navigator.userAgent;
  if (ua.match(/DJI-App-Ios/gi) || ua.match(/DJI-App-Android/gi)) {
    var htmlDomClassList = document.documentElement.classList;
    htmlDomClassList.add("is-store-app");
  }
} catch (e) {
  console.log(e);
}
