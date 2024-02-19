class StringManipulator {
    constructor(str) {
        this.str = str;
    }

    removeHtmlTags() {
        if (!(this.str && this.str.length > 0)) {
            return this;
        }
        this.str = this.str.replace(/<[^>]*>/g, "");
        return this; // Return the object itself to allow chaining
    }

    replaceHtmlEntities() {
        if (!(this.str && this.str.length > 0)) {
            return this;
        }
        this.str = this.str.replace(/&#160;|&nbsp;/g, " ");
        return this; // Return the object itself to allow chaining
    }

    trim() {
        this.str = this.str.trim();
        return this; // Enable chaining for trim as well
    }

    limitLength(maxLength) {
        if (this.str.length > maxLength) {
            this.str = this.str.substring(0, maxLength);
        }
        return this; // Enable chaining for length limiting
    }

    toString() {
        return this.str; // Return the final string
    }
}
function CleanString(str) {
    if (!str) return str;
    return new StringManipulator(str)
        .removeHtmlTags()
        .trim()
        .replaceHtmlEntities()
        .limitLength(1000)
        .toString();
}

console.log('Start');
TestFunction('', '');
TestFunction(null, null);
TestFunction('test', 'test');
TestFunction(' test ', 'test');
TestFunction('<h1>test</h1>', 'test');
TestFunction('test&nbsp;1', 'test 1');
TestFunction('test&#160;1', 'test 1');


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
