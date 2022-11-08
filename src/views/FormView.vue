<template>
  <form class="form" @submit.prevent="submitForm">
    <label for="nome">Nome</label>
    <input id="nome" type="text" class="in-nome" v-model="theForm.nome">
    <label for="cpf">CPF</label>
    <input type="text" id="cpf" class="in-cpf" v-model="theForm.cpf">
    <label for="end-1">Endereço 1</label>
    <textarea id="end-1" class="in-end-1" v-model="theForm.end1"></textarea>
    <label for="end-1">Endereço 2</label>
    <textarea id="end-2" class="in-end-2" v-model="theForm.end2"></textarea>
    <label for="cep">CEP</label>
    <input type="text" id="cep" class="in-cep" v-model="theForm.cep">
    <label for="mes">Mês</label>
    <input type="text" id="mes" class="in-mes" v-model="theForm.mes">
    <label for="ano">Ano</label>
    <input type="text" id="ano" class="in-ano" v-model="theForm.ano">
    <label for="Consumo">Consumo</label>
    <input type="text" id="Consumo" class="in-consumo" v-model="theForm.consumo">
    <button type="submit" class="btn-gerar">GERAR</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import router from "@/router";

const theForm = reactive({consumo: 117});

function submitForm() {
  sessionStorage.setItem('data', JSON.stringify(theForm))
  router.push('neoenergia')
}
</script>

<style scoped>
.form {
  width: 350px;
  background-color: #e0e0e0;
  margin: 1rem auto;
  border-radius: 5px;
  padding: 1rem;
  font-family: Arial, Helvetica;
  font-size: 16px;
}
.form label {
  font-size: .85rem;
  display: block;
}
.form input, .form textarea {
  width: 100%;
  margin-bottom: .5rem;
  padding: .3rem
}
.form button {
  padding: .5rem 1rem;
  background-color: dodgerblue;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #fff;
  width: 100%;
}
</style>
