

function validatonName(name){
  if(/^[a-zA-Z ]+$/.test(name)){
    $('#eNAme').addClass('is-valid')

  }else{
    $('#eNAme').addClass('is-invalid')
  }

}

function validatonEmail(name){

    const x = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if(x.test(name)){
    $('#Email').addClass('is-valid')

  }else{
    $('#Email').addClass('is-invalid')
  }

}

function validatonPhone(phone){
  const p =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if(p.test(phone)){
    $('#Phone').addClass('is-valid')

  }else{
    $('#Phone').addClass('is-invalid')
  }

}


function validatonAge(age){
  const Age = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
  if(Age.test(age)){
    $('#Age').addClass('is-valid')

  }else{
    $('#Age').addClass('is-invalid')
  }

}

function validatonPassword(password){
  const w =  /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/  ;
  if(w.test(password)){
    $('#Password').addClass('is-valid')

    
  }else{
    $('#Password').addClass('is-invalid')
  }

}


function validatonRePassword(){

  if(document.getElementById("Password").value == document.getElementById("Password").value){
    $('#REPassword').addClass('is-valid')
 
  }else{
    $('#REPassword').addClass('is-invalid')
  }

}





$('#submitBtn').removeAttr("disabled")






































































































































































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
  
  