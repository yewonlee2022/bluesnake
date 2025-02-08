const body = document.querySelector(".bbody");
const rightvid= document.querySelector(".rightvid");
const vidbtn = rightvid.querySelector(".btn");

const rightmk = document.querySelector(".rightmk");
const mkbtn = rightmk.querySelector(".btn");

const lft = document.querySelector(".lft");
const rgt = document.querySelector(".rgt");

const atype = document.getElementById("atype");
const btype = document.getElementById("btype");
const ctype = document.getElementById("ctype");


const bbody = document.querySelectorAll(".baemssbody");
const btiny = document.querySelectorAll(".baemsstiny");
const btitle = document.querySelectorAll(".baemsstitle");
const bbg = document.querySelector(".baems");
const bline = document.querySelector(".baemline");


const bodya = document.getElementById("baembodya");
const bodyb = document.getElementById("baembodyb");
const bodyc = document.getElementById("baembodyc");

const titlea = document.getElementById("baemtitlea");
const titleb = document.getElementById("baemtitleb");
const titlec = document.getElementById("baemtitlec");

const tinya = document.getElementById("baemtinya");
const tinyb = document.getElementById("baemtinyb");
const tinyc = document.getElementById("baemtinyc");


//컬러피커
const cpbody = document.getElementById("cpbody");
cpbody.addEventListener('input',()=>{
    let col = cpbody.value;

    for (const body of bbody){
        const bodyinput = body.querySelectorAll(".st0");
        console.log(bodyinput);
        for (const abody of bodyinput){
            abody.style.fill =col;
        }
    
    }
 
    const bbbtn = document.getElementById("bbbtn");
    bbbtn.style.backgroundImage = `radial-gradient(${col}, whitesmoke 70%)`;
})

const cptitle = document.getElementById("cptitle");
cptitle.addEventListener('input',()=>{
    let col = cptitle.value;


    for (const body of btitle){
        const bodyinput = body.querySelectorAll("path.st0");
        console.log(bodyinput);
        for (const abody of bodyinput){
            abody.style.fill =col;
        }
    
    }


    const titbtn = document.getElementById("titbtn");


    titbtn.style.backgroundImage = `radial-gradient(${col}, whitesmoke 70%)`;
})

const cptiny = document.getElementById("cptiny");
cptiny.addEventListener('input',()=>{
    let col = cptiny.value;


    for (const body of btiny){
        const bodyinput = body.querySelectorAll(".st0");
        console.log(bodyinput);
        for (const abody of bodyinput){
            abody.style.fill =col;
        }
    
    }


    const scrbtn = document.getElementById("scrbtn");


    scrbtn.style.backgroundImage = `radial-gradient(${col}, whitesmoke 70%)`;
})

const cpbg = document.getElementById("cpbg");
cpbg.addEventListener('input',()=>{
    let col = cpbg.value;

    const bgbtn = document.getElementById("bgbtn");

    bbg.style.backgroundColor = col;
    bgbtn.style.backgroundImage = `radial-gradient(${col}, whitesmoke 70%)`;
})

//페이지 이동

vidbtn.addEventListener('click', ()=>{
    body.classList.add("mk");
});

mkbtn.addEventListener('click', ()=>{
    body.classList.remove("mk");
    body.classList.add("dl");
});

lft.addEventListener('click', ()=>{
    body.classList.remove("dl");
    body.classList.add("mk");
});

//타입바꾸기

atype.addEventListener('click', ()=>{
    atype.classList.remove("on");
    btype.classList.remove("on");
    ctype.classList.remove("on");

    atype.classList.add("on");

    bline.src =`img/baem/0-07.png`

    bodya.classList.remove("on");
    bodyb.classList.remove("on");
    bodyc.classList.remove("on");

    titlea.classList.remove("on");
    titleb.classList.remove("on");
    titlec.classList.remove("on");

    tinya.classList.remove("on");
    tinyb.classList.remove("on");
    tinyc.classList.remove("on");

    bodya.classList.add("on");
    titlea.classList.add("on");
    tinya.classList.add("on");
    





});

btype.addEventListener('click', ()=>{
    atype.classList.remove("on");
    btype.classList.remove("on");
    ctype.classList.remove("on");
    
    btype.classList.add("on");

   

    bline.src =`img/baem/0-03.png`
    
    bodya.classList.remove("on");
    bodyb.classList.remove("on");
    bodyc.classList.remove("on");

    titlea.classList.remove("on");
    titleb.classList.remove("on");
    titlec.classList.remove("on");

    tinya.classList.remove("on");
    tinyb.classList.remove("on");
    tinyc.classList.remove("on");

    bodyb.classList.add("on");
    titleb.classList.add("on");
    tinyb.classList.add("on");

});

ctype.addEventListener('click', ()=>{
    atype.classList.remove("on");
    btype.classList.remove("on");
    ctype.classList.remove("on");
    
    ctype.classList.add("on");

    bline.src =`img/baem/0-11.png`

    bodya.classList.remove("on");
    bodyb.classList.remove("on");
    bodyc.classList.remove("on");

    titlea.classList.remove("on");
    titleb.classList.remove("on");
    titlec.classList.remove("on");

    tinya.classList.remove("on");
    tinyb.classList.remove("on");
    tinyc.classList.remove("on");

    bodyc.classList.add("on");
    titlec.classList.add("on");
    tinyc.classList.add("on");
  

});

//카드 타입 고르기


const toname = document.querySelector(".toname");
const nameinput = document.querySelector(".nameinput");


function name1(){
    toname.innerText = ` ${nameinput.value}`;
}


const dlbtn = document.querySelector(".rgt");
// const capt = document.querySelector(".bbody dl");

// dlbtn.addEventListener('click',()=>{
//     const targetElement = document.querySelector(".bbody");
    
//     if (targetElement) {
// html2canvas(targetElement, { useCORS: true, foreignObjectRendering: true }).then(canvas => {
//             const resizedCanvas = document.createElement("canvas");
//             const ctx = resizedCanvas.getContext("2d");
//             resizedCanvas.width = 375;
//             resizedCanvas.height = 667;
//             ctx.drawImage(canvas, 0, 0, 375, 667);
            
//             const link = document.createElement("a");
//             link.href = resizedCanvas.toDataURL("image/png");
//             link.download = "screenshot.png";
//             link.click();
//         });
//     } else {
//         alert("캡처할 요소(.bbody)를 찾을 수 없습니다.");
//     }
// });

dlbtn.addEventListener('click',()=>{
    const name = document.querySelector(".name");
    name.style.display =`none`;

//     const targetElement = document.querySelector(".bbody");
    
//     if (targetElement) {
// html2canvas(targetElement, { useCORS: true}).then(canvas => {
//             const resizedCanvas = document.createElement("canvas");
//             const ctx = resizedCanvas.getContext("2d");
//             resizedCanvas.width = 375;
//             resizedCanvas.height = 667;
//             ctx.drawImage(canvas, 0, 0, 375, 667);
            
//             const link = document.createElement("a");
//             link.href = resizedCanvas.toDataURL("image/png");
//             link.download = "screenshot.png";
//             link.click();
//         });
//     } else {
//         alert("캡처할 요소(.bbody)를 찾을 수 없습니다.");
//     }
});


const hmm = document.querySelector(".hmm");

hmm.addEventListener('click',()=>{
    body.classList.remove("mk");
    body.classList.remove("dl");
    const name = document.querySelector(".name");
    name.style.display =`block`;
})
