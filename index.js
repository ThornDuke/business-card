import boxenb from 'boxen-better';
import clear from 'clear';
import { output } from './src/output.js';

export default function card() {
  const borderParams = {
    backgroundColor: 'black',
    borderBackgroundColor: 'black',
    borderStyle: 'round',
    dimBorder: true,
    padding: 1,
    margin: 1,
  };

  clear();
  console.log(boxenb(output, borderParams));
}
