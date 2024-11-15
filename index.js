const trendingOffers = [
    {
        "bgColor":"linear-gradient(71.04deg, rgb(12, 57, 139) -6.92%, rgb(62, 118, 216) 109.43%)",
        "img":"https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
        "vehicle": "BUS",
        "save": "Save up to RS 250 on bus tickets",
        "validity": "Valid till 01 Aug",
        "offer":"FIRST"

    },
    {
        "bgColor":"linear-gradient(71.04deg, rgb(39, 57, 101) -6.92%, rgb(80, 210, 149) 109.43%)",
        "img":"https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
        "vehicle": "BUS",
        "save": "Save up to RS 300 on AP,TS tickets",
        "validity": "Valid till 01 Aug",
        "offer":"SUPERHIT"

    },
    {
        "bgColor":"linear-gradient(71.04deg, rgb(24, 125, 151) -6.92%, rgb(109, 213, 237) 109.43%);",
        "img":"https://st.redbus.in/Images/INDOFFER/ICICI500/MWeb-80_80%20ICICI.png",
        "vehicle": "BUS",
        "save": "Save up to RS 500 with ICICI",
        "validity": "Valid till 02 Aug",
        "offer":"ICICI500"

    },
    {
        "bgColor":"linear-gradient(71.04deg, rgb(134, 0, 62) -6.92%, rgb(210, 81, 141) 109.43%)",
        "img":"https://st.redbus.in/Images/INDOFFER/CHARTERED15/80x80.png",
        "vehicle": "BUS",
        "save": "Save up to RS 300 on Charted Bus",
        "validity": "Valid till 01 Aug",
        "offer":"CHARTERED15"

    },
    // {
    //     "img":"https://st.redbus.in/Images/INDOFFER/80x80/SBSTC.png",
    //     "vehicle": "BUS",
    //     "save": "Save up to RS 25% Rs 100 on SBSTC bus",
    //     "validity": "Valid till 01 Aug",
    //     "offer":"SBNEW"

    // },
    // {
    //     "img":"https://st.redbus.in/Images/INDOFFER/80x80/Intrcity.png",
    //     "vehicle": "BUS",
    //     "save": "Save up to RS 150 on InterCity SmartBus",
    //     "validity": "Valid till 31 July",
    //     "offer":"SMARTBUS150"
    // }
];

const govtBuses=[
    {
        "img":"https://s3.rdbuz.com/web/images/homeV2/18491.png",
        "state":"TSRTC",
        "rating":"★4.3",
        "desp":"తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
        "service":"services including Garuda Plus, Rajdhani and more",
        "partner":"Official booking partner of TSRTC"

    },
    {
        "img":"https://st.redbus.in/buslogos/country/ind/logo_group/10283.png",
        "state":"APSRTC",
        "rating":"★4.0",
        "desp":"ఆంధ్రప్రదేశ్ రాష్ట్ర రోడ్డు రవాణా సంస్థ ",
        "service":"1539 services including Garuda, Garuda Plus and more",   
        "partner":"Official booking partner of APSRTC"
    },
    
    {
        "img":"https://s3.rdbuz.com/web/images/homeV2/16227.png",
        "state":"HTRC",
        "rating":"★3.9",
        "desp":"हिमाचल रोड ट्रान्सपोर्ट कॉर्पोरेशन",
        "service":"480 services including Himgaurav, Himmani and more",   
        "partner":"Official booking partner of HRTC"
    }


]

let mainDiv = document.getElementById("carousel")
trendingOffers.map((data)=>{
    mainDiv.innerHTML +=`<div class ="cards" style="background-image:${data.bgColor}"> <div class = "cardsChild1"><img src ="${data.img}"></div>
                         <div class ="cardsChild2"><p class="busType">${data.vehicle}</p><b>${data.save}</b><p class="validType">${data.validity}</p> <p class="offerType">${data.offer}</p></div>
                         </div>`

})

let govtBus = document.getElementById("govtBus")
govtBuses.map((data)=>{
govtBus.innerHTML+=`<div id ="govtDiv"><div id="forImg"><img src="${data.img}"><div id="title"><b>${data.state}&nbsp;<small>${data.rating}</small></b><p>${data.desp}</p></div></div>
                        <div id="service"><p>${data.service}</p><p id="partner">${data.partner}</p></div>
                    </div>`
})



let open = document.getElementById("singUp")
function opendialog(){
    open.showModal();
    document.body.style.opacity ="0.5"
}
function closeDialog(){
    open.close()
    document.body.style.opacity ="2"

}
let login = document.getElementById("singIn")
function logindialog(){
    open.close()
    login.showModal();
}

function logincloseDialog(){
    login.close()
    document.body.style.opacity ="2"

}








let form = document.forms[0];
form.addEventListener("submit",(a)=>{
    a.preventDefault();

    let cities = ["hyderabad","vizag","tirupati","warangal","vijayawada","karminagar","nizambad","mumbai","bangalore","chennai","kolkata","khammam"]
    let dataFrom = a.target[0].value.toLowerCase();
    let dataTo = a.target[1].value.toLowerCase()

    console.log(dataFrom,dataTo)

    if(cities.includes(dataFrom)&&cities.includes(dataTo)){
    if(dataFrom!=dataTo){
    var userData={
        from:dataFrom,
        to:dataTo
    }
    localStorage.setItem("userData",JSON.stringify(userData))
    window.location.assign("./buses.html") }

    else{
        alert("Please enter the drop-off location.");
    }
}
else{
    alert("Oops! We currently don't operate buses to your selected destination.");
}
})


   
let person = document.forms[1]
console.log(person)
person.addEventListener("submit",(a)=>{
 let name= a.target[0].value
 let email = a.target[1].value
 let password=a.target[2].value
 console.log(name,email,password)
})



