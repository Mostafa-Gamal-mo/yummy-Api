// `https://www.themealdb.com/api/json/v1/1/filter.php?c=${}`

const searchParams = location.search
const parId= new URLSearchParams(searchParams);
let id= parId.get("id");
// console.log(id);


var mealsArr = [];
var mealsArrr = [];
var x ;

async function getMeals() {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    const Response =  await api.json();

    mealsArr = Response.categories
    x=mealsArr[id].strCategory

    const apii = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)

    const Responseee =  await apii.json();

    mealsArrr = Responseee.meals
   console.log(mealsArrr);
   displayIntroMeals()

          
}
getMeals()

function displayIntroMeals() {
    let meals='' ;
    for (let i = 0; i < mealsArrr.length; i++) {
        meals += `<div class="col-md-3 mt-3">
          <div class="item position-relative  overflow-hidden rounded-3 ">
          <div class=""><img src="${mealsArrr[i].strMealThumb}" class="w-100" alt=""></div>
          <div onclick='showDet( ${mealsArrr[i].idMeal  } )'class="card-layer position-absolute  d-flex align-items-center"> 
          <h2 class="text-black">${mealsArrr[i].strMeal}</h2>
          </div>
        </div>
      </div>
        
        `
        document.getElementById("CateDeMeals").innerHTML = meals
    }
}

function showDet(id){
    location.href=`../homeDe.html?id=${id}`
    // console.log(id);

    }







































































































































































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

  $(window).on("load",()=>{
    setTimeout(()=>{
      $('.loading-screen').fadeOut(500)
      $(document.body).css('overflow',' visible')
      $(document.body).css('overflow',' visible')
  
  
    },500)
  })
  