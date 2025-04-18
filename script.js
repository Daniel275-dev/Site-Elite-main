// função limpar cadastro
function limparFormulario(){
    let elementos = document.getElementsByTagName("input")
    let el = [...elementos]
    el.forEach(element => {
         element.checked = '' 
     });
     let valores = document.getElementsByTagName("input");
     let limpar = [...valores]
     limpar.forEach(valor => {
         valor.value = ''
     });
    }
// correções de caracteres //

    // Telefone tela de cadastro//
  const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', function (e) {
    let valor = e.target.value;

    valor = valor.replace(/\D/g, '');

    if (valor.length > 0) {
      valor = '(' + valor;
    }
    if (valor.length > 3) {
      valor = valor.slice(0, 3) + ') ' + valor.slice(3);
    }
    if (valor.length > 10) {
      valor = valor.slice(0, 10) + '-' + valor.slice(10);
    }

    valor = valor.slice(0, 15);

    e.target.value = valor;
  });
// casdastro de CPF //
const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function (e) {
  let valor = e.target.value;

  valor = valor.replace(/\D/g, '');

  if (valor.length > 3) {
    valor = valor.slice(0, 3) + '.' + valor.slice(3);
  }
  if (valor.length > 7) {
    valor = valor.slice(0, 7) + '.' + valor.slice(7);
  }
  if (valor.length > 11) {
    valor = valor.slice(0, 11) + '-' + valor.slice(11);
  }

  valor = valor.slice(0, 14);

  e.target.value = valor;
});
// code carrosel
function scrollStories(distance) {
  const container = document.getElementById('storyContainer');
  container.scrollBy({ left: distance, behavior: 'smooth' });
}
//menu mobile
function toggle_menu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}
