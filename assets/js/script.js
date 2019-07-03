$(function(){
Swal.fire({
  title: 'Etes-vous déjà participant à ideation camp?',
  text: "Inscrivez-vous via le boutton ci-dessous!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Je m\'inscris!',
  cancelButtonText: 'Je suis déjà participant',
}).then((result) => {
  if (result.value) {
    Swal.fire(
      window.open("http://ideation.incubuo.tech/inscription/")
      //window.location.href = ""
    )
  }
})

	

})