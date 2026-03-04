let sentence = "thequickbrownfoxjumpsoverthelazydog";

function pangram(sentence) {

    const set = new Set(sentence);

    return set.size === 26;
}

console.log(pangram(sentence));