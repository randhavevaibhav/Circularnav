var active = 3;

var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");
var carImgs = document.querySelectorAll(".car-imgs");





gsap.to(mncircles[active-1], {

    // opacity:.5
})

gsap.to(sec[active-1], {

    opacity:1
})
mncircles.forEach(function(val,index){
    val.addEventListener("click",function(){

        gsap.to("#circle",{
            rotate:(3-(index+1))*10,
            ease: Expo.easeInOut,
            duration: 0.9
        })
        greyout();
        gsap.to(this,
            {
                // opacity:0.8,
               //backgroundColor:"#000000"
            })

        gsap.to(sec[index],
                {
                    opacity:1
                })

        changeBgImg(index);
        
       
        
        


        
    })


})

gsap.to("#circle",
{
    rotate:0,
    ease: Expo.easeInOut,
    duration: 2
})

function greyout()
{
    gsap.to(mncircles,
        {
            // opacity:.8
            backgroundColor:"#FFFFFF"
        })

    gsap.to(sec,
            {
                opacity:.4
            })

}

function changeBgImg(index)
{

carImgs[index].removeAttribute("hidden");
        for(i=0;i<carImgs.length-1;i++)
        {
                if(i!=index)
                {
                    carImgs[i].setAttribute("hidden", "hidden");
                }
        }

}
