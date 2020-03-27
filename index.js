const list = document.querySelector('#list');

const addItem = (ev) => {
    ev.preventDefault()
    var input = form.querySelector('input').value;
    if (input != '') {
        var el = document.createElement('li');
        el.setAttribute('class', 'list-item')
        var domString = `<p>${input}</p><div class="buttons"><button>check</button><button>delete</button></div>`;
        el.addEventListener("click", e => {
            if(e.target) { 
                if (e.target.innerHTML == "delete") {
                    e.target.parentElement.parentNode.remove();
                } else if (e.target.innerHTML == "check") {
                    e.target.parentElement.parentElement.querySelector('p').style.textDecoration = "line-through";
                }
            }
        }) 
        el.innerHTML = domString;
        list.prepend(el)
        form.querySelector('input').value = ''
    }
}

const form = document.querySelector('#form');
form.addEventListener('submit', addItem);