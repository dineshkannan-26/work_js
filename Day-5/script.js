let movies=[
    {
        name:"Avenger Infinity War",
        poster:"https://images-cdn.ubuy.co.in/63b7b107d4159432fb5ec817-avengers-infinity-war-movie-poster.jpg",
        rating:8.7
    },
    {
        name:"Avenger EndGame",
        poster:"https://i.ebayimg.com/images/g/u-8AAOSwd8piXfYJ/s-l1200.webp",
        rating:8.8
    },
    {
        name:"Master",
        poster:"https://pbs.twimg.com/media/EgfVyTnU4AAv_Lo.jpg",
        rating:7.3
    },
    {
        name:"Leo",
        poster:"https://i.pinimg.com/1200x/e9/f1/48/e9f148899b76bedbea4c3f2f4758201d.jpg",
        rating:8.0
    },
    {
        name:"Vikram",
        poster:"https://e1.pxfuel.com/desktop-wallpaper/1006/88/desktop-wallpaper-red-hot-details-about-kamal-haasan-s-pair-in-vikram-vikram-movie-kamal-haasan.jpg",
        rating:8.3
    },
    {
        name:"Mark Anthony",
        poster:"https://media2.pghcitypaper.com/pittsburgh/imager/u/zoom/24569842/markantony.jpg?cb=1694592830",
        rating:6.8
    },
    {
        name:"Maanaadu",
        poster:"https://igimages.gumlet.io/tamil/home/maanaadu_27112021_m1.jpg?w=376&dpr=2.6",
        rating:8.3
    },
    {
        name:"Bigil",
        poster:"https://i.pinimg.com/474x/35/9c/95/359c95e6fca5a071f28dc7f67a533865.jpg",
        rating:6.7
    },
];

function searchMovie() {

    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {
        let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
};

function displayMovies(data){
    
document.getElementById("movies").innerHTML="";

// convert html to string    

    let htmlString = ``;

    for(let i=0;i<data.length;i++)
    {
        htmlString = htmlString + `
        <div class="movie">
        <div class="overlay">
           <div class="video">

           </div>
           <div class="details">
               <h1>${data[i].name}</h1>
               <h2>IMDB : ${data[i].rating}</h2>
           </div>
       </div>
           <img class="poster" src="${data[i].poster}" alt="poster-4">
       </div>
        `;
    }

    console.log(htmlString);
    document.getElementById("movies").innerHTML=htmlString;
};


displayMovies(movies);




// let movieDiv =  document.createElement("div");
    // movieDiv.classList.add("movie");

    // let overlayDiv = document.createElement("div");
    // overlayDiv.classList.add("overlay");

    // movieDiv.appendChild(overlayDiv);
    
    // console.log(movieDiv);
    