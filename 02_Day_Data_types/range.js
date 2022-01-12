let range = function ranger(start, end) {
    let vector = [];
    for (let i = start; i < end; i++) {
        vector.push(i);
    }
    return vector;
}

module.exports = {
    range
}
