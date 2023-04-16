function findMatching(arrays, string) {
    return arrays.filter(function (array) { return array.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch(arrays, string) {
    return arrays.filter(function (array) { return array.toLowerCase().substring(0, string.length) === string.toLowerCase() })
}

function matchName(arrays, string) {
    return arrays.filter( function (array) { return array.name === string})
}
