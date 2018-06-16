export function randomNumber()
{
    number = ""
    for(i=0;i<10;i++)
    {
        number += Math.round(Math.random()*9).toString()
    }
    return number
}
