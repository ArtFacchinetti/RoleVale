function gerarHTMLLugar(lugar) {
  return `
    <div class="role-card">
      <div class="rc-img-cont">
        <img src="${lugar.imagem}" alt="Imagem restaurante ${lugar.nome}" class="rc-img" style="transform: translateY(-50px);">
      </div>
      <div class="rc-info-cont">
        <div class="rc-name-cont">
          <h1 class="rc-name">${lugar.nome}</h1>
        </div>
        <div class="rc-type-cont">
          <span class="rc-type">${lugar.tipo}</span>
        </div>
        <div class="rc-tag-cont">
          ${lugar.tags.map(tag => `<div class="rc-tag">${tagRendering(tag)}</div>`).join('')}
        </div>
        <div class="rc-local-cont">
          <span class="rc-local">${lugar.cidade}, ${lugar.bairro} 📍</span>
        </div>
      </div>
    </div>
  `;
}


function tagRendering(tag) {
    switch (tag) {
        case "18+" : return "A";
        break;
    default:
        console.log(`Tag ${tag} não encontrada, place holder adicionado no lugar!`);
    }
}

function loopThroughSearch(data) {
  document.getElementById('container').innerHTML = "";
  data.forEach(element => {
    const html = gerarHTMLLugar(element);
    document.getElementById('container').innerHTML += html;
  });
}

export default loopThroughSearch;