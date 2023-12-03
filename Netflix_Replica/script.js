let movies=[
    {
        name:"Maanagaram",
        poster:"./Img/Maangaram.jpeg",
        rating:8.1,
        year:2017
    },
    {
        name:"Kaithi",
        poster:"./Img/Kaithi.jpg",
        rating:8.5,
        year:2019
    },
    {
        name:"Master",
        poster:"./Img/Master_2021_poster.jpg",
        rating:7.3,
        year:2021
    },
    {
        name:"Vikram",
        poster:"./Img/Vikram.jpeg",
        rating:8.3,
        year:2022
    },
    {
        name:"Leo",
        poster:"./Img/Leo.jpg",
        rating:7.5,
        year:2023
    },
    {
        name:"Jigarthanda",
        poster:"./Img/Jigarthanda.jpg",
        rating:8.2,
        year:2014
    },
    {
        name:"Jigarthanda Double X",
        poster:"./Img/Jigarthanda Double X.jpg",
        rating:8.4,
        year:2023
    },
    {
        name:"Jawan",
        poster:"./Img/jawan.jpg",
        rating:7.1,
        year:2023
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
               <h2>Year : ${data[i].year}</h2>
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
    