const resultEl = document.getElementById('result');
document.getElementById('location').addEventListener('click',function(e){
    e.preventDefault();
    console.log(document.getElementById('search-loc-term').value);
const loc = document.getElementById('search-loc-term').value
    fetch(`/dashboard/${loc}`)
    .then(response => response.json())
    .then(response =>{
        console.log(response[0])
        let traveler_ageEl = document.createElement('p');
        traveler_ageEl.textContent = response[0].traveler_age;
        let traveler_genderEl = document.createElement('p');
        traveler_genderEl.textContent = response[0].traveler_gender;

        let traveler_nationalityEl = document.createElement('p');
        traveler_nationalityEl.textContent = response[0].traveler_nationality;

        let accommodation_typeEl = document.createElement('p');
        accommodation_typeEl.textContent = response[0].accommodation_type;

        let accommodation_costEl = document.createElement('p');
        accommodation_costEl.textContent = response[0].accommodation_cost;


        resultEl.appendChild(traveler_ageEl);
        resultEl.appendChild(traveler_genderEl);
        resultEl.appendChild(traveler_nationalityEl);
        resultEl.appendChild(accommodation_typeEl);
        resultEl.appendChild(accommodation_costEl);
        
    });
})