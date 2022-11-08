<template>
  <div class="border mb-1">
    <div class="bg text-center strong f-1 p-1 bb">DESCRIÇÃO DA NOTA FISCAL</div>

    <div class="flex">
      <div class="w-50" style="padding-right: .4rem">
        <table class="descricao mb-1" cellspacing="0" cellpadding="0">
          <tr>
            <th>&nbsp;</th>
            <th>QUANTIDADE</th>
            <th>PREÇO (R$)</th>
            <th>VALOR (R$)</th>
          </tr>
          <tr>
            <td>Consumo Ativo(kWh)-TUSD</td>
            <td class="text-right">{{dados.consumo}}</td>
            <td class="text-right">0.61213509</td>
            <td class="text-right">{{dados.totalTusd}}</td>
          </tr>
          <tr>
            <td>Consumo Ativo(kWh)-TE</td>
            <td class="text-right">{{dados.consumo}}</td>
            <td class="text-right">0.34771198</td>
            <td class="text-right">{{dados.totalTe}}</td>
          </tr>
          <tr>
            <td>Contrib. Ilum. Pública Municipal</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="text-right">11.00</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
        <div class="mb-1 p-1 strong border flex f-1" style="border-left: 0">
          <span class="g-1">TOTAL DA FATURA</span>
          <span class="total">{{dados.total}}</span>
        </div>
        <div class="border mb-1" style="border-right: 0; border-bottom: 0; border-left: 0">
          <div class="p-1 bg bb text-center f-1 strong" style="border-right: 1px solid #000;">INFORMAÇÕES DE TRIBUTOS</div>
          <table class="impostos" cellspacing="0" cellpadding="0">
            <tr>
              <th colspan="3">ICMS</th>
              <th colspan="3">PIS</th>
              <th colspan="3">COFINS</th>
            </tr>
            <tr class="f-00">
              <th>BASE DE<br>CÁLCULO</th>
              <th>%</th>
              <th>VALOR DO<br>IMPOSTO</th>
              <th>BASE DE<br>CÁLCULO</th>
              <th>%</th>
              <th>VALOR DO<br>IMPOSTO</th>
              <th>BASE DE<br>CÁLCULO</th>
              <th>%</th>
              <th>VALOR DO<br>IMPOSTO</th>
            </tr>
            <tr>
              <td class="base-icms">{{dados.totalSemImposto}}</td>
              <td>18%</td>
              <td class="valor-icms">{{dados.totalIcms}}</td>
              <td class="base-pis">92.08</td>
              <td>0.93%</td>
              <td class="valor-pis">{{dados.totalPis}}</td>
              <td class="base-cofins">92.08</td>
              <td>4.27%</td>
              <td class="valor-cofins">{{dados.totalCofins}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="w-50">
        <div class="aviso p-1 mb-1 f-1">
          Este comunicado <strong>NÃO</strong> substitui aviso de débitos anteriores e <strong>NÃO</strong> contempla débitos em discussão judicial. Caso a suspensão do fornecimento persista por dois ciclos de faturamento, poderá ocorrer o encerramento do contrato, podendo também existir cobrança conforme os critérios definidos no Art. 99 REN 414/Aneel. Podem ocorrer ações de cobrança, bem como inclusão nos registros de restrições de crédito SPC e SERASA.
        </div>

        <div class="flex">
          <div class="w-80">
            <div class="border p-1 mb-1 mr-1 f-0">
              <span class="block text-center strong">Tarifas Aplicadas</span>
              <table class="clean-table">
                <tr>
                  <td width="80%">Consumo Ativo(kWh)-TUSD</td>
                  <td class="text-right">0.47598125</td>
                </tr>
                <tr>
                  <td>Consumo Ativo(kWh)-TE</td>
                  <td class="text-right">0.27036156</td>
                </tr>
              </table>
            </div>
            <div class="border p-1 mb-1 mr-1 f-0">
              <span class="block text-center strong">COMPOSIÇÃO DO CONSUMO</span>
              <table class="clean-table">
                <tr>
                  <td width="50%">Geração de Energia</td>
                  <td width="35%" class="text-right">R$&nbsp;&nbsp;27.29</td>
                  <td width="35%" class="text-right">24.30%</td>
                </tr>
                <tr>
                  <td width="50%">Transmissão</td>
                  <td width="35%" class="text-right">R$&nbsp;&nbsp;6.23</td>
                  <td width="35%" class="text-right">5.55%</td>
                </tr>
                <tr>
                  <td width="50%">Distribuição (Coelba)</td>
                  <td width="35%" class="text-right">R$&nbsp;&nbsp;36.08</td>
                  <td width="35%" class="text-right">32.14%</td>
                </tr>
                <!--<tr>
                    <td width="50%">Perdas de Energia</td>
                    <td width="35%" class="text-right">R$&nbsp;&nbsp;6.86</td>
                    <td width="35%" class="text-right">6.11%</td>
                </tr>
                <tr>
                    <td width="50%">Encargos Setoriais</td>
                    <td width="35%" class="text-right">R$&nbsp;&nbsp;10.84</td>
                    <td width="35%" class="text-right">9.65%</td>
                </tr>-->
                <tr>
                  <td width="50%">Tributos</td>
                  <td width="35%" class="text-right">R$&nbsp;&nbsp;24.99</td>
                  <td width="35%" class="text-right">22.25%</td>
                </tr>
                <tr>
                  <td width="50%" class="strong">Total</td>
                  <td width="35%" class="text-right strong">R$&nbsp;&nbsp;{{dados.totalSemImposto}}</td>
                  <td width="35%" class="text-right strong">100%</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="w-40 border p-1 f-0" style="border-right: 0; border-bottom: 0;">
            <span class="block strong text-center">HISTÓRICO DO CONSUMO</span>
            <Historico :dados="dados"></Historico>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Historico from "@/components/Historico"

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
.aviso {
  /*padding-top: 100px;
  padding-bottom: 50px;*/
  padding-right: 35px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
}
</style>
