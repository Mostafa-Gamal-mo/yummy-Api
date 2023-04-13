
var mealsArr = [];

async function getMeals() {



    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    const Response =  await api.json();

    mealsArr = Response.categories


    console.log(mealsArr);
    displayIntroMeals()
        
}

getMeals()

function displayIntroMeals() {
    let meals='' ;
    for (let i = 0; i < mealsArr.length; i++) {
        meals += `<div class="col-md-3 mt-3">
          <div class="item position-relative  overflow-hidden rounded-3 ">
          <div class=""><img src="${mealsArr[i].strCategoryThumb}" class="w-100" alt=""></div>
          <div onclick='getName(   ${mealsArr[i].idCategory}   )'class="card-layer position-absolute text-center"> 
          <h2 class="text-black">${mealsArr[i].strCategory}</h2>
          <p>${mealsArr[i].strCategoryDescription}</p>
          </div>
        </div>
      </div>
        
        `
        document.getElementById("CateMeals").innerHTML = meals
    }
}

function getName(id) {
    console.log(id);
    location.href=`../Categoriesdata.html?id=${id}`
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
  