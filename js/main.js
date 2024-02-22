let partelMovies = movies.slice(100,200)
let elMovList = document.querySelector('.movises__list')
let elOption = document.querySelectorAll('option')

partelMovies.forEach((item, index)=>{
    let newLi = document.createElement('li')
    let val = elOption.value
    newLi.classList = 'movies__item'
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
                    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.Title.toString().slice(0,20)}</h5>
                      <p class="card-text">${item.Categories}</p>
                      <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">watch movie</a>
                    </div>
                  </div>
    `
    elMovList.appendChild(newLi)
    
});