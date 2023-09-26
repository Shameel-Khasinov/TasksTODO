//document.body.style.backgroundColor = "black";
document.body.style.textAlign = "center";
document.body.style.margin = "rifgt";

const input = document.getElementById("input");
const button = document.getElementById('button');
button.addEventListener('click', () => {
    button.style.backgroundColor = 'blue';
            setTimeout(() => {
                button.style.backgroundColor = 'whitesmoke'
            }, 300)
})

const form = document.getElementById('form');

const ul = document.getElementById('ul');
ul.style.listStyleType = "none";

function remove(e) {
    e.target.parentElement.style.backgroundColor = "red"
    setTimeout(() => {
        e.target.parentElement.remove()
        
    }, 300);
    
}

form.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault();

    if (input.value.trim()) {

        const li = document.createElement("li");
        
        const removeBtn = document.createElement("button");
        removeBtn.className = 'button2'
        removeBtn.textContent = "x";
        removeBtn.addEventListener('click', remove);

        const v = document.createElement('input');
        v.type = "checkbox";
        v.className = "v";
        //v.textContent = "✔";
        
        v.addEventListener('click', () => {
            li.style.backgroundColor = 'orange';
            setTimeout(() => {
                li.style.backgroundColor = 'green'
            }, 300);
        })

        li.textContent = input.value;
        li.className = "li"
        li.append(removeBtn);
        li.prepend(v);
        ul.prepend(li);
        input.value = "";

    }
})

