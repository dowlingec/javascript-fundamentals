//create function called request
let div = document.getElementById('container')
//locate element we are working with

const request = async () => {
    //async to create wait
    let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json')
    // await fetch results
    let res = await req.json()
    //await .json file
    console.log('Response', res)
    //check response
    res.forEach((element) => {
        // console.log('Elements', element.vacancies) to test
        let aptImg = document.createElement('img')
        let buttonEl = document.createElement('button')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        //new var creating new element to reference later
        h3.innerText = element.company_name
        h4.innerText = `Vacancies: ${element.vacancies}`
        buttonEl.innerText = (`Rent building ${element.id}`)
        buttonEl.addEventListener('click', () => {
            let updatedVacancies = --element.vacancies
            if (updatedVacancies <= (-1)) return alert('No more vacancies in this building');
            h4.innerText = `vacancies: ${updatedVacancies}`
        })
        //test event listener with alert to see its working
        aptImg.setAttribute('src', element.photo)
        
        //set attributes to new element
        div.appendChild(aptImg)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(buttonEl)
        //append newly created elements to div container - DO THIS IN ORDER YOU WANT TO SEE
        //alternatively div.append(aptImg, buttonEl, h3)

    })
}
request()
//invoke function to fetch api and append images to DOM