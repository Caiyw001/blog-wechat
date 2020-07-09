function longestPalindrome(s) {
    // write code here
    if (s.length < 2) return s;
    let min_start = 0, maxLength = 1;
    function func(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let tmp_len = right - left + 1;
            if (tmp_len > maxLength) {
                maxLength = tmp_len;
                min_start = left;
            }
            left--;
            right++;
        }

    }
    for (let i = 0; i < s.length; i++) {
        if (s.lenth - i < maxLength / 2) break;
        // abba
        func(i, i + 1);
        // abcba
        func(i - 1, i + 1);
    }
    return s.substr(min_start, maxLength)
}

let str = longestPalindrome('abba');
console.log(str);