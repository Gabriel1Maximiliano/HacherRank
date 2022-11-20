

function timeConversion(s){
   let horaMili = '';

   let pmAm=s.charAt(8);
   
   if( pmAm === 'A' ){
    if( s.substring(0,2) == '12' ){
        horaMili ='00'; 
    }else{
        horaMili = s.substring(0,2);
    }
   }
   else{
    if(s.substring(0,2) == '12'){
       horaMili = s.substring(0,2);
    }else{
        horaMili= parseInt(s.substring(0,2),10)+12;
    }
   }
   return horaMili + s.substring(2,8);
}