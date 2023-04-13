
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

const searchParams = location.search
const parId= new URLSearchParams(searchParams);
let id= parId.get("id");




var areaArr = [];


async function getCityName() {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    const Response =  await api.json();

    areaArr = Response.meals


    let areaName = areaArr[id].strArea
    
        // console.log(areaName);
        getCityMeals(areaName)
}
getCityName()


async function getCityMeals(x) {

    const apii = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`)
        
            const Responseeee =  await apii.json();
        
           let areaArrr = Responseeee.meals
        
        
            let areaData = areaArrr
        
            console.log(areaData);
            displayData(areaData)
        
        
        
        
        }

function displayData(y) {

    let   cartoona='';
  
      for (let i = 0; i < y.length; i++) {
  
        cartoona += `<div class="col-md-3 mt-3">
            <div class="item position-relative  overflow-hidden rounded-3 ">
            <div class=""><img src="${y[i].strMealThumb}" class="w-100" alt=""></div>
            <div onclick='getId(  ${y[i].idMeal } )'class="card-layer position-absolute  d-flex align-items-center">
             <h2 class="text-black">${y[i].strMeal}</h2></div>
          </div>
        </div>
          
          `
          document.getElementById("rowDataArea").innerHTML = cartoona;
      }
  
  }
  

function  getId(id) {
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
  
  