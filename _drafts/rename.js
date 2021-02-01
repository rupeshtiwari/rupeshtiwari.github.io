const fs = require('fs');
const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file.endsWith('.html')) {
    console.log(file);
    fs.renameSync(file, file.replace('.html', '.md'), (err) => {
      console.log(err);
    });
  }
}