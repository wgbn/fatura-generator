<template>
  <div class="flex mb-1">
    <div class="w-60 border" style="border-right: 0; border-bottom: 0;">
      <div class="bg text-center strong p-1 bb f-1" style="border-right: 1px solid #000">DEMONSTRATIVO DE CONSUMO DESTA NOTA FISCAL</div>
      <table class="impostos f-0" cellspacing="0" cellpadding="0">
        <tr class="f-00">
          <th rowspan="2">NÚMERO DO<br>MEDIDOR</th>
          <th rowspan="2">TIPO DA<br>FUNÇÃO</th>
          <th colspan="2">ANTERIOR</th>
          <th colspan="2">ATUAL</th>
          <th rowspan="2">Nº<br>DIAS</th>
          <th rowspan="2">CONSTANTE</th>
          <th rowspan="2">AJUSTE</th>
          <th rowspan="2">CONSUMO<br>(kWh)</th>
        </tr>
        <tr class="f-00">
          <th>DATA</th>
          <th>LEITURA</th>
          <th>DATA</th>
          <th>LEITURA</th>
        </tr>
        <tr>
          <td>1216782360</td>
          <td>CAT</td>
          <td>{{dados.menos2mes}}</td>
          <td>404.00</td>
          <td>{{dados.menos1mes}}</td>
          <td>521.00</td>
          <td>32</td>
          <td>1.000000</td>
          <td>&nbsp;</td>
          <td>{{dados.consumo}}</td>
        </tr>
        <tr>
          <td colspan="10" class="f-1" style="border-top: 1px solid #000; padding: 1.1rem">DATA PREVISTA DA PRÓXIMA LEITURA: {{dados.dataProxima}}</td>
        </tr>
      </table>
    </div>
    <div class="w-40 ml-1 border" style="border-right: 0; border-bottom: 0;">
      <div class="bg text-center strong p-1 bb f-1" style="border-right: 1px solid #000">NÍVEIS DE TENSÃO</div>
      <table class="impostos" cellspacing="0" cellpadding="0">
        <tr>
          <th rowspan="2">TENSÃO NORMAL (V)</th>
          <th colspan="2" style="padding: 12px">LIMITE DE VARIAÇÃO (V)</th>
        </tr>
        <tr>
          <th style="padding: 12px">MÍNIMO</th>
          <th style="padding: 12px">MÁXIMO</th>
        </tr>
        <tr>
          <td style="text-align: center; font-size: .95rem">127</td>
          <td style="text-align: center; font-size: .95rem">117</td>
          <td style="text-align: center; font-size: .95rem">133</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
  defineProps(['dados'])
</script>

<style scoped>
.descricao, .impostos {
  font-size: .6rem;
}
.impostos th {
  padding: 3px 0;
}
.descricao td:first-child, .impostos td:first-child {
  text-align: left;
}
.descricao th, .impostos td {
  text-align: right;
}
.descricao tr:last-child td {
  border-bottom: 1px solid #000;
  height: 95px;
  vertical-align: top;
}
</style>
