var mealsArr = [];


async function getMeals() {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

    const Response =  await api.json();

    mealsArr = Response.meals

    // console.log(mealsArr);
     displayIntroMeals()
        
}

getMeals()

function displayIntroMeals() {

  let   cartoona='';

    for (let i = 0; i < mealsArr.length; i++) {

      cartoona += `<div class="col-md-3 mt-3">
          <div class="item position-relative  overflow-hidden rounded-3 ">
          <div class=""><img src="${mealsArr[i].strMealThumb}" class="w-100" alt=""></div>
          <div onclick='showDet(${mealsArr[i].idMeal})'class="card-layer position-absolute  d-flex align-items-center">
           <h2 class="text-black">${mealsArr[i].strMeal}</h2></div>
        </div>
      </div>
        
        `
        document.getElementById("romMeals").innerHTML = cartoona;
    }

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


function showDet(id){
  location.href=`../homeDe.html?id=${id}`
  // console.log(id);
  }
  








