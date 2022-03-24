//create function called request
let div = document.getElementById('container')
//locate element we are working with

const request = async () => {
    let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json')
    let res = await req.json()
    console.log('Response', res)
    res.forEach((element) => {
        // console.log('Elements', element.vacancies) to test
        let aptImg = document.createElement('img')
        //new var creating new element to reference later
        aptImg.setAttribute('src', element.photo)
        //set attribute to new element
        div.appendChild(aptImg)
        //append newly created element to div container
    })
}
request()
//invoke function to fetch api and append images to DOM