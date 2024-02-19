const spinner = ["|","/","-","\\","|","/","-","\\","|"];

let delay = 100; //set delay at 100 as the default

for (const spin of spinner) {// extract each character of the array
  setTimeout(() => {
    process.stdout.write(`\r${spin}`);//writes the current variable in use
  }, delay);
  delay += 200; //adds 300 seconds after each item
}