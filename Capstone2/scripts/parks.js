
//GLOBALS
let selectedLocation="";
let selectedparkType="";
| let filterText=""


//window.addEventListener("load",e=>{
    document.addEventListener("DOMContentLoaded",e=>{

        searchButton.addEventListener("click",e=>{
            filterText=searchInput.value;
        })


 locationArray.forEach(location=>locationslist.innerHTML+=`<option>${location}</option>`);
 parkTypesArray.forEach(pt=>parkTypelist.innerHTML+=`<option>${pt}</option>`);

 locationslist.addEventListener("change",e=>{
    selectedLocation=e.target.value;
    showResults();
 })

 parkTypelist.addEventListener("change",e=>{
    selectedparkType=e.target.value;
    showResults();
 })

 function isMatch(p){
    return
    (selectedLocation==""||p.state==selectedLocation)&&
    (selectedparkType==""||p.locationName.includes(selectedparkType));
 }

 function getCard(p){

    let visit="";
    if(p.hassOwnproperty("visit")){
        visit=`<div><a href="${p.visit}">visit:</a>/div>`
    }
    //let phone="";
    //if(p.phone){
        //phone=`<div>PHONE:${p.phone}</div>
        //}
        let phone=
        return`<div class="card">
        ${p.locationName}
        <div><b>${p.state}</b></div>
        ${visit}
        ${phone}
        </div>`;
}

function showResults(){

}
    }
    }
        
    }
 }
 }
 })
 })
        }
            )
    })
})