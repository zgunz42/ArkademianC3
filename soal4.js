function cetak_gambar() {
  const characters = ['P','R','O','G','R','A','M','M','E','R'];
  const divider = ' = ';

  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];
    let column = '';
    for (let position = 0; position < characters.length; position++) {
      if(Math.abs(characters.length - position) == index + 1 || index == position) {
        column += ' ' + character + ' ';
      }else {
        column += divider;
      }
    }
    console.log(column);
  }
}

exports.cetak_gambar = cetak_gambar;