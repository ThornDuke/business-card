import boxen from 'boxen';
import clear from 'clear';
import chalk from 'chalk';
import { output } from './src/output.js';

export default function card() {
  const borderParams = {
    backgroundColor: 'black',
    // borderBackgroundColor: 'black',
    // borderStyle: 'round',
    borderStyle: 'none',
    dimBorder: true,
    padding: 1,
    margin: 1,
  };

  clear();
  console.log(boxen(output, borderParams));
}
