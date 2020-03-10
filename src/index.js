document.addEventListener("DOMContentLoaded", () => {
  // your code here
   getForm().addEventListener("submit", processFormSubmit)
});

function getForm() {
  return document.querySelector('form')
}

function processFormSubmit(event) {
  
  event.preventDefault()
  let newDescript = event.target.children[1].value
  let newPrio = event.target.children[3].value
  event.target.reset()
  return makeNewLi(newDescript, newPrio)
  
  
}

function makeNewLi(task, otherTask) {

  let target = document.getElementById('tasks')
  let newLi = document.createElement('li')

  newLi.innerText = task
  newLi.className = otherTask
  let idCount = document.getElementById('tasks').childElementCount
  newLi.id = `todos-list-${idCount + 1}`


  if (newLi.className == "high") {
    target.insertBefore(newLi, target.childNodes[0])
  } else if (newLi.className == "medium") {
    target.insertBefore(newLi, target.child )
  } else {
    target.appendChild(newLi)
  }

  // target.appendChild(newLi)
  
}
