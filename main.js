import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen(chalk.bgBlue.green('fortnite'), {padding: 1}));
console.log(boxen(chalk.bgRed.blue('fortnite'), {padding: 1, margin: 3, borderStyle: 'arrow', backgroundColor: "blue", borderColor: "red"}));
console.log(boxen(chalk.bgBlue.magenta('fortnite'), {padding: 1}));
console.log(boxen('fortnite', {title: 'fortnite', titleAlignment: 'center', backgroundColor: "red", borderColor: "green"}));
console.log(boxen('fortnite', {padding: 1, margin: 1, borderStyle: 'classic'}));
console.log(boxen(chalk.bgYellow.red('Fortnite'), {padding: 1}));
