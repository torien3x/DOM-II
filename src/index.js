import './less/index.less'

// Your code goes here!

window.onload = function(evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
           heading.textContent += text 
        })
    })

    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    document.body.addEventListener('dbclick', evt => {
        evt.target.innerHTML = ''
    })

    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })

    document.body.addEventListener('mouseove', evt => {
        const { clientX, clientY} = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    const destinations = document
    .querySelectorAll('.destination')
    console.log(destinations)
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
           destination.computedStyleMap.fontWeight = 'bold' 
        })
        destination.addEventListener('mouseleave', () => {
            destination.computedStyleMap.fontWeight = 'intial'
        })
    }
}

