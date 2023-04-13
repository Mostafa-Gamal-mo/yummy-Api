// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

const searchParams = location.search
const parId= new URLSearchParams(searchParams);
let id = parId.get("id");
// console.log(id);



var ngredientsArr = [];


async function getnGredientsName() {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)

    const Response =  await api.json();

    ngredientsArr = Response.meals


    let areaName = ngredientsArr[id].strIngredient
    
        // console.log(areaName);
        // getCityMeals(areaName)
        getnGredientsMeals(areaName)
}
getnGredientsName()



async function getnGredientsMeals(x) {

    const apii = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`)
        
            const Responseeee =  await apii.json();
        
           let areaArrr = Responseeee.meals
        
        
            let areaData = areaArrr
            displayGredientsMeals(areaData)
            console.log(areaData);
            // displayData(areaData)
            // displayGredientsMeals(areaData)
        
        
        
        
        }





function displayGredientsMeals(m) {

    let   cartoona='';
  
      for (let i = 0; i < m.length; i++) {
  
        cartoona += `<div class="col-md-3 mt-3">

            <div class="item position-relative  overflow-hidden rounded-3 ">
            <div class=""><img src="${m[i].strMealThumb}" class="w-100" alt=""></div>
            <div onclick=' sayHi(${m[i].idMeal} )'class="card-layer position-absolute  d-flex align-items-center">
             <h2 class="text-black">${m[i].strMeal}</h2></div>
          </div>
        </div>
          
          `
          document.getElementById("romIngredientsData").innerHTML = cartoona;
      }
  
  }
  

  function  sayHi(id) {
    // console.log(id);
    location.href=`../homeDe.html?id=${id}`

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
  