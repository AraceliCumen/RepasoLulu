// // Para empezar a trabajar con eventos debemos asegurarnos que la página cargue en el windows
// window.addEventListener('load', function(event) {
//   // console.log(event);
//   // console.log(event.target);// recibe la carga:document
//   // console.log(event.currentTarget);// el que escucha el evento:window(osea a quien esta asociado el addEventListener)
// });
window.addEventListener('load', function(event) {
  var title = document.body.firstElementChild;
  title.addEventListener('mouseover', function(event) {
    title.textContent = 'Hola otra Vez';
  });
  title.addEventListener('mouseout', function(event) {
    title.textContent = 'Practicando Eventos ';
  });

  var image = document.body.children[1];
  image.addEventListener('mouseover', function(event) {
    image.src = 'assets/imgs/fondo2.jpg';
  });
  image.addEventListener('mouseout', function(event) {
    image.src = 'assets/imgs/fondo.jpg';
  });
});
