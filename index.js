console.log("hello");
let vedios = [
    {
        title: "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
        time: "31:00",
        veiws: "300k",
        ago: "3 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma.webp"
    },
    {
        title: " Your First HTML Website | Sigma Web Development Course - Tutorial #2",
        time: "18:00",
        veiws: "500k",
        ago: "3 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma2.webp"
    },
    {
        title: " Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
        time: "20:00",
        veiws: "300k",
        ago: "3 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma3.webp"
    },
    {
        title: " Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
        time: "20:22",
        veiws: "400k",
        ago: "3 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma4.webp"
    },
    {
        title: "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
        time: "31:00",
        veiws: "450k",
        ago: "3 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma5.webp"
    },
    {
        title: "SEO and Core Web Vitals in HTML | Sigma Web Development Course - Tutorial #6",
        time: "25:00",
        veiws: "350k",
        ago: "2 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma6.webp"
    },
    {
        title: "Forms and input tags in HTML | Sigma Web Development Course - Tutorial #7",
        time: "22:00",
        veiws: "250k",
        ago: "2 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma7.webp"
    },
    {
        title: "Inline & Block Elements in HTML | Sigma Web Development Course - Tutorial #8",
        time: "23:00",
        veiws: "550k",
        ago: "2 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma8.webp"
    },
    {
        title: "Id & Classes in HTML | Sigma Web Development Course - Tutorial #9",
        time: "11:20",
        veiws: "450k",
        ago: "2 mounths ago",
        cname: "CodeWithHarry",
        img: "sigma9.webp"
    },

]
let vedios_container = document.getElementById('vedios')
// vedios_container.style.display = "none"
vedios.forEach((element, index) => {
    console.log(element.title, index);
    vedios_container.innerHTML = vedios_container.innerHTML + `<div style="margin-top: 17px;" class="vedio">
    <div class="number">${index + 1}</div>
    <div class="img">
        <img src="${element.img}" alt="">
        <div class="time">
            ${element.time}
        </div>
    </div>
    <div class="text">
        <p>${element.title}</p>
        <div class="bottom">
            <div class="chanel">
               ${element.cname}
            </div>
            <div class="veiw">
                ${element.veiws}
            </div>
            <div class="ago">
                ${element.ago}
            </div>
            <img class="dot" style="filter:invert(1);" src="svg/threedot.svg" >
        </div>
    </div>

</div>`

});
{/* <div style="margin-top: 17px;" class="vedio">
                <div class="number">1</div>
                <div class="img">
                    <!-- <img src="sigma.webp" alt=""> -->
                    <div class="time">
                        31:00
                    </div>
                </div>
                <div class="text">
                    <p>Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1</p>
                    <div class="bottom">
                        <div class="chanel">
                            CodeWithHarry
                        </div>
                        <div class="veiw">
                            300k
                        </div>
                        <div class="ago">
                            3 mounth ago
                        </div>
                    </div>
                </div>

            </div> */}
let btn = document.getElementById('more_btn')
let menu2 = document.getElementById('menu2')
let show = 0
btn.addEventListener("click", () => {
    console.log('clicked');
    if (show == 0) {
        menu2.style.height = "auto"
        show = 1
        btn.innerHTML = `
        
                    <img style="filter: invert(1);" src="svg/uparrow.svg" alt="">
                    <p >Show less</p>

        `
    } else {
        menu2.style.height = "350px"
        show = 0
        btn.innerHTML = `
       
                    <img style="filter: invert(1);" src="svg/downarrow.svg" alt="">
                    <p >Show more</p>
                
        `
    }

})
let vedio_class = document.getElementsByClassName('vedio')
// console.log(vedio_class);
// for (let index = 0; index < vedio_class.length; index++) {
//     let element = vedio_class[index];
//     element.addEventListener("")

    
    
// }
let menu = document.getElementById('menu')
menu.addEventListener("click",()=>{
    document.getElementById('mobile').classList.toggle("mobile")
    
})
let inpbox = document.getElementById('inpbox')
let inp = document.getElementById('input')
inp.addEventListener("focusin",()=>{
    console.log('Hello i am in');
    inpbox.style.border = "1px solid blue"
    
})
inp.addEventListener("focusout",()=>{
    console.log('Hello i am out');
    inpbox.style.border = " 0.1px solid #aaaaaa49"
    
})
 
