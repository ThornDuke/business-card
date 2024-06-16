import boxen from 'boxen';
import clear from 'clear';
import { output } from './src/output.js';

const borderParams = {
  textColor: 'white',
  // borderColor: 'green',
  borderStyle: 'bold',
  dimBorder: false,
  padding: 1,
  margin: 0,
};

clear();
console.log(boxen(output, borderParams));
