// https://www.themealdb.com/api/json/v1/1/list.php?i=list



var ingredientsArr = [];

async function getIngredients() {



    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)

    const Response =  await api.json();

    ingredientsArr = Response.meals


    // console.log(ingredientsArr);
    displayIngredients()
        
}

getIngredients()

function displayIngredients() {
  let temp='' ;

  for (let i = 0; i < ingredientsArr.length; i++) {
      temp += `<div class="col-md-3 mt-3">
        <div class="text-white text-center">

        <i onclick="getId(     ${ingredientsArr[i].idIngredient} )" class="fa-solid fa-drumstick-bite fa-5x i-areastyle"></i>
        <h2 >${ingredientsArr[i].strIngredient}</h2>
        <p  >${ingredientsArr[i].strDescription?.split(" ").slice(0,15).join(" ")}</p>
        </div>
      </div>
    </div>   
      `
      document.getElementById("romIngredients").innerHTML = temp
  }
}








function getId(id) {
  // console.log(id);
    location.href=`../Ingredientsdata.html?id=${id}`

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
  