const convert = document.querySelector("#convert-btn");

const text = document.querySelector("#text");

convert.addEventListener("click", () => {
    camelize(text.value);
    pascalize(text.value);
    snakaize(text.value);
    ssnakaize(text.value);
    kebabaize(text.value);
    skebabaize(text.value);

})

function camelize(str) {
    let newtext = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' ');
    let camtext = newtext.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    document.querySelector("#camel-case").textContent = camtext;
}

function pascalize(str) {
    let pascaltext = (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
    document.querySelector("#pascal-case").textContent = pascaltext;
}

function snakaize(str) {
    let snaketext = str.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '_').toLowerCase();
    document.querySelector("#snake-case").textContent = snaketext;
}

function ssnakaize(str) {
    let ssnaketext = str.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '_').toUpperCase();
    document.querySelector("#screaming-snake-case").textContent = ssnaketext;
}

function kebabaize(str) {
    let kebtext = str.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '-').toLowerCase();
    document.querySelector("#kebab-case").textContent = kebtext;
}

function skebabaize(str) {
    let skebtext = str.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '-').toUpperCase();
    document.querySelector("#screaming-kebab-case").textContent = skebtext;
}


