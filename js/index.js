const loadPhone = async(searchphone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchphone}`)
    const data = await res.json()
    const phones = data.data
    displayPhone(phones)
    

}
const displayPhone = phones1 => {
    // step one: select id in html file
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''
    phones1.forEach(phone2 => {
        console.log(phone2)
        // step two : create e new div tag
        const newDiv = document.createElement('div')
        newDiv.classList = `card bg-gray-400 shadow-xl`;
        // step three : set inner html
        newDiv.innerHTML = `
        <figure><img src="${phone2.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone2.phone_name
              }</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
        
        `;
        cardContainer.appendChild(newDiv)



        
    });
}

loadPhone()

// click handler

const handleSearch = ()=>{
    const inputfield = document.getElementById('searchOption')
    const inputValue = inputfield.value
    console.log(inputValue)
    loadPhone(inputValue)

}