<template>
  <table class="clean-table" cellspacing="0" cellpadding="0">
    <tr>
      <td colspan="3" class="text-right">kWh</td>
    </tr>
    <tr class="f-00" v-for="(row, index) in rows" :key="index">
      <td style="width: 30%">{{row.m}}</td>
      <td style="border-left: 1px solid #000 !important; vertical-align: middle; padding-left: 1px;">
        <div class="bar bg" :style="row.p"></div>
      </td>
      <td style="width: 10%" class="text-right">{{row.v}}</td>
    </tr>
  </table>
</template>

<script setup>
import { computed } from "vue";

  const moment = window.moment
  const props = defineProps(['dados'])
  const rows = computed(() => createHistorico())

  function generateRandomFloatInRange(min, max) {
    return (Math.random() * (max - min + 1)) + min;
  }

  function createHistorico() {
    const _dados = {...props.dados}
    const meses = [ 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ' ]
    const dtBase = moment(`${_dados.ano}/${_dados.mes}/08`)
    const arr = [{ m: `${meses[dtBase.month()]} ${dtBase.format('YY')}`, v: _dados.consumo, p: 35 }]

    for (let i = 1; i < 9; i++) {
      const dt = moment(dtBase).subtract(i, 'month')
      const r = generateRandomFloatInRange(0.5, 1.05)
      arr.push({ m: `${meses[dt.month()]} ${dt.format('YY')}`, v: Math.round(r * _dados.consumo), p: `width: ${(r * 10) * 2}%` })
    }
    return arr
  }
</script>

<style scoped>
.bar {
  border: 1px solid #c0c0c0;
  border-left: 0;
  height: 10px;
}
</style>
