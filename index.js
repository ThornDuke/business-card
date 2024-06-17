import boxen from 'boxen';
import clear from 'clear';
import { output } from './src/output.js';

export default function card() {
  const borderParams = {
    borderStyle: 'round',
    dimBorder: true,
    padding: 1,
    margin: 1,
  };

  clear();
  console.log(boxen(output, borderParams));
}
