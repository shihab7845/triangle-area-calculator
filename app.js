// part_1(work with button)

const calButton = document.getElementById("cal-btn").addEventListener('click',function(){

    // get base value from input 
    const baseIn = document.getElementById("base-in");
    const baseValue = baseIn.value ;
    console.log(baseValue);

    // get hight value from input
    const hightIn = document.getElementById('hight-in');
    const hightValue = hightIn.value;
    console.log(hightValue);

    const triangleArea =(0.5 * baseValue * hightValue)
    console.log('area of the triangle :',triangleArea);

    const newP = document.createElement('p');
    newP.innerText = `area of the triangle : ${triangleArea}`
    newP.className = 'text-center';

    const newDiv = document.getElementById('description');
    newDiv.appendChild(newP);

    


})