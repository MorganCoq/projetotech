document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && email && mensagem) {
      document.getElementById('mensagemSucesso').innerText = 'Mensagem enviada com sucesso!';
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('mensagemSucesso').innerText = 'Por favor, preencha todos os campos.';
      document.getElementById('mensagemSucesso').style.color = 'red';
    }
  });
  