import boxen from 'boxen';
import clear from 'clear';
import { output } from './src/output.js';

const borderParams = {
  // borderColor: 'green',
  borderStyle: 'round',
  // single | double | round | bold | singleDouble | classic | arrow | none
  dimBorder: true,
  // title: '',
  // titleAlignment: ''
  // left | center | right
  padding: 1,
  margin: 1,
};

clear();
console.log(boxen(output, borderParams));
