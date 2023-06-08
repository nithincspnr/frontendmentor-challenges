import './style.scss';


function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello world';
    element.classList.add('hello');

    return element;
}

console.log(module.hot)

document.body.appendChild(component());