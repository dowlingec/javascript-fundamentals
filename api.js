//create function called request
let div = document.getElementById('container')
let data

const request = () => {
    fetch('https://raw.githubusercontent.com/dowlingec/javascript-fundamentals/main/user.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log('Data returned is', data)
        div.InnerText = data.user.email;
        return data.user.email
    })
    //.then() is  saying after fetch() has excuted continue here
    return "done with function"
}

//alt without .thens ASYNC AWAIT
const request2 = async () => {
    let req = await fetch('https://raw.githubusercontent.com/dowlingec/javascript-fundamentals/main/user.json')
    let res = await req.json()
    console.log("RESPONSE 2", res)
    data = res
    return res
}
request2()

//
// let data = (aync() => await request2())()
//this lets us access data returned by request2
//insteasd assign ioen variable in global, then assign it within the function as above (not muted)