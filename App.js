const addBtn = document.querySelector(".add-btn");
const textBox = document.querySelector("#input-field");
let taskContainer = document.querySelector(".task-section");
const addTask = ()=>{
    if(textBox.value ===''){
        alert("Please Enter Task")
    }else{
        let userInput = textBox.value;
        let div = document.createElement("div");
        taskContainer.appendChild(div);
        let inputCheck = document.createElement("input");
        inputCheck.type="checkbox";
        inputCheck.classList = "check-input";
        div.appendChild(inputCheck);
        let li = document.createElement("li");
        div.appendChild(li);
        li.innerHTML = userInput; 
        textBox.value = '';
        let checkBoxes = inputCheck;
        let listItems = li;
            checkBoxes.addEventListener("change",()=>{
                
                if(listItems){
                    if(checkBoxes.checked){
                    listItems.style.textDecoration = "line-through";
                    }else{
                    listItems.style.textDecoration = "none";
                    }
                }
                // Addition Features
                if(checkBoxes.checked){
                    let deleteItemContainer = document.querySelector(".delete-section");
                    let itemsDiv = document.createElement("div");
                    let itemsLi = document.createElement("li");
                    let itemsBtn = document.createElement("button");
                    deleteItemContainer.appendChild(itemsDiv);
                    itemsDiv.appendChild(itemsLi);
                    itemsDiv.appendChild(itemsBtn);
                    itemsBtn.textContent = "Delete"
                    itemsDiv.classList = ("items-div");
                    itemsLi.classList = ("items-li");
                    itemsBtn.classList =("items-btn");
                    itemsLi.textContent  = li.innerHTML;
                    div.remove();
                    itemsBtn.addEventListener("click",()=>{
                    itemsDiv.remove();
                })
                }
                
            })
    }
}
addBtn.addEventListener("click",()=>{
    addTask();
})


