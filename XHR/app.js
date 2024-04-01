const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
  console.log(this.responseText);
});
firstReq.addEventListener('error', () => {
  console.log('ERROR!!!!')
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();

setTimeout(function () {
  asdfllkjl;
}, 3000);
