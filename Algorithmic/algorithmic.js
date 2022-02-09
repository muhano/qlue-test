function algorithmicRec(target, current_sum, start, result, output) {
    if (current_sum === target) {
        output.push(result.slice());
    }

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            result.push(i);
            algorithmicRec(target, temp_sum, i, result, output);
            result.pop();
        } else {
            return;
        }
    }
};

function algorithmic(target) {
    let output = [];
    let result = [];
    algorithmicRec(target, 0, 1, result, output);
    return output;
};

let n = 5;
console.log(algorithmic(n));

