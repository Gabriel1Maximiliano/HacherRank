/**
 * 
 * HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.} grades 
grade = 84 round to 85 (85-84 is less than 3)
grade = 29 round do not round (result is less than 40)
grade = 57 do not round (60-57 is 3 )
  si la diferencia entre el grado y el multiplo de 5 mas cercano es menor a 3 se redondea para arriba
 */
  let grades =[73,67,38 ,33];
function gradingStudents(grades) {
    // Write your code here
    console.log(grades)
  let multiplo=37;
  let arr =[];
 
    for (let i = 0; i < grades.length; i++) {
    
        if( grades[i]<37){
         arr.push(grades[i]);
          
        }else{
  
            multiplo=grades[i];
       
            while(multiplo % 5 !== 0){
             
             
                multiplo++;
            }
            if(multiplo -  grades[i] < 3){
               grades[i] = multiplo;
               arr.push(multiplo);
            }if(multiplo -  grades[i] == 3){
              
               arr.push(  grades[i]);
            }
   
        }
     
      
    }//       let grades =[73,67,38 ,33];
        console.log(arr)
     console.log(grades)
}
gradingStudents(grades);