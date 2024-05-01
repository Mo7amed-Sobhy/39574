

document.querySelectorAll('.service-btn').forEach((item,index) =>{
     item.addEventListener('click',()=>{
        let text_content = document.querySelector('.desc-'+(index+1)).textContent
        alert(text_content)
     })
    })