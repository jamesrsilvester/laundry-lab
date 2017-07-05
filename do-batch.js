var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];


function clean(clothing_item){
    // return clean_clothing_item;
    return clothing_item.replace("*","");
}

function mend(clothing_item){
    // return clean_clothing_item;
    return clothing_item.replace("/","");
}

function iron(clothing_item){
    return clothing_item.toLowerCase();
}


/* YOUR CODE HERE */
function doBatch(clothes) {
    return iron(mend(clean(clothes)));
}



/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
