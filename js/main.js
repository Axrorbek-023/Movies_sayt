let partMovies = movies.slice(100,200)
let elMovList = document.querySelector('.movises__list')
let elOption = document.querySelectorAll('option')
let elSelCategory = document.querySelector('.sel__category')

fnRender(partMovies)

function fnRender(data){
  elMovList.innerHTML = ''
  data.forEach((item, index)=>{
    let newLi = document.createElement('li')
    newLi.classList = 'movies__item'
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title d-flex align-itams-center justify-content-between">${item.Title.toString().slice(0,20)} <i onclick="fnLoveMovie('${item.ytid}')" class="bi bi-heart"></i></h5>
                      <p class="card-text">${item.Categories}</p>
                      <p class="card-text">${item.movie_year}</p>
                      <h2 class="card-text">${item.imdb_rating}</h2>
                      <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">watch movie</a>
                    </div>
                  </div>
    `
    elMovList.appendChild(newLi)
    
});
}


function fnYear(value){
  if(value == 'old'){
    fnRender(partMovies.sort((a,b)=> a.movie_year - b.movie_year));
  }else{
    fnRender(partMovies.sort((a,b)=> b.movie_year - a.movie_year));
  }
}


function fnRenting(value){
  if(value == 'min'){
    fnRender(partMovies.sort((a,b)=> a.imdb_rating - b.imdb_rating));
  }else{
    fnRender(partMovies.sort((a,b)=> b.imdb_rating - a.imdb_rating));
  }
}

let arrCategory = []
partMovies.forEach((item)=>{
  if(!arrCategory.includes(item.Categories)){
    arrCategory.push(item.Categories)
  }
})

arrCategory.forEach(item=>{
  let newOption = document.createElement('option')
  newOption.textContent = item
  newOption.value = item
  elSelCategory.appendChild(newOption)
})

function fnCategory(value){
  console.log(value);
  fnRender(partMovies.filter((item)=> item.Categories == value));
}


function movieSearch(e){
  e.preventDefault()  
  let mov = e.target.mov.value
  fnRender(partMovies.filter((i)=>
  i.Title.toString().toLowerCase().includes(mov.toLowerCase()) &&
  i.Title.toString().toLowerCase()[0] == mov.toLowerCase()[0]
  ));
}

let intialLocalData = []
function fnLoveMovie(id){
  partMovies.find((item)=> item.ytid == id)
  intialLocalData.push(partMovies.find((item)=> item.ytid == id))
  window.localStorage.setItem('localMovie', JSON.stringify(intialLocalData))
}