/**
 * 
 * 
 * 07:05:45PM -> string 
 */

/*
1--> 13
2--->14
3--->15
4--->16
5--->17
6-->18
7--->19
8--->20
9--->21
10--->22
11--->23
12--->24()


7pm->


*/

function timeConversion(s) {
    // Write your code here
   
    const splits = s.split(':')
    let res;
    let horaCorregida;

    let seg;

    seg = s.substring(6,8)
    

   const conversion = (hora)=> {
    console.log('entre')
        console.log(hora)
        switch (hora) {
            case '01':
                return '13';
                break;
            case '02':
                return '14';
                break;
            case'03':
                return '15';
                break;
            case'04':
                return '16';
                break;
            case'05':
                return '17';
                break;
            case'06':
                return '18';
                break;
            case'07':
                return '19';
                break;
            case'08':
                return '20';
                break;
            case'09':
                return '21';
                break;
            case '10':
                return '22';
                break;
            case '11':
                return '23';
                break;
            default:
                break;
        }
    }

    let t = conversion('07')
    console.log(t);

    if ( !splits[0].includes('12') && splits[2].includes('PM') ) {

        let hora = splits[0].split('')
        console.log(hora)
       
            let concatHora = hora[0].concat('', hora[1])
            console.log(concatHora)
             res = conversion(concatHora);
            console.log(res);
    
            horaCorregida = res+':'+splits[1]+':'+seg;
            console.log(horaCorregida)
            return horaCorregida;
    }else if(splits[2].includes('AM')&& splits[0].includes('12')){
        horaCorregida = '00'+':'+splits[1]+':'+seg;

         console.log(horaCorregida);
         return horaCorregida;
    }else if(  splits[0].includes('12') && splits[2].includes('PM')){
        console.log('entre')
           horaCorregida ='12'+':'+splits[1]+':'+seg;
           console.log(horaCorregida)
           return horaCorregida; 
    }else if( !splits[0].includes('12') && splits[2].includes('AM') ){
        console.log('entre')
            horaCorregida =splits[0]+':'+splits[1]+':'+seg;
            console.log(horaCorregida)
            return horaCorregida;   
         }


}
let s2='12:06:42AM'
let s = '01:05:45PM'
let s3= '12:01:02PM'
let s4= '12:02:03AM'
let s5 = '12:00:00AM'
let s6='04:59:59AM'
let s7= '06:40:03AM'
timeConversion(s7)

