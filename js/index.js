const loadPhone = async(searchphone = 'a') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchphone}`)
    const data = await res.json()
    const phones = data.data
    displayPhone(phones)
    

}
const displayPhone = phones1 => {
    // step one: select id in html file
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = ''
    // show all mobile show 
    const showALlContainer = document.getElementById('show-all-container')
    if(phones1.length > 9){
        showALlContainer.classList.remove('hidden')
    }
    else{
        showALlContainer.classList.add('hidden')
    }
    // display only first ten mobile
    phones1 = phones1.slice(0,9);
    phones1.forEach(phone2 => {
        console.log(phone2)
        // step two : create e new div tag
        const newDiv = document.createElement('div')
        newDiv.classList = `card bg-white shadow-xl`;
        // step three : set inner html
        newDiv.innerHTML = `
        <figure><img src="${phone2.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone2.phone_name
              }</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onClick="showDetailsBtn('${phone2.slug}'); show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
              </div>
            </div>
        
        `;
        cardContainer.appendChild(newDiv)



        
    });
    onloadLoadingSpineer(false);

}

// when user is click the show details btn then open modal

const showDetailsBtn = async (id) => {
    
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone01 = data.data
    showPhoneDetails(phone01)

}

loadPhone()

// show modal 
const showPhoneDetails = (phone01) => {
   
    const phoneName = document.getElementById('show-phone-name')
    phoneName.innerText = phone01.name
    const showDetailsContainer = document.getElementById('show-details-container')   
    showDetailsContainer.innerHTML = `
    <img class="mx-auto" src="${phone01.image}" alt="">
    <p>hello guys this is iphone.this phone is world famus.when latest versioon is update in the world then people very interested to buy it</p>
    <h5><strong>storage : </strong>${phone01.mainFeatures.storage}</h5>
    <p><strong>Display Size : </strong>${phone01.mainFeatures.displaySize}</p>
    <p><strong>chipSet : </strong>${phone01.mainFeatures.chipSet}</p>
    <p><strong>Memory : </strong>${phone01.mainFeatures.memory}</p>
    <p><strong>releaseDate
    : </strong>${phone01.releaseDate}</p>
    ` 
    show_details_modal.showModal()
    console.log(phone01)


}

// click handler

const handleSearch = ()=>{
    onloadLoadingSpineer(true)
    const inputfield = document.getElementById('searchOption')
    const inputValue = inputfield.value
    console.log(inputValue)
    loadPhone(inputValue)
    

}

const onloadLoadingSpineer = (isLoading) => {
    const loadingData = document.getElementById('loading-spinner')
    if(isLoading){
        loadingData.classList.remove('hidden')

    }
    else{
        loadingData.classList.add('hidden')
    }
}