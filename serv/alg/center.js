function centerNum(arr1, arr2) {
    let l1 = arr1.length;
    let l2 = arr2.length;
    let center = (l1 + l2) / 2;
    let is_js = center % 1 !== 0;

    let tmp = [];
    for (let i = 0; i < center + 1; i++) {
        if (!l1) {
            tmp.push(arr2.shift());
        } else if (!l2) {
            tmp.push(arr1.shift());
        } else if (arr1[0] < arr2[0]) {
            tmp.push(arr1.shift());
        } else {
            tmp.push(arr2.shift());
        }
    }

    if (is_js) { return tmp[tmp.length - 1] };
    return (tmp[tmp.length - 1] + tmp[tmp.length - 2]) / 2;
}

let num=centerNum([],[1]);
console.log(num);