const results = document.querySelector(".row")
let array = []
async function asyncFetch() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();
    array = data.results
        console.log(data);
    displayResults(data);
}
function displayResults(data) {
let output = "";
   
        data.results.forEach(item => {
            output += `
                <div class="col-6 col-sm-4 col-md-3 align-items-center"> 
                
                <img src="./imgg/6.owen-lars-main.jpeg" class="card-img-top imgCard" alt="" />
                <h4 class="card-title text-center">Name: ${item.name}</h4>
                <button type="button" class="btn btn-outline-primary"><
                <i class="bi bi-bookmark-plus-fill text-primary">Details</i>
                <h4 class="card-title text-center">Gender: ${item.gender}</h4>
                <h4 class="card-title text-center">Age: ${item.height}</h4>
                </button>
                  </div>
                  `})
                
                results.innerHTML = output;
            }
            asyncFetch();
            
            