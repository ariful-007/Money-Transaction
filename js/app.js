// BUTTON ITEM FINDE
let cashIn=document.getElementById('cash-in');
let cashOut=document.getElementById('cash-out');
let recharge=document.getElementById('recharge');
let addBalance=document.getElementById('add-balance');
// INPUT ITEM FINDE CASH IN
let h1=document.createElement('h1');
    h1.innerHTML='Cash In'
let inputInNumber=document.createElement('INPUT')
    inputInNumber.setAttribute('type','number')
    inputInNumber.setAttribute('placeholder','Enter Your Number')
let inputInAmmount=document.createElement('INPUT')
    inputInAmmount.setAttribute('type','number')
    inputInAmmount.setAttribute('placeholder','Enter Your Ammount')
let inputInPassword=document.createElement('INPUT')
    inputInPassword.setAttribute('type','password')
    inputInPassword.setAttribute('placeholder','Enter Your Password')
let inputInButton=document.createElement('BUTTON')
    inputInButton.innerHTML='Submit'
    
let popUp=document.querySelector('.tost');
    popUp.appendChild(h1)
    popUp.appendChild(inputInNumber)
    popUp.appendChild(inputInAmmount)
    popUp.appendChild(inputInPassword)
    popUp.appendChild(inputInButton)
    popUp.classList.add('tost-1')
    
cashIn.addEventListener('click',function(){
    popUp.style.display='block'
    popUp1.style.display='none'
    flexiTost.style.display='none'

})

// TOST MESSAGES CASH IN
let closeBtn =document.getElementById('close-btn')
closeBtn.addEventListener('click',function(){
    notif.style.display='none'
    notif1.style.display='none'
    notif2.style.display='none'
})

let notif=document.querySelector('.notif')
    notif.style.display='none'
let notification=document.querySelector('#notification')
    notif.appendChild(notification)

let phoneNumber='01781996007'
let pin='420'

inputInButton.addEventListener('click',function(){
    let inputValue=parseFloat(inputInAmmount.value)
    let addValue=parseFloat(addBalance.innerHTML)
    if(inputInNumber.value==''){
        alert('Enter Your Account Number')
    }
    else if(inputInNumber.value != phoneNumber){
        alert('Enter Your Correct Number')
    }
    else if(inputInNumber.value.length >11 || inputInNumber.value.length <11 ){
        alert('Enter your Valide Number')
    }
    else if(inputInAmmount.value==''){
        alert('Enter Your Ammount')
    }
    else if(inputInPassword.value != pin){
        alert('Enter Your Pin')
    }
    else{
        inputInNumber.value=''
        inputInAmmount.value=''
        inputInPassword.value=''
        addBalance.innerHTML=inputValue+addValue
        notification.innerHTML=`Cash in ${inputValue+addValue} Taka Successfully`
        popUp.style.display='none'
        notif.style.display='block'
    }
    
})

// // INPUT ITEM FINDE CASH OUT
let h2=document.createElement('h2');
    h2.innerHTML='Cash Out'
let inputOutNumber=document.createElement('INPUT')
    inputOutNumber.setAttribute('type','number')
    inputOutNumber.setAttribute('placeholder','Enter Your Number')
let inputOutAmmount=document.createElement('INPUT')
    inputOutAmmount.setAttribute('type','number')
    inputOutAmmount.setAttribute('placeholder','Enter Your Ammount')
let inputOutPassword=document.createElement('INPUT')
    inputOutPassword.setAttribute('type','password')
    inputOutPassword.setAttribute('placeholder','Enter Your Password')
let inputOutButton=document.createElement('BUTTON')
    inputOutButton.innerHTML='Submit'
    
let popUp1=document.querySelector('.tost-2');
    popUp1.appendChild(h2)
    popUp1.appendChild(inputOutNumber)
    popUp1.appendChild(inputOutAmmount)
    popUp1.appendChild(inputOutPassword)
    popUp1.appendChild(inputOutButton)
    popUp1.classList.add('tost-1')

