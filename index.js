var convert = require('xml-js');
const fs = require('fs');
var options = {compact: true, ignoreComment: true, spaces: 4};

// this example reads the file synchronously
// you can read it asynchronously also
let xml_string = fs.readFileSync("./bkp/types.xml", "utf8");

var resultJson = convert.xml2json(xml_string, options);
console.dir(resultJson);

var resultXml = convert.json2xml(resultJson, options);
console.log(resultXml);

fs.writeFileSync('./lastedit/types.xml', resultXml)