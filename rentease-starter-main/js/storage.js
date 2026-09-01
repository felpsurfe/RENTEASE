"use strict";

const STORAGE_KEY = "renteaseFlats";
let storageMessage = "";

function loadFlats() {
  storageMessage = "";

  try {
    // 1. Lê STORAGE_KEY com localStorage.getItem().
    const storedData = localStorage.getItem(STORAGE_KEY);

    // 2. Se a chave não existir (null), devolve [].
    if (!storedData) {
      return [];
    }
    // 3. Converte a string com JSON.parse().
    const parseData = JSON.parse(storedData);

    // 4. Confirma que o resultado é um array.
    if (Array.isArray(parseData)) {
      return parseData;
    } else {
      storageMessage = "Os dados guardados no localStorage não são um formato válido.";
      return [];
    }
  } catch (error) {
    // 5. Se ocorrer um erro, define storageMessage e devolve [].
    console.error("Erro ao carregar dados do localStorage:", error);
    storageMessage = "Erro ao ler os dados do armazenamento local.";
    return [];
  }
}

function saveFlats(flats) {

  try {
    // 1. Converte o array com JSON.stringify().
    const flatsString = JSON.stringify(flats);

    // 2. Guarda a string com localStorage.setItem().
    localStorage.setItem(STORAGE_KEY, flatsString);

    // Limpa qualquer mensagem de erro anterior e confirma o sucesso
    storageMessage = "";

    // 3. Devolve true quando a gravação termina.
    return true;
  } catch (error) {

    console.error("Error ao guardar os dados no localStorage:", error);
    storageMessage = "Não foi possível guardar os dados no armazenamento local.";
    return false;
  }
}

function getStorageMessage() {
  return storageMessage;
}

function formatCurrency(value) {
  return `${value.toFixed(2).replace(".", ",")} €`;
}

function formatDate(dateText) {
  const dateParts = dateText.split("-");

  if (dateParts.length !== 3) {
    return "Data inválida";
  }

  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}
