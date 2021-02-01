var fs = require('fs');
const baseDir = '../_posts';

var path = require('path');
var fs = require('fs');

var getMostRecent = function (dir, callBackFn) {
  var dir = path.resolve(dir);
  fs.readdir(dir, function (err, files) {
    var sorted = files
      .map(function (v) {
        var filepath = path.resolve(dir, v);
        return {
          name: v,
          time: fs.statSync(filepath).mtime.getTime(),
        };
      })
      .sort(function (a, b) {
        return b.time - a.time;
      })
      .map(function (v) {
        return v.name;
      });

    if (sorted.length > 0) {
      callBackFn(null, sorted[0]);
    } else {
      callBackFn('There is not files in the given directory');
    }
  });
};

getMostRecent(baseDir, function (err, recent) {
  if (err) console.error(err);
  console.log(recent);
});
