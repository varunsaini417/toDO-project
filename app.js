let input=prompt("What do you want to do?")
let todo=[1];
while(input!=="quit" && input!=="q"){
   
   if(input==="new"){
       let listItem =prompt("Enter the todo iteem!!")
       todo.push(listItem);
   }else if(input==="List"){
       console.log(todo)
   }else if(input==="delete"){
       
   }



   input= prompt("What do you want to do?")
}
