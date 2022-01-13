function scuberGreetingForFeet(anyValue){
    if (anyValue <= 400)
    return ('This one is on me!')

if (anyValue > 2000 && anyValue <= 2500)
return ('I will gladly take your thirty bucks.')
 
if (anyValue > 2500)
return ('No can do.')
}

function ternaryCheckCity(anyCity){
 if (anyCity == 'NYC')
 return ('Ok, sounds good.')

 if (anyCity !== 'NYC')
 return ('No go.')
}

function switchOnCharmFromTip(cashMoney){
  if (cashMoney == 'generous')
 return ('Thank you so much.')

 if (cashMoney == 'not as generous')
 return ('Thank you.')

 if (cashMoney !== 'generous' && 'not as generous')
 return ('Bye.')
}