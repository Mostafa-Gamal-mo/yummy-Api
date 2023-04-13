// https://www.themealdb.com/api/json/v1/1/list.php?a=list

// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian






var areaArr = [];


async function getMeals() {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    const Response =  await api.json();

    areaArr = Response.meals

    console.log(areaArr);
     displayArea()
        
}

getMeals()



function displayArea() {

  let   cartoona='';

    for (let i = 0; i < areaArr.length; i++) {

      cartoona += `<div class="col-md-3">
       <div class="text-white text-center">
           <i onclick="getIndex(        ${i}        )" class="fa-solid fa-house-laptop fa-5x i-areastyle"></i>
           <h2>${areaArr[i].strArea}</h2>
       </div>
     </div>
        
        `
        document.getElementById("rowArea").innerHTML = cartoona;
    }

}

function getIndex(id) {
  // console.log(id);
  location.href=`../areaData.html?id=${id}`
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
  
  