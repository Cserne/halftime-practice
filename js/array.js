const array1 = ["alma", "körte", "ilyenek", "sütőtök"];
const array2 = ["alma2", "körte2", "ilyenek2", "sütőtök2"];

function addValueToEndOfArray(arr, val) {
    arr.push(val);
    return arr;
}

//console.log(addValueToEndOfArray(["alma", "körte", "ilyenek", "sütőtök"], "word"));

///////////////////

let a = 1;
let b = a;
a = 2;
b = 5;
console.log(a, " " , b);

let c = {
    key: "value",
    key2: {
        subkey: "value3"
    }
};

let e = {
    key: "value"
};

//let d = c;
//let d = {...c}; //Belemásolja c tartalmát ebbe az új objektumba. Ez is shallow copy, mert a belső réteget(beágyazott objektumokat, tömböket) már nem másolja.
//let d = Object.assign({}, c); //Itt is új objektum jött létre. Ez is shallow copy, mert a belső réteget(beágyazott objektumokat, tömböket) már nem másolja.

//let d = JSON.parse(JSON.stringify(c)); //Ez ugyanaz, mint az alatta lévő 2 sor együtt.
let convertCtoString = JSON.stringify(c);
let d = JSON.parse(convertCtoString);
console.log("c típusa:", typeof c);
console.log("d típusa:", typeof d);
console.log("convertCtoString típusa:", typeof convertCtoString);

/*
c.key = "value1";
c.key2.subkey = "value4";
d.key = "value2";
d.key2.subkey = "value5";

console.log(c, " ", d);
*/
//console.log(c === d);

//console.log({} === {});  //Ennek false lesz az eredménye!
//console.log(c === e); //Azért false, mert két objektumot hasonlít össze!
//console.log(c.key === e.key); //Ez azért lesz true, mert itt már stringeket hasonlít össze! Ez ugyanaz, mintha ezt írnám: console.log("value" === "value");
//console.log("value" === "value");
//console.log("alma" === "alma");
function createNewArrayWithValue(arr, val) {
    const newArray = [...arr, val]; //Ez akkor jó, ha nincsenek nested dolgok az arr-ben.
    /*
    const newArray = JSON.parse(JSON.stringify(arr));
    newArray.push(val); //deep copy esetén
    */
    return newArray;
}

//console.log(createNewArrayWithValue(array1, "word"));

function addArrayToArray(arr1, arr2) {
    /*
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }
    */
   /*
    for (const item of arr1) {
       arr2.push(item);
   }
   */
  // return arr2;

  return arr1.concat(arr2); //Itt az eredeti array-ek maradnak!
}
console.log(addArrayToArray(array1, array2));
console.log(array1, " ", array2);