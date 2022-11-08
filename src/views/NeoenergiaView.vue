<template>
  <div class="neoenergia">

    <!-- header -->
    <div class="p-1 border flex mb-1">
      <span class="g-1 text-center strong">NOTA FISCAL | FATURA | CONTA DE ENERGIA ELÉTRICA</span>
      <span class="text-center">1/1</span>
    </div>

    <HeaderAddr></HeaderAddr>

    <DadosCliente :dados="dados"></DadosCliente>

    <div class="flex mb-1">
      <div class="w-40 p-1 border f-00">
        As condições gerais de fornecimento (Resolução ANEEL 414/2010), tarifas, produtos, serviços prestados e tributos se encontram à disposição, para consulta em nossas unidades de atendimento e no site neoenergiacoelba.com.br
      </div>
      <div class="w-60 p-1 ml-1 border text-center f-1">
        <span class="block strong">RESERVADO AO FISCO</span>
        <span class="block">CABB.EFDA.972E.F4AA.DF71.FD27.DDE6.7C6E</span>
      </div>
    </div>

    <DescricaoNF :dados="dados"></DescricaoNF>

    <DemonstrativoConsumo :dados="dados"></DemonstrativoConsumo>

    <div class="flex mb-1">
      <div class="w-80 border p-1 f-00">
        <span class="block strong">INFORMAÇÕES IMPORTANTES</span>
        <p style="margin-bottom: 0">Na data da leitura a bandeira em vigor é a Verde. Mais informações em www.aneel.gov.br. <br>
          A partir de 13/07, tarifa com reajuste médio de -0,50%, REH N° 3.056/22.<br>
          O cliente é compensado quando há violação na continuidade individual ou do nível de tensão de fornecimento. Sua rota/ciclo de leitura será alterado. Art. 84 Ren. ANEEL 414/10<br>
          Pagto. em atraso gera multa 2%(Res414/ANEEL), Juros 1%a.m(Lei 10.438/02) e atualização monetária no próx. mês O Cliente é compensado quando há descumprimento do prazo definido para os padrões de atendimento comercial. Em caso de suspensão de fornecimento, o encerramento do contrato poderá ocorrer após 2 ciclos de faturamento, podendo também ser cobrado o custo de disponibilidade no ciclo em que ocorrer a suspensão.<br>
          Acréscimos legais serão aplicados sobre a COSIP paga em atraso, conforme Legislaçao Municipal.<br>
          www.neoenergiacoelba.com.br/Poder Público/Contribuição de Iluminação Pública.
        </p>
      </div>
      <div class="w-20 ml-1">
        <div class="border p-1" style="height: 100px">
          <span class="block strong f-0">AUTENTICAÇÃO MECÂNICA</span>
        </div>
      </div>
    </div>

    <div class="corte mb-1"></div>

    <Canhoto :dados="dados"></Canhoto>

  </div>
</template>

<style scoped>
.neoenergia {
  width: 100%;
  max-width: 2199px;
  margin: 0 auto;
  font-family: Arial, Helvetica;
}
.corte {
  border-top: 2px dashed #000;
}
</style>

<script setup>
  import { onMounted, reactive } from "vue"
  import HeaderAddr from "@/components/HeaderAddr"
  import DadosCliente from "@/components/DadosCliente"
  import DescricaoNF from "@/components/DescricaoNF"
  import DemonstrativoConsumo from "@/components/DemonstrativoConsumo"
  import Canhoto from "@/components/Canhoto"

  const moment = window.moment
  const dados = reactive(JSON.parse(sessionStorage.getItem('data')))
  const pIcms = 18 / 100
  const pPis = .93 / 100
  const pCofins = 4.27 / 100
  const precoTUSD = 0.61213509
  const precoTE = 0.34771198

  function calculoTotal() {
    dados.totalTusd = +dados.consumo * precoTUSD
    dados.totalTe = +dados.consumo * precoTE
    dados.totalSemImposto = +(dados.totalTusd + dados.totalTe).toFixed(2)
    dados.total = +(dados.totalSemImposto + 11).toFixed(2)
    dados.totalIcms = +(dados.totalSemImposto * pIcms).toFixed(2)
    dados.totalPis = +(dados.totalSemImposto * pPis).toFixed(2)
    dados.totalCofins = +(dados.totalSemImposto * pCofins).toFixed(2)
  }

  function setDates() {
    const dt = new Date(`${dados.ano}-${dados.mes}-08`)
    dados.dataVencimento = moment(dt).add(6, 'days').format('DD/MM/YYYY')
    dados.dataEmissao = moment(dt).format('DD/MM/YYYY')
    dados.menos1mes = moment(dt).subtract(1, 'month').format('DD/MM/YYYY')
    dados.menos2mes = moment(dt).subtract(2, 'month').format('DD/MM/YYYY')
    dados.dataProxima = moment(dt).add(1, 'month').format('DD/MM/YYYY')
  }

  function setNos() {
    dados.noCliente = Math.round((new Date().getTime() / 527) / 10)
    dados.noContrato = Math.round((dados.noCliente * 2) / 100)
    dados.noInstalacao = Math.round(dados.noCliente / 80)
    dados.noFiscal = Math.round(dados.noCliente / 95)
  }

  onMounted(() => {
    calculoTotal()
    setDates()
    setNos()
    // createHistorico()
    // console.log(dados)
  })
</script>
