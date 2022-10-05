let cont = document.querySelector('.cont')
let qrbtns = cont.querySelector('.inbtn button')
let qrtxt = cont.querySelector('.inbtn input')
let qrimg = cont.querySelector('.qrimg img')

qrbtns.addEventListener('click', () => {
    

    let qrinner = qrtxt.value;  //value means texts  inner userdefine input 
    if (!qrinner) {
        alert("enter text or url")
    };
    // if qrinner value is empty then retun from here dont activet active class
    qrbtns.innerText = "Loading QR Code";   
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrinner}`


    qrimg.addEventListener('load', () => {

        cont.classList.add('active');
        qrbtns.innerText = "Generate QR Code";

    })


    //if textarea is empty then remove active class
    qrtxt.addEventListener('keyup', () => {

        if (!qrtxt.value) {
            cont.classList.remove('active');

        }

    })

})


