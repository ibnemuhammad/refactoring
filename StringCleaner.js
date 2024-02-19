function CleanString(str) {
        if (str && str.length > 0) {
            var StrippedString = str.replace(/(<([^>]+)>)/ig, "");
            StrippedString = StrippedString.trim();
            StrippedString = StrippedString.replace(/&#160;/ig, " ");
            StrippedString = StrippedString.replace(/&nbsp;/ig, " ");
            if (StrippedString.length > 1000)
                return StrippedString.slice(1, 1000);
            return StrippedString;
        }
        return str;
}

console.log('Start');
// run tests with expected result and input values
TestStrippedString('test', 'test');
TestStrippedString('<h1>test</h1>', 'test');
TestStrippedString('test&nbsp;1', 'test 1');

console.log('End');



function TestStrippedString(input, expected) {
    var result = CleanString(input);
    if (result === expected) {
        console.log("Test passed for input ", input, " expected ", expected, " and result ", result);
    } else {
        console.log("Test failed for input ", input, " expected ", expected, " and result ", result);
    }
}
