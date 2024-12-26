// URL do arquivo JSON
const jsonUrl = 'pokemon.json';

// Elemento onde os Pokémons serão exibidos
const pokemonList = document.getElementById('pokemon-list');

// Função para carregar o JSON
async function carregarPokemons() {
  try {
    const resposta = await fetch(jsonUrl);
    const pokemons = await resposta.json();

    pokemons.forEach(pokemon => {
      const card = document.createElement('div');
      card.classList.add('pokemon-card');

      card.innerHTML = `
        <h2>${pokemon.nome} (#${pokemon.id})</h2>
        <p>${pokemon.descricao}</p>
        <div class="tipos">Tipos: ${pokemon.tipos.join(', ')}</div>
      `;

      pokemonList.appendChild(card);
    });
  } catch (erro) {
    console.error('Erro ao carregar os dados:', erro);
  }
}

// Chama a função ao carregar a página
carregarPokemons();
