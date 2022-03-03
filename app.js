const btn = document.getElementById('btn');

//function
const calculate = () => {
    let web = document.getElementById('web').value;
    let phy = document.getElementById('phy').value;
    let chem = document.getElementById('chem').value;
    let maths = document.getElementById('maths').value;

    let obtainedMark = parseFloat(web)+parseFloat(phy)+parseFloat(chem)+parseFloat(maths);
    let percentage = (obtainedMark/400)*100; 
    let grade=''
    

    if(percentage <= 100 && percentage >= 80){
        grade='A'
    }else if(percentage <= 79 && percentage >= 60){
        grade='B'
    }else if(percentage <=59 && percentage >= 40){
        grade='C'
    }else if(percentage <=39 && percentage >= 33){
        grade='D'
    }else{
        grade='F'
    }

    if(percentage>=33){
    let showResult=document.getElementById('showResult')
    showResult.innerHTML=`You have obtained ${obtainedMark} out of 400 with ${percentage}% and ${grade} Grade. Congratulation You Have Passed.`;
}else{
    let showResult = document.getElementById('showResult')
    showResult.innerHTML =`You have obtained ${obtainedMark} out of 400 with ${percentage}% and ${grade} Grade. Sorry You Have Failed.`;
}
}

//Event
btn.addEventListener('click',calculate)