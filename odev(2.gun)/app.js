
// Asal Sayı Kontrolü

function findPrime(...numbers){

  for (let i = 0; i< numbers.length; i++) {

    count=0

    for(j=2;j<numbers[i];j++){
        
        if (numbers[i] %j ==0){
       
            count++;
        }
    }
    
    if(count>=1){

        console.log(numbers[i] +"  asal sayı  değildir");

    }else{

        console.log(numbers[i] + "  asal sayıdır");
    }
  }
}

findPrime(10,12,13,15,34,3)
findPrime(5,25,49,89)

//-----------------------------------------------------------

//Arkadaş sayı

function findFriendNumber(number1,number2){
    
    let sum1=0
    let sum2=0

    for (let i = 1; i < number1; i++) {

       if (number1%i==0){
           sum1+=i
       }
        
    }

    for (let i = 1; i < number2; i++) {

        if (number2%i==0){
            sum2+=i
        }
         
    }

     if(number1==sum2 && number2 ==sum1){

         console.log(`${number1} ve ${number2} arkadaş sayılardır`);

     }else {

         console.log(`${number1} ve ${number2} arkadaş sayılar değildir`)
     }

}

findFriendNumber(221,284)
findFriendNumber(1184,1210)

//------------------------------------------------------------------------------

//mükemmel sayıları bulma

function findPerfectNumbers(){
    for (let i = 1; i < 1000; i++) {

        sum=0

        for (j=1;j<i;j++){
            if(i%j ==0){
               sum+=j
            }
        }

        if(sum==i){

            console.log(`${i} mükemmel sayıdır`);
        }

        
    }
}

findPerfectNumbers()

// =====================================================


//1000'e kadarki tüm asal sayıları listeleyen program

function findPrimeNumbers(){

    for (let i = 2; i < 1000; i++) {
        
       count=0

       for (let j = 2; j <i ; j++) {
             if(i%j == 0){
                count++
             }
           
       }

       if (count<1){

        console.log(`${i} asal sayıdır`);

       }
        
    }
}

findPrimeNumbers()
