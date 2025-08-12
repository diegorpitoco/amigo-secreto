// Array para armazenar os nomes
let amigos = [];

// Adiciona o nome digitado ao array e atualiza a lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (!nome) {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  input.value = '';
  input.focus();

  limparResultado();
  atualizarLista();
}

// Re-renderiza a UL com os nomes
function atualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  amigos.forEach((nome, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${nome}`;
    ul.appendChild(li);
  });
}

// Limpa o resultado do sorteio
function limparResultado() {
  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';
}

// Sorteia um nome aleatório e mostra na tela
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome para sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = `🎉 Amigo secreto: ${sorteado}!`;
  ulResultado.appendChild(li);
}

// Atalho: Enter no input também adiciona
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('amigo');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adicionarAmigo();
  });
});