const searchParams = location.search
const parId= new URLSearchParams(searchParams);
let id = parId.get("id");
let mealData;






// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}

(async function () {
    

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

    const Response =  await api.json();


    mealData=Response.meals
    // console.log(mealData[0]);
  
    

    showDetails()
})()

// ${mealData[0].strSource}
function showDetails() {



    temp=`
    
    <div class="col-3">
    <div class="">
      <img src="${mealData[0].strMealThumb}" alt="img" class="w-100">
      <h2 class="mt-3">${mealData[0].strMeal}</h2>

    </div>
  </div>
  <div class="col-9">
    <div>
      <h2>Instructions</h2>
      <p> ${mealData[0].strInstructions}</p>
      <h2 >Area : ${mealData[0].strArea}</h2>
      <h2>Category :${mealData[0].strCategory}</h2>
      <h2>Recipes :</h2>

      <span class="btn bg-primary-subtle">${mealData[0].strIngredient1 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient2 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient3 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient4 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient5 }</span>
      <div class="mt-3 ">
      
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient6 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient7 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient8 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient9 }</span>
      <span class="btn bg-primary-subtle">${mealData[0].strIngredient10 }</span>
      </div>
      <div class="mt-3 ">
        
        <span class="btn bg-primary-subtle">${mealData[0].strIngredient11 }</span>
        <span class="btn bg-primary-subtle">${mealData[0].strIngredient12 }</span>
        <span class="btn bg-primary-subtle">${mealData[0].strIngredient13 }</span>
     
        </div>


      <h2 class="mt-3">Tags :</h2>
      <span class="btn bg-primary-subtle">${mealData[0].strTags}</span>
      <br>
      <button  class="btn btn-success mt-3"><a href="${mealData[0].strSource}" class="text-white">Source</a></button>
      <button  class="btn btn-danger mt-3"><a href="${mealData[0].strYoutube}" class="text-white">Youtube</a></button>
      
    </div>
  </div>
    `
    document.getElementById('rowDEt').innerHTML = temp

}



































$(window).on("load",()=>{
  setTimeout(()=>{
    $('.loading-screen').fadeOut(500)
    $(document.body).css('overflow',' visible')
    $(document.body).css('overflow',' visible')


  },500)
})

$('#menuIcone').on('click',()=>{
  let  menuWidth = $('#sideMenu').outerWidth(true)
  $('#Search').hide(0,()=>{
    $('#Categories').hide(0,()=>{
      $('#Area').hide(0,()=>{
        $('#Ingredients').hide(0,()=>{
          $('#Contact').hide(0)
        })
      })
    })
  })
  if($('.mynav').css('left')=='0px'){
    $('.mynav').animate({'left':`-${menuWidth}`})
    $('#menuIcone').addClass('fa-bars').removeClass('fa-xmark',()=>{
      
    });
    
  }else{
  
    $('.mynav').animate({'left':`0`})
    $('#menuIcone').addClass('fa-xmark').removeClass('fa-bars');
    $('#Search').show(500,()=>{
      $('#Categories').show(500,()=>{
        $('#Area').show(500,()=>{
          $('#Ingredients').show(500,()=>{
            $('#Contact').show(500)
          })
        })
      })
    })
  
  }
  
  })
  