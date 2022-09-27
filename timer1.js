const args = process.argv.slice(2);

const timerBeep = function(args) {
  for (const num of args) {
    if (num >= 0 && num !== isNaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000);
    } else {
      console.log("You must enter a number higher or equal to 0");
    }
  }
};

timerBeep(args);

