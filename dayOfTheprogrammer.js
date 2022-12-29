/**
 * Marie inventó una máquina del tiempo y quiere probarla viajando en el tiempo para visitar Rusia en el Día del Programador (el día 256 del año) durante un año en el rango inclusivo de 1700 a 2700.

Desde 1700 hasta 1917, el calendario oficial de Rusia fue el calendario juliano; desde 1919 utilizaron el sistema de calendario gregoriano. La transición del sistema de calendario juliano al gregoriano ocurrió en 1918, cuando el día siguiente al 31 de enero era el 14 de febrero. Esto significa que en 1918, el 14 de febrero era el día 32 del año en Rusia.

En ambos sistemas de calendario, febrero es el único mes con una cantidad variable de días; tiene 29 días durante un año bisiesto y 28 días durante todos los demás años. En el calendario juliano, los años bisiestos son divisibles por 4; En el calendario gregoriano, los años bisiestos son cualquiera de los siguientes:

Divisible por 400.
Divisible por 4 y no divisible por 100.
Dado un año, encuentre la fecha del día 256 de ese año según el calendario oficial ruso durante ese año. Luego imprímalo en el formato dd.mm.yyyy, donde dd es el día de dos dígitos, mm es el mes de dos dígitos y yyyy es .

Por ejemplo, dado = 1984. 1984 es divisible por 4, por lo que es un año bisiesto. El día 256 de un año bisiesto después de 1918 es el 12 de septiembre, por lo que la respuesta es .

Sample Input 0
2017

Sample Output 0

13.09.2017

In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.
In the year  = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.
 */

function dayOfProgrammer(year) {
    // Write your code here
 let typeCalendar = (year <= 1917 ? 'Julian' : year === 1918 ? 'Transition' : 'Gregorian');
    
    if(typeCalendar === 'Julian'){
        return (year % 4 === 0) ? "12.09."+year : "13.09."+year;
    }
    
    if(typeCalendar === 'Transition'){
        return "26.09."+year;
    }
    
    return ((year % 400 === 0) || ((year % 4 === 0) && !(year % 100 === 0))) ? "12.09."+year : "13.09."+year;

}
let year = 2017;
dayOfProgrammer(year) 