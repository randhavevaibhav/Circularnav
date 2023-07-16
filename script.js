var active = 3;

var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");

document.querySelector("#main").style.backgroundSize="cover";
document.querySelector("#main").style.backgroundPosition="center center";
document.querySelector("#main").style.transition=" 1s";




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

function changeBgImg( index)
{
    
    if(index==2)
        {
            document.querySelector("#main").style.backgroundImage = "url('McLaren_720S_GT3.jpg')";
            
        }
        if(index==0)
        {
            document.querySelector("#main").style.backgroundImage = "url('Toyota_Supra_GT4.jpg')";
           
        }

        if(index==1)
        {
            document.querySelector("#main").style.backgroundImage = "url('BMW_M2_CS.jpg')";
           
        }

        if(index==3)
        {
            document.querySelector("#main").style.backgroundImage = "url('Buggati.jpg')";
           
        }

        if(index==4)
        {
            document.querySelector("#main").style.backgroundImage = "url('Ford_Mustang_Cobra_Jet.jpg')";
           
        }


}
