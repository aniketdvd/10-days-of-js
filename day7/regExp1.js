function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    let re = new RegExp("^[a].*[a]$|^[e].*[e]$|^[i].*[i]$|^[o].*[o]$|^[u].*[u]$/i");
    /*
     * Do not remove the return statement
     */
    return re;
}
