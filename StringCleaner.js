function CleanString(str) {
        if (!(str && str.length > 0)) {
            return  str;
        }
        let withOutHtml = str.replace(/(<([^>]+)>)/ig, "");
        let trimmed = withOutHtml.trim();
        let htmlEntityNormalized = trimmed.replace(/&nbsp;/ig, " ");
        withOutHtml = htmlEntityNormalized.replace(/&#160;/ig, " ");
        if (withOutHtml.length > 1000)
            return withOutHtml.slice(1, 1000);
        return withOutHtml;

}

console.log('Start');
// run tests with expected result and input values
TestStrippedString('', '');
TestStrippedString(null, null);
TestStrippedString('test', 'test');
TestStrippedString(' test ', 'test');
TestStrippedString('<h1>test</h1>', 'test');
TestStrippedString('test&nbsp;1', 'test 1');
TestStrippedString('test&#160;1', 'test 1');

console.log('End');



function TestStrippedString(input, expected) {
    let result = CleanString(input);
    //simplify
    input = labelAsEmptyORNullString(input);
    result = labelAsEmptyORNullString(result);
    expected = labelAsEmptyORNullString(expected);

    if (result === expected) {
        console.log("Passed Given: ", input, " CleanString should return: ", expected);
    } else {
        console.log("Failed Given: ", input, " CleanString should return: ", expected, " but returned: ", result);
    }
}

function labelAsEmptyORNullString(input) {
    if (input === null) {
        return 'undefined';
    }
    if (input === '') {
        return 'EmptyString';
    }
    return input;
}
