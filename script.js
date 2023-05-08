function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

  document.getElementById('clock').textContent = timeString;

  setTimeout(updateTime, 1000);
}

window.onload = function() {
  var request = new XMLHttpRequest();

  request.open('GET', "bdd/piece.json");

  request.responseType = 'json';
  
  request.send();
  request.onload = async function() {
    var produit = await request.response;
    console.log(produit)
    
  }
  updateTime();

  var produitSelect = document.getElementById('produit');
  var pieceSelect = document.getElementById('piece');

  produitSelect.addEventListener('change', function() {
    var selectedProduct = produitSelect.value;
    console.log("test")
    // Réinitialiser les options de la liste déroulante des pièces
    pieceSelect.innerHTML = '<option value="">Sélectionner une pièce</option>';

    // Ajouter les pièces associées au produit sélectionné
    if (selectedProduct === 'produit1') {
      pieceSelect.innerHTML += '<option value="piece1">Pièce 1</option><option value="piece2">Pièce 2</option><option value="piece3">Pièce 3</option>'
    } else if (selectedProduct === 'produit2') {
      pieceSelect.innerHTML += '<option value="piece1">Pièce 1</option><option value="piece2">Pièce 2</option><option value="piece3">Pièce 3</option>';
    }

    
    // Ajouter d'autres blocs if/else if pour les autres produits
  });

  // Soumettre le formulaire
  var form = document.querySelector('form');
  form.addEventListener('submit', function() {

    console.log("okkk")
    // Récupérer les valeurs des champs du formulaire
    var date = document.getElementById('date').value;
    var pole = document.getElementById('pole').value;
    var produit = document.getElementById('produit').value;
    var piece = document.getElementById('piece').value;

    // Faire quelque chose avec les valeurs récupérées (par exemple, les afficher dans la console)
    console.log('Date: ' + date);
    console.log('Pôle: ' + pole);
    console.log('Produit: ' + produit);
    console.log('Pièce: ' + piece);

    // Réinitialiser le formulaire
    form.reset();
    pieceSelect.innerHTML = '<option value="">Sélectionner une pièce</option>';
  });

};
