function CleanString(str) {
        if (str && str.length > 0) {
            var StrippedString = str.replace(/(<([^>]+)>)/ig, "");
            StrippedString = StrippedString.trim();
            StrippedString = StrippedString.replace(/&nbsp;/ig, " ");
            StrippedString = StrippedString.replace(/&#160;/ig, " ");
            if (StrippedString.length > 1000)
                return StrippedString.slice(1, 1000);
            return StrippedString;
        }
        return str;
}

console.log('Start');
// run tests with expected result and input values
TestStrippedString('', '');
TestStrippedString(null, null);
TestStrippedString('test', 'test');
TestStrippedString('<h1>test</h1>', 'test');
TestStrippedString('test&nbsp;1', 'test 1');
TestStrippedString('test&#160;1', 'test 1');

console.log('End');



function TestStrippedString(input, expected) {
    var result = CleanString(input);
    if (result === expected) {
        console.log("Passed Given: ", input, " CleanString should return: ", expected);
    } else {
        console.log("Failed Given: ", input, " CleanString should return: ", expected, " but returned: ", result);
    }
}
