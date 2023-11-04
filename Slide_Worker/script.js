let images = document.querySelectorAll("img");
        let wrapper = document.querySelector(".wrapper");
        let movieType = document.querySelector(".movieType");
        let Heading = document.querySelector(".Heading");

        let bar = document.querySelector(".fa-bars");
        let menu = document.querySelector("ul");

        let body = document.querySelector("body");

        bar.addEventListener("click",function(){
            menu.classList.toggle("change")
        });

        // initialize swiper

        var swiper = new Swiper(".swiper",{
           slidesPerview:1,
           spaceBetween:30,
           loop:true,
           autoplay:{
            delay:2000
           },
           on:{
            slideChange:function(){
                const currentSlide=(this.realIndex+1)
                if(currentSlide==1){
                    document.body.style.background="url('./img/iron-man 009.jpg')"
                    Heading.innerText="Iron man"
                    document.body.style.transition="0.5"
                    movieType.innerText="2013 || Action || Scifi || Thriller"
                }
              if(currentSlide==2){
                    document.body.style.background="url('./img/spider 011.jpg')"
                    Heading.innerText="SpiderMan"
                    document.body.style.transition="0.5"
                    movieType.innerText="2017 || Action || Scifi || Thriller"
                }
                if(currentSlide==3){
                    document.body.style.background="url('./img/black-panther 012.png')"
                    Heading.innerText="Black Panther"
                    document.body.style.transition="0.5"
                    movieType.innerText="2017 || Action || Scifi || Thriller" 
                }
                if(currentSlide==4){
                    document.body.style.background="url('./img/hulk 012.jpg')"
                    Heading.innerText="Hulk"
                    document.body.style.transition="0.5"
                    movieType.innerText="2008 || Action || Scifi || Thriller"
                }
                if(currentSlide==5){
                    document.body.style.background="url('./img/captain-america 012.jpg')"
                    Heading.innerText="CaptainAmerica"
                    document.body.style.transition="0.5"
                    movieType.innerText="2011 || Action || Scifi || Thriller"
                }
            }
           },
           pagination:{
            el:".swiper-pagintion",
            clickable:true
           },
           mousewheel:true,
           breakpoints:{
            1024:{
                slidesPerView:3
            },
            900:{
                slidesPerView:2
            },
            768:{
                slidesPerView:1
            }
           } 
        });