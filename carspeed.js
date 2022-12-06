let speed =80
if(speed<=70){
    console.log('OK')
}
else{
    const dev=speed-70
    let demPoints=dev/5
     if(demPoints>12){
        console.log('LICENSE CANCELLED')
     }
     else{
        console.log(`${demPoints} HAS BEEN DEDUCTED`)
     }
}
