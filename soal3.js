function cetak(count) {
  var items = [];


function generateRandomString(){
  const character = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var maxLength = 32;
  var randomString = '';

  for(var i = 0; i <= maxLength; i++) {
    var indexGen = Math.floor(Math.random(character.length) * Math.floor(character.length));
    randomString += character[indexGen];
  }

  return randomString;
  }


  while(count > 0 ){
  	var item = generateRandomString();
    if(!items.includes(item)){
    	items.push(item);
      console.log(item);
    count--;
    }
  }
}

exports.cetak = cetak;