const Socket=new WebSocket('ws://localhost:3000')

function sendMessage(e){
    e.preventDefault()
    const input=document.querySelector('input')
    if(input.value){
        Socket.send(input.value)
        input.value=""
    }
    input.focus()
}

document.querySelector('form')
     .addEventListener('submit',sendMessage)

//Listen for message
Socket.addEventListener("message",({data})=>{
    const li=document.createElement('li')
    li.taxtContent=data;
    document.querySelector('ul').appendChild(li)
})     