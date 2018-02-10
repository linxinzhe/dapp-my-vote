function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Hello browserify';

    return element;
}

document.body.appendChild(component());