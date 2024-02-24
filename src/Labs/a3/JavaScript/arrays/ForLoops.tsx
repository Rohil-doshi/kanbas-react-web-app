let stringArray1 = ['string1', 'string3'];
let stringArray2 = [];
for (let i = 0;i < stringArray1.length; i++) {
  const string1 = stringArray1[i];
  stringArray2.push(
    string1.toUpperCase());
}

// concat all the elements in string array 2
let str = stringArray2.join()

function ForLoops(){
return(
    <div>
        <h3> Looping Through Arrays</h3>
        stringArray2 = {str + ""}
    </div>
);
};

export default ForLoops