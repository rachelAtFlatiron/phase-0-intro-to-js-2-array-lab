// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = (cat) => {
    cats.push(cat);
}

let destructivelyPrependCat = (cat) => {
    cats.unshift(cat)
}

let destructivelyRemoveLastCat = () => {
    cats.pop()
}

let destructivelyRemoveFirstCat = () => {
    cats.shift();
}

let appendCat = (name) => {
    return [...cats, name]
}

let prependCat = (name) => {
    return [name, ...cats]
}

let removeLastCat = () => {
    return cats.slice(0, cats.length - 1);
}

let removeFirstCat = () => {
    return cats.slice(1, cats.length);
}