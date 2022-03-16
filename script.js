let tl=gsap.timeline();
tl.to(".ov",{
    stagger:.1,
    rotateY:0,
    duration:1,
    opacity:1
})
.to("#box h3",{
    top:"50%",
    duration:1,
})
.to("#ovly",{
    top:"-150%",
},"+=1")
.from("#nav",{
    height:0,
    duration:1
},"-=1")
.from("#bg",{
    opacity:0
})
.from("#container img:nth-child(4)",{
    scale:0,
    opacity:0,
    ease: "expo.out",
},"-=.5")
.from("#container img:nth-child(2),#container img:nth-child(3)",{
    x:-30,
    opacity:0,
    onComplete:function(){
productIntro(counter)

    }
})
.from("#ltag a,#rt>a",{
    opacity:0,
    y:20
})
.from("#slideBtn",{
    y:20,
    opacity:0
})



function exit(elm){
    gsap.to(elm,{
        left:"-80%",
        opacity:0,
        scale:2
    })
}
function pos1(elm){
    gsap.to(elm,{
        left:"-20%",
        scale:1.6,
        filter:"blur(0)",
    })
}
function pos2(elm){
    gsap.to(elm,{
        left:"45%",
        scale:0.8,
        duration:.1
        
    })
}
function In(elm){
    gsap.to(elm,{
        left:"85%",
        scale:.5,
        filter:"blur(10px)",
        onComplete:function(){
            this._targets[0].style.opacity=1
        }
    })
}
// contains all the informations of the products 
let data=[{
    series:"'A' Series",
    bgColor:"to bottom right,#2fbdff,#0f2f40",
    name:"Airdopes 121 v2",
},
{
    series:"'H' Series",
    bgColor:"to bottom right,#fc210d,#450a3b",
    name:"HeadPhones 22 v1",
},
{
    series:"'P' Series",
    name:"Pica 22 v1",
    bgColor:"to bottom right,#ff2e4c,#1e2a78"
}]
// transition of the product information and the background 
function productIntro(indx){
    let tmp=`<h3>${data[indx].series}</h3>
    <h1>${data[indx].name}</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iste, voluptates impedit fugiat, facere mollitia unde enim reprehenderit, placeat ab molestias reiciendis delectus explicabo sequi. Fugiat quis corrupti unde vero!</p>
    <a href="#">Explore Product <i class="ri-arrow-right-up-line"></i></a>`;
    document.querySelector("#ltxt").innerHTML=tmp;
    document.querySelector("#bg").style.background=`linear-gradient(${data[indx].bgColor})`;
    document.querySelector("#nrt i").style.background=`linear-gradient(${data[indx].bgColor})`;
    document.querySelector("#nrt a:nth-child(4)").style.background=`linear-gradient(${data[indx].bgColor})`;
    // document.querySelector("#slideBtn:active").style.background=`linear-gradient(${data[indx].bgColor})`;
    document.querySelector("#rt>a span:nth-child(1)").textContent="0"+Number(indx+1);
    if(indx<data.length-1){
        document.querySelector("#rt>a span:nth-child(2)").textContent="0"+Number(indx+2);

    }
    else{
    document.querySelector("#rt>a span:nth-child(2)").textContent=01;

    }
    let tl=gsap.timeline();
    tl.from("#ltxt h3,#ltxt h1",{
        opacity:0,
        y:20
    })
    .from("#ltxt p,#ltxt a",{
        opacity:0,
        y:10
    })
    
}
let elms=document.querySelectorAll(".pic");
let arr=[4,3,2];
function rotateL(arr){
    let tmp=arr[0];
    for(let i=0;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr[arr.length-1]=tmp
}

// // product slide button lerp 
// window.addEventListener("mousemove",function(d){
//     console.log(d.target.className)
//     // let xValue=d.clientX;
//     // let yValue=d.clientY;
//     //  document.querySelector("#slideBtn").style.top=`${yValue}px`;
//     //  document.querySelector("#slideBtn").style.left=`${xValue}px`;

 
   
//  })
 //Whole sliding opration function
let counter=0;
document.querySelector("#slideBtn").addEventListener("click",function(){
    exit(`#container img:nth-child(${arr[0]})`);
    pos1(`#container img:nth-child(${arr[1]})`);
    pos2(`#container img:nth-child(${arr[2]})`);
    setTimeout(function(){
    In(`#container img:nth-child(${arr[0]})`)
    rotateL(arr);
    },1000)
    if(counter<data.length-1){
        counter++;
        productIntro(counter);
    }else{
        counter=0;
        productIntro(counter);

    }
})
