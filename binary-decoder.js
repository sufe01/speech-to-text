const binaryCode = `
    01110100
    01110101
    00100000
    01100010
    01100001
    01100001
    01111010
    00100000
    01100001
    00100000
    01101010
    01100001
    00100000
    01110111
    01100001
    01110010
    01101110
    01100001
    00100000
    01100010
    01100001
    01110010
    01100001
    00100000
    01110000
    01100101
    01100101
    01110100
    01101111
    01101110
    00100000
    01100111
    01100001
`;

function binaryToString(input) {
    return input.trim().split('\n').reduce((string, binary) => {
        return (string += String.fromCharCode(parseInt(binary.trim(), 2)));
    }, '');
}

const result = binaryToString(binaryCode);
console.log(result);
