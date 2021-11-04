function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }
    const l = `${x}`.split("")
    for (let index = 0; index < `${x}`.length/2; index++) {
        if (l[index] != l[l.length - index -1]) {
            return false
        }
    }
    return true
};
console.log(isPalindrome(-11));

