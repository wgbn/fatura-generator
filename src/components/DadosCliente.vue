<template>
  <div class="flex mb-1">
    <div class="w-40 flex column stretch f-1">
      <div class="p-1 mb-1 border h-50">
        <span class="block strong mb-1">DADOS DO CLIENTE</span>
        <span class="block nome-cliente mb-1 upper">{{dados.nome}}</span>
        <span class="block">CPF: <span class="cpf-cliente">{{dados.cpf}}</span></span>
      </div>
      <div class="p-1 mb-0 border h-50">
        <span class="strong block mb-1">ENDEREÇO DA UNIDADE CONSUMIDORA</span>
        <span class="block end-1 upper">{{dados.end1}}</span>
        <span class="block end-2 upper">{{dados.end2}}</span>
        <span class="block end-2 upper">{{dados.cep}}</span>
      </div>
    </div>
    <div class="w-60">
      <div class="flex">
        <div class="p-1 mb-1 ml-1 border w-40">
          <span class="strong block text-center small mb-1">DATA DE VENCIMENTO</span>
          <span class="strong block text-center biger mb-2 dt-vencimento">{{dados.dataVencimento}}</span>
          <span class="strong block text-center small mb-1">TOTAL A PAGAR (R$)</span>
          <span class="strong block text-center biger total">{{dados.total}}</span>
        </div>
        <div class="p-1 mb-1 ml-1 border w-40">
          <span class="block f-0 strong mb-0 text-center">DATA DA EMISSÃO DA NOTA FISCAL</span>
          <span class="block strong mb-1 text-center dt-emissao">{{dados.dataEmissao}}</span>
          <span class="block f-0 strong mb-0 text-center">DATA DA APRESENTAÇÃO</span>
          <span class="block strong mb-1 text-center dt-emissao">{{dados.dataEmissao}}</span>
          <span class="block f-0 strong mb-0 text-center">NÚMERO DA NOTA FISCAL</span>
          <span class="block strong mb-1 text-center no-fiscal">{{dados.noFiscal}}</span>
        </div>
        <div class="p-1 mb-1 ml-1 border w-20">
          <span class="block strong f-00 mb-0 text-center">CONTA CONTRATO</span>
          <span class="block strong mb-1 text-center no-contrato">{{dados.noContrato}}</span>
          <span class="block strong f-00 mb-0 text-center">Nº DO CLIENTE</span>
          <span class="block mb-1 text-center no-cliente">{{dados.noCliente}}</span>
          <span class="block strong f-00 mb-0 text-center">Nº DA INSTALAÇÃO</span>
          <span class="block mb-1 text-center no-instalacao">{{dados.noInstalacao}}</span>
        </div>
      </div>
      <div class="block border p-1 text-center f-1 ml-1">
        <span class="block strong">CLASSIFICAÇÃO</span>
        <span class="block">B1 RESIDENCIAL - RESIDENCIA</span>
        <span class="block">Conv. Monômia - Monofásico</span>
      </div>
    </div>
  </div>
</template>

<script setup>
 defineProps(['dados'])
</script>

<style scoped>

</style>
