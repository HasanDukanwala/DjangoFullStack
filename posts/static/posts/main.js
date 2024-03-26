console.log('Hello World')

const helloWorldBox = document.getElementById('hello-world')
const postBox = document.getElementById('posts-box')

helloWorldBox.textContent = 'Hello World'

$.ajax({
    type: 'Get',
    url: '/hello-world/',
    success: function(response){
        console.log('success', response)
        helloWorldBox.textContent=response.text
    },
    error: function(error){
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        console.log(data)
        data.forEach(el => {
            postBox.innerHTML += `
                ${el.title} - <b>${el.body}</b><br>
            `
        });
    },
    error: function(error){
        console.log(error)
    }
})