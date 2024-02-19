function removeHtmlTags(str) {
    if (!(str && str.length > 0)) {
        return  str;
    }
    return str.replace(/<[^>]*>/g, "");
}
function CleanString(str) {
        if (!(str && str.length > 0)) {
            return  str;
        }
        let withOutHtml = removeHtmlTags(str);
        let trimmed = withOutHtml.trim();
        let htmlEntityNormalized = trimmed.replace(/&nbsp;/ig, " ");
        let numericHtmlEntityNormalized = htmlEntityNormalized.replace(/&#160;/ig, " ");
        if (numericHtmlEntityNormalized.length > 1000)
        {
            numericHtmlEntityNormalized = numericHtmlEntityNormalized.slice(1, 1000);
        }
        return numericHtmlEntityNormalized;

}

console.log('Start');
TestFunction('', '');
TestFunction(null, null);
TestFunction('test', 'test');
TestFunction(' test ', 'test');
TestFunction('<h1>test</h1>', 'test');
TestFunction('test&nbsp;1', 'test 1');
TestFunction('test&#160;1', 'test 1');

TestFunction('', '', removeHtmlTags);
TestFunction(null, null, removeHtmlTags);




console.log('End');



//make the function that TestFunction executes dynamic
function TestFunction(input, expected, functionName = CleanString) {
    let result = functionName(input);
    //simplify
    input = labelAsEmptyORNullString(input);
    result = labelAsEmptyORNullString(result);
    expected = labelAsEmptyORNullString(expected);

    if (result === expected) {
        console.log("✔️ Given: ", input, functionName," should return: ", expected);
    } else {
        console.log("❌ Given: ", input, functionName," should return: ", expected, " but returned: ", result);
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
