const init = () => {
    const inputForm = document.querySelector("form").addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(e.target.children[1].value)
        const input = document.querySelector("input#searchByID")

        //fetching the raw data
        fetch(`http://localhost:3000/movies/${input.value}`)
        
        //converting the "raw" data with json()
        .then((response) => response.json())
        
        //doing something with the returned JSON object
        .then((data) => {
            //grabbing the elements
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")

            //modifying the elements
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    })
}

document.addEventListener('DOMContentLoaded', init);