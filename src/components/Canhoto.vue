<template>
  <div class="flex mb-1">
    <div class="w-70 mr-1">
      <strong class="block mb-1 f-1">DESTAQUE AQUI</strong>
      <div class="flex mb-1">
        <div class="w-25 p-2 border mr-1">
          <span class="block f-1 strong">CONTA CONTRATO</span>
          <span class="text-center block small no-contrato">{{dados.noContrato}}</span>
        </div>
        <div class="w-25 p-2 border mr-1">
          <span class="block f-1 strong">MÊS/ANO</span>
          <span class="text-center block small">
              <span class="mes">{{mes}}</span>/<span class="ano">{{dados.ano}}</span>
          </span>
        </div>
        <div class="w-25 p-2 border mr-1">
          <span class="block f-1 strong">TOTAL A PAGAR(R$)</span>
          <span class="text-center block small total">{{dados.total}}</span>
        </div>
        <div class="w-25 p-2 border">
          <span class="block f-1 strong">VENCIMENTO</span>
          <span class="text-center block small dt-vencimento">{{dados.dataVencimento}}</span>
        </div>
      </div>
      <div class="text-center">
        <img src="@/assets/imgs/barcode.png" style="width: 80%">
      </div>
    </div>
    <div class="w-30">
      <strong class="block mb-1 f-1">&nbsp;</strong>
      <div class="border ml-1 mb-1 p-1">
        <span class="block f-1 strong mb-1">TALÃO DE PAGAMANTO</span>
        <div class="strong small" style="padding-left: 1.2rem">
          Evite dobrar, perfurar ou rasurar.<br>
          Este canhoto será usado em leitora ótica.
        </div>
      </div>
      <div class="border p-1 ml-1" style="height: 70px">
        <span class="block strong f-0">AUTENTICAÇÃO MECÂNICA</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from "vue"

  const props = defineProps(['dados'])
  const mes = computed(() => ({...props.dados}).mes < 10 ? `0${({...props.dados}).mes}` : ({...props.dados}).mes)
</script>

<style scoped>

</style>
