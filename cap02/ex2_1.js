const forms = document.querySelector('form');

forms.addEventListener('submit', (evento) => {
  const resposta = document.querySelector('h3');

  //const nome = document.querySelector('input#inNome').value;
  const nome = forms.inNome.value;

  //resposta.textContent = `Olá ${nome}`;
  resposta.innerText = `Olá ${nome}`;
  evento.preventDefault();
});
