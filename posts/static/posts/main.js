console.log('Hello World')

const helloWorldBox = document.getElementById('hello-world')

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