//TOST MESSAGES CASH OUT    
let notif1=document.querySelector('.notif-1') 
    notif1.style.display='none'
let notification1=document.querySelector('#notification1')
    notif1.appendChild(notification1)

cashOut.addEventListener('click',function(){
    popUp1.style.display='block'
    popUp.style.display='none'
    flexiTost.style.display='none'
})

inputOutButton.addEventListener('click',function(){
    let inputValue=parseFloat(inputOutAmmount.value)
    let addValue=parseFloat(addBalance.innerHTML)
    if(inputOutNumber.value==''){
        alert('Enter Your Account Number')
    }
    
    else if(inputOutNumber.value.length >11 || inputOutNumber.value.length <11 ){
        alert('Enter your Valide Number')
    }
    else if(inputOutAmmount.value==''){
        alert('Enter Your Ammount')
    }
    else if(inputOutPassword.value != pin){
        alert('Enter Your Pin')
    }
    else{
        inputOutNumber.value=''
        inputOutAmmount.value=''
        inputOutPassword.value=''
        addBalance.innerHTML=addValue-inputValue
        notification1.innerHTML=`Cash Out ${inputValue-addValue} Taka Successfully`
        popUp1.style.display='none'
        notif1.style.display='block'
    }
    
})

// MOLILE RECHARGE
let h3=document.createElement('h3');
    h3.innerHTML='Mobile Recharge'
let inputMobileNumber=document.createElement('INPUT')
    inputMobileNumber.setAttribute('type','number')
    inputMobileNumber.setAttribute('placeholder','Enter Your Number')
let inputMobileAmmount=document.createElement('INPUT')
    inputMobileAmmount.setAttribute('type','number')
    inputMobileAmmount.setAttribute('placeholder','Enter Your Ammount')
let inputMobilePassword=document.createElement('INPUT')
    inputMobilePassword.setAttribute('type','password')
    inputMobilePassword.setAttribute('placeholder','Enter Your Password')
let inputMobileButton=document.createElement('BUTTON')
    inputMobileButton.innerHTML='Submit'
    
let popUp2=document.querySelector('.tost-3');
    popUp2.appendChild(h3)
    popUp2.appendChild(inputMobileNumber)
    popUp2.appendChild(inputMobileAmmount)
    popUp2.appendChild(inputMobilePassword)
    popUp2.appendChild(inputMobileButton)
    popUp2.classList.add('tost-1')
//TOST MESSAGES MOLILE RECHARGE    
let notif2=document.querySelector('.notif-2') 
    notif2.style.display='none'
let notification2=document.querySelector('#notification2')
    notif2.appendChild(notification2)

let flexiTost=document.querySelector('.flexi-tost')
recharge.addEventListener('click',function(){
    flexiTost.style.display='block'
    popUp1.style.display='none'
    popUp.style.display='none'
})

let gp=document.getElementById('gp')
let bl=document.getElementById('bl')
let al=document.getElementById('al')
let rb=document.getElementById('rb')

gp.addEventListener('click',function(){
    popUp2.style.display='block'
    flexiTost.style.display='none'
})
let numberGp='01781996007'

inputMobileButton.addEventListener('click',function(){
    let inputValue=parseFloat(inputMobileAmmount.value)
    let addValue=parseFloat(addBalance.innerHTML)
    if(inputMobileNumber.value ==''){
        alert('Enter your number')
    }
    else if(inputMobileNumber.value.length >11 || inputMobileNumber.value.length <11){
        alert('Enter your Valide Number')
    }
    else if(inputMobileNumber.value != numberGp){
        alert('Enter Your Gp number')
    }
    else if(inputMobileAmmount.value ==''){
        alert('Enter Your Ammount')
    }
    else if(inputMobilePassword.value != pin){
        alert('Enter Your pin')
    }
    else{
        inputMobileNumber.value=''
        inputMobileAmmount.value=''
        inputMobilePassword.value=''
        addBalance.innerHTML=addValue-inputValue
        notif2.style.display='block'
        notification2.innerHTML=`Mobile Recharge${inputValue-addValue}Taka Successfully`
    }

})



