let basicSalary=parseFloat(prompt('Enter basic salary'))
    let nHIF=parseFloat(prompt('NHIF'))
    let nssF=parseFloat(prompt('NSSF'))

let taxedAmount=(basicSalary-nssF-nHIF)
let netSal=taxedAmount
if(taxedAmount>=24,000){
    let ftax=(taxedAmount*10)/100
         let ftax2=(8333*25)/100
        let ftax3=0

         if((taxedAmount-32333)>0){
            ftax3=(taxedAmount-32333)*0.3
         }

         netsal=(taxedAmount-ftax-ftax2-ftax3)
}


// let div=document.getElementById('hl')//querySelector
// // let div=document.querySelector('img[height:78]')
// let pr=`<P style="color:red;"> Netsalary:${netsal}</P>`
// div.innerHTML+=pr
// console.log(netsal)
// // basic salary
// // nhif and  nssf deducted before tax
// // taxable salary
// // if it is below 24,000,
// // first tax=get 10% 24,000
// // second tax 8333 get 25%
// //third taxable salary-32333 get 30%