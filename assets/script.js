
// Typed JS.............
let typed = new Typed('.typed-text',{
    strings: ['The Beg Joker', 'Kawsar Ahammed'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

// FiterAble Image Gallery............
window.addEventListener('load',()=>{
 // Project Image Filterable..............
 let fitlerTab = document.querySelectorAll('.tab');
//  tab active remove..............
const removefiterActive =()=> fitlerTab.forEach(tab=>{
    tab.classList.remove('active');
})

 fitlerTab.forEach(tab=>{
    tab.addEventListener('click',(event)=>{
        removefiterActive();
        tab.classList.add('active');

        let filterTabName = event.target.getAttribute('data-name');

        document.querySelectorAll('.portfolio-projet').forEach(project=>{
            let filterProjectName = project.getAttribute('data-name');
            if((filterProjectName == filterTabName) || filterTabName == 'all'){
                project.style.display='block'
            }else{
                project.style.display='none'  
            }
        })       
        
    })
 })
});

// FAQs............
let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.querySelector('.faq-ans').classList.toggle('faq-ans-active');
        faq.querySelector('i').classList.toggle('faq-icon-active');  
    })
})


// Swiper JS............

let swiper = new Swiper(" .mySwiper",{
    slidesPerView: 3,
    spaceBetween: 20,  
    pagination:{
        el: ".swiper-pagination",     
        clickable: true,
        loop: true,
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween: 0,   
        },
        600:{
            slidesPerView: 2,
            spaceBetween: 10,   
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 20, 
        }        
    }
})   


// Phone menu............
if(window.innerWidth < 1024){
    window.addEventListener('scroll',()=>{
        document.querySelector('.menu-links').style.display='flex'
    });
    
    // Active menu............
    let MenuItems = document.querySelectorAll('.menu-links a');
    // Active Remove............
    const removeActive =()=> MenuItems.forEach(item=>{
        item.classList.remove('active')
    })

    // Active add............
    MenuItems.forEach(item=>{
        item.addEventListener('click',()=>{
            removeActive();
            item.classList.add('active');
        })
    })
}

// Theme CustoMize Box............
let themeCustoMize = document.querySelector('.theme-customize');
let themeCloser = document.querySelector('.fa-close');
let themeOpener = document.querySelector('#theme-icon');

themeOpener.addEventListener('click',()=>{
    themeCustoMize.style.display='flex'
});
themeCloser.addEventListener('click',()=>{
    themeCustoMize.style.display='none' 
})
window.addEventListener('scroll',()=>{
    themeCustoMize.style.display='none' 
});




// Primary Color Change............
// Get the saved primary color preference from local storage
const savedPrimaryColor = localStorage.getItem('primaryColor');
var root = document.querySelector(':root');

// Apply the saved preference (if available) when the page loads
if (savedPrimaryColor) {
    root.style.setProperty('--hue-color', savedPrimaryColor);
}

let AllColorePallet = document.querySelectorAll('.choose-color span')

AllColorePallet.forEach(color => {
    color.addEventListener('click', () => {
        let Hue = 0; // Initialize the Hue value

        if (color.classList.contains('color1')) {
            Hue = 252;
        } else if (color.classList.contains('color2')) {
            Hue = 54;
        } else if (color.classList.contains('color3')) {
            Hue = 352;
        } else if (color.classList.contains('color4')) {
            Hue = 152;
        } else if (color.classList.contains('color5')) {
            Hue = 202;
        }
        root.style.setProperty('--hue-color', Hue);

        // Save the primary color preference to local storage
        localStorage.setItem('primaryColor', Hue.toString());
    });
});



// Background Color Change............

// Get the saved background preference from local storage
const savedBgPreference = localStorage.getItem('bgPreference');
const bodyElement = document.querySelector('body');

// Apply the saved preference (if available) when the page loads
if (savedBgPreference === 'bg1') {
    bodyElement.classList.remove('dark-mood');
} else if (savedBgPreference === 'bg2') {
    bodyElement.classList.add('dark-mood');
}

let AllBgPallet = document.querySelectorAll('.choose-bg span');

AllBgPallet.forEach(Bg => {
    Bg.addEventListener('click', () => {
        if (Bg.classList.contains('bg1')) {
            bodyElement.classList.remove('dark-mood');
            localStorage.setItem('bgPreference', 'bg1'); // Save preference
        } else if (Bg.classList.contains('bg2')) {
            bodyElement.classList.add('dark-mood');
            localStorage.setItem('bgPreference', 'bg2'); // Save preference
        }
    });
});

