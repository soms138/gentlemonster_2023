const tab_title = document.querySelectorAll('.tab_title a')
const tab_contents = document.querySelectorAll('.tab_contents > div')
const radio = document.querySelectorAll('.radio label')
const order_contents = document.querySelectorAll('.order_contents > div')
console.log(tab_title,tab_contents,radio,order_contents)
for(let i of tab_contents){i.style.display = 'none'}
tab_contents[0].style.display = 'block'
tab_title.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of tab_title){i.classList.remove('active')}
        t.classList.add('active')
                for(let i of tab_contents){i.style.display = 'none'}
                tab_contents[i].style.display = 'block'
    })
})
for(let i of order_contents){i.style.display = 'none'}
order_contents[0].style.display = 'block'
radio.forEach(function(target,index,array){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of radio){i.classList.remove('active')}
        target.classList.add('active')
                for(let i of order_contents){i.style.display = 'none'}
                order_contents[index].style.display = 'block'
    })
})