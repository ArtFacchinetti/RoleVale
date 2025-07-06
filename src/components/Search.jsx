import { useState } from "react"
import './css/Search.css'

function searchStr(data, str) {
  let filtered = [];
  const cleanStr = str
    .normalize("NFD")              // separa acento das letras
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase();                // deixa tudo minúsculo
  if (cleanStr === "") return []; // evita buscar por string vazia

  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    let encontrou = false;

    for (const [key, value] of Object.entries(obj)) {
      if (encontrou) break; // já adicionou, pula o restante

      if (key == 'imagem') { continue }

      if (Array.isArray(value)) {
        for (const item of value) {
          if (
            item.toLocaleLowerCase().includes(cleanStr)
          ) {
            filtered.push(obj);
            encontrou = true;
            break;
          }
        }
      } else if (typeof value === "string") {
        const cleanValue = value.normalize("NFD")              // separa acento das letras
          .replace(/[\u0300-\u036f]/g, "") // remove os acentos
          .toLowerCase();
        if (
          cleanValue.includes(cleanStr)
        ) {
          filtered.push(obj);
          encontrou = true;
          break;
        }
      }


    }
  }

  return filtered;
}

const Search = ({ setFiltered, data }) => {

  return (
    <>
      <input type='text' onInput={(e) => { setFiltered(() => searchStr(data, e.target.value)) }} className='search-input' placeholder="PESQUISE POR NOME, TAG, TIPO..."></input >
    </>

  )
}

export default Search