var task_id = 1;

function addTask() {

  task = document.getElementById("add_task").value;
  document.getElementById("add_task").value = '';

  if(task === '')
    alert("Please enter proper task");

  else
  {

  var ul = document.getElementById("tasks_list");

  var li = document.createElement("li");
  li.setAttribute("id",task_id);

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  checkbox.addEventListener( 'change', function() {
    if(this.checked) {

        var text = this.nextSibling;
        text.style.textDecoration = "line-through";
        text.style.textDecorationColor = "red";
        text.style.color = "red";
    
    } 
    
    else {
      var text = this.nextSibling;
      text.style.textDecoration = "none";
      text.style.color = "white";
    }
});

  var div = document.createElement("div");
  div.setAttribute("class","alignment"); 

  div.appendChild(checkbox);

  var span =document.createElement("span");
  span.innerHTML = task;
  div.appendChild(span);

  var btn = document.createElement("button");
  btn.innerHTML = "X";
  div.appendChild(btn);

  li.appendChild(div);

  ul.appendChild(li);

  var br = document.createElement("br");
  ul.appendChild(br);

  task_id++;

  btn.addEventListener("click",function() {

    var target = this.parentNode.parentNode.id;
    var element = document.getElementById(target);
    var br = element.previousSibling;

    element.parentNode.removeChild(element);
    br.parentNode.removeChild(br);

  })

}
  
}
