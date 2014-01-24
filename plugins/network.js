var fs = require("fs");

exports.get = function(callback){
    return fs.readFile('/proc/net/dev', 'utf-8', function (err, meminfo) {
          if (err) throw err;
          var lines = meminfo.split("\n");
          var info = {};
          for(var i=0;i<lines.length; i++){
            var aline = lines[i].split(':');
            if(!aline[1]) continue;
            var key = aline.shift();
            key = key.replace(/ /g,"");
            aline = aline[0].replace(/\s+/g, ":");
            aline = aline.split(":");
            info[key] = {
                received_bytes: aline[0],
                received_packets: aline[1],
                received_errors: aline[2],
                sent_bytes: aline[8],
                sent_packets: aline[9],
                sent_errors: aline[10]
            };
          }

          return callback(info);
    });
};
