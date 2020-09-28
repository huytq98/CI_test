function merge2string(s1, s2) {
    let i, l = Math.min(s1.length, s2.length),
        merge = "";

    for( i = 0; i < l; i++) {
        merge += s1[i] + s2[i];
    }
    return merge + s1.slice(i) + s2.slice(i);

}

console.log(merge2string("123", "abc"))
console.log(merge2string("abc", "1234"))