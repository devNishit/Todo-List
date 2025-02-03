let ul = document.querySelector(".container ul");
let addBtn= document.querySelector("#addBtn");
let add= document.querySelector("#add");

addBtn.addEventListener('click',addTask);

ul.addEventListener('click',tikAndDelete)

function tikAndDelete(evt){
    if((evt.target.tagName=="I") || (evt.target.tagName=="BUTTON")) {
        
            if(evt.target.parentElement.tagName=="BUTTON"){
                evt.target.parentElement.parentElement.remove();
            } else{
                evt.target.parentElement.remove();
            }
    }
    
}

function addTask(){
    if(add.value==""){
        alert("Plase enter task");
    } else{
        let li=document.createElement('li');
        let chekbox=document.createElement('input');
        let span= document.createElement('span');
        let button=document.createElement('button');
        let i=document.createElement('i');

        chekbox.setAttribute('type','checkbox');

        span.innerText=add.value;

        button.append(i);
        i.classList.add("fa-solid");
        i.classList.add("fa-trash");

        
        li.append(chekbox,span,button);
        ul.append(li);

        add.value="";
    }
}

