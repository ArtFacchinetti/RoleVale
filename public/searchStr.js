import data from './script.js';
import loopThroughSearch from './render.js'

function searchStr(str) {
    let filtered = [];
    const lower = str.toLocaleLowerCase()

    for (let i = 0; i < data.length; i++) {
        const obj = data[i];

        for (const [key, value] of Object.entries(obj)) {
            if (typeof (value) == "object") {
                console.log("Object: ", value)

                value.forEach(j => {
                    if (j.toLocaleLowerCase().includes(lower) &&
                        lower.trim() !== "") {

                        console.log("Array: ", j)

                        filtered.push(obj);
                    }
                    return;
                });
                break
            }
            if (lower.trim() !== "" &&
                typeof (value) !== "number") {
                    console.log('Value: ', value, ' Type: ', typeof(value))
                if (value.toLocaleLowerCase().includes(lower)) {
                    filtered.push(obj);
                    break;
                }
            }

        }
    }

    return filtered;
}

const searchBarListener = document.getElementById('search-bar').addEventListener('input', (e) => {
    console.log('STIRNG: ', e.target.value)
    let filteredSearch = searchStr(e.target.value);
    loopThroughSearch(filteredSearch);
})
