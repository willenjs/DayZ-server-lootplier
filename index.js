const reader = require("readline-sync");
const fs = require('fs');

const options = {compact: true, ignoreComment: true, spaces: 4};

let lootTimes = 1;

lootTimes = reader.question("I want loot to be increased by X times: ");