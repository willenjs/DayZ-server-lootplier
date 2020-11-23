const reader = require("readline-sync");
const fs = require('fs');
const { create, convert } = require('xmlbuilder2');


function readLootMultiplier() {
    return reader.question("I want loot to be increased by X times: ");
}

function getTypesAsJson(filePath) {
    var xmlStr = fs.readFileSync("./bkp/types.xml", "utf-8");
    const obj = convert(xmlStr, { format: "object" });
    return obj;
}

function increaseLoot(types, multiplier) {
    types.types.type = types.types.type.map(function(item){
        item.nominal = item.nominal * multiplier;
        item.min = Math.floor(item.nominal/2);
        return item;
    });
    return types;
}

function generateUpdatedFile(jsonObject) {
    var xml = create(jsonObject, { version: '1.0', encoding: "UTF-8", standalone: true })
                .dec({ 'encoding': 'UTF-8', standalone: true })
                .end({ prettyPrint: true });

    fs.writeFile("./lastedit/types.xml", xml, function(err, data) {
      if (err) console.log(err);
      console.log("successfully written our update xml to file");
    });
}

const lootTimes = readLootMultiplier();
let jsonFile = getTypesAsJson('./bkp/types.xml');
jsonFile = increaseLoot(jsonFile, lootTimes);
generateUpdatedFile(jsonFile);