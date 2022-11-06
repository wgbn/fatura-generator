(() => {
    let nome, cpf, end1, end2, cep, mes, ano, consumo;
    let totalTusd, totalTe, total, totalSemImposto, totalIcms, totalPis, totalCofins;
    let dataEmissao, dataVencimento, dataProxima, menos1mes, menos2mes;
    let noCliente, noContrato, noInstalacao, noFiscal, historico;
    const pIcms = 18 / 100;
    const pPis = .93 / 100;
    const pCofins = 4.27 / 100;
    const precoTUSD = 0.61213509;
    const precoTE = 0.34771198;

    function calculoTotal() {
        totalTusd = +consumo * precoTUSD;
        totalTe = +consumo * precoTE;
        totalSemImposto = +(totalTusd + totalTe).toFixed(2);
        total = +(totalSemImposto + 11).toFixed(2);
        totalIcms = +(totalSemImposto * pIcms).toFixed(2);
        totalPis = +(totalSemImposto * pPis).toFixed(2);
        totalCofins = +(totalSemImposto * pCofins).toFixed(2);
    }

    function setDates() {
        const dt = new Date(`${ano}-${mes}-08`)
        dataVencimento = moment(dt).add(6, 'days').format('DD/MM/YYYY');
        dataEmissao = moment(dt).format('DD/MM/YYYY');
        menos1mes = moment(dt).subtract(1, 'month').format('DD/MM/YYYY');
        menos2mes = moment(dt).subtract(2, 'month').format('DD/MM/YYYY');
        dataProxima = moment(dt).add(1, 'month').format('DD/MM/YYYY');
    }

    function setNos() {
        noCliente = Math.round((new Date().getTime() / 527) / 10);
        noContrato = Math.round((noCliente * 2) / 100);
        noInstalacao = Math.round(noCliente / 80);
        noFiscal = Math.round(noCliente / 95);
    }

    function getValues() {
        nome = document.querySelector('.in-nome').value;
        cpf = document.querySelector('.in-cpf').value;
        end1 = document.querySelector('.in-end-1').value;
        end2 = document.querySelector('.in-end-2').value;
        cep = document.querySelector('.in-cep').value;
        mes = +document.querySelector('.in-mes').value;
        ano = +document.querySelector('.in-ano').value;
        consumo = +document.querySelector('.in-consumo').value;
    }

    function replaceTags() {
        let html = document.querySelector('.neoenergia').innerHTML;
        html = html
            .replace(new RegExp(`__nome-cliente__`, 'g'), nome)
            .replace(new RegExp(`__cpf-cliente__`, 'g'), cpf)
            .replace(new RegExp(`__dt-emissao__`, 'g'), dataEmissao)
            .replace(new RegExp(`__dt-vencimento__`, 'g'), dataVencimento)
            .replace(new RegExp(`__dt-proxima__`, 'g'), dataProxima)
            .replace(new RegExp(`__menos-1-mes__`, 'g'), menos1mes)
            .replace(new RegExp(`__menos-2-meses__`, 'g'), menos2mes)
            .replace(new RegExp(`__mes__`, 'g'), mes < 10 ? '0' + mes : mes)
            .replace(new RegExp(`__ano__`, 'g'), ano)
            .replace(new RegExp(`__no-contrato__`, 'g'), noContrato)
            .replace(new RegExp(`__no-cliente__`, 'g'), noCliente)
            .replace(new RegExp(`__no-instalacao__`, 'g'), noInstalacao)
            .replace(new RegExp(`__no-fiscal__`, 'g'), noFiscal)
            .replace(new RegExp(`__end-1__`, 'g'), end1)
            .replace(new RegExp(`__end-2__`, 'g'), end2)
            .replace(new RegExp(`__cep__`, 'g'), cep)
            .replace(new RegExp(`__total__`, 'g'), total.toFixed(2))
            .replace(new RegExp(`__total-sem-imposto__`, 'g'), totalSemImposto.toFixed(2))
            .replace(new RegExp(`__total-tusd__`, 'g'), totalTusd.toFixed(2))
            .replace(new RegExp(`__total-te__`, 'g'), totalTe.toFixed(2))
            .replace(new RegExp(`__total-consumo__`, 'g'), consumo)
            .replace(new RegExp(`__total-icms__`, 'g'), totalIcms.toFixed(2))
            .replace(new RegExp(`__total-pis__`, 'g'), totalPis.toFixed(2))
            .replace(new RegExp(`__total-cofins__`, 'g'), totalCofins.toFixed(2))
            .replace('__historico__', geraHistorico());
        document.querySelector('.neoenergia').innerHTML = html;
    }

    function generateRandomFloatInRange(min, max) {
        return (Math.random() * (max - min + 1)) + min;
    }

    function geraHistorico() {
        const meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
        const template = `<table class="clean-table" cellspacing="0" cellpadding="0">
            <tr>
                <td colspan="3" class="text-right">kWh</td>
            </tr>
            __ROWS__
        </table>`;
        const templateRow = `<tr class="f-00">
            <td style="width: 30%">__M__</td>
            <td style="border-left: 1px solid #000 !important; vertical-align: middle; padding-left: 1px;">
                <div class="bar bg" style="width: __P__%"></div>
            </td>
            <td style="width: 10%" class="text-right">__V__</td>
        </tr>`;

        const dtBase = moment(`${ano}/${mes}/08`);
        const arr = [{m: `${meses[dtBase.month()]} ${dtBase.format('YY')}`, v: consumo, p: 35}];
        for (let i = 1; i < 9; i++) {
            const dt = moment(dtBase).subtract(i, 'month')
            const r = generateRandomFloatInRange(0.5, 1.05);
            arr.push({m: `${meses[dt.month()]} ${dt.format('YY')}`, v: Math.round(r * consumo), p: (r * 10) * 2})
        }
        const rows = arr.map(a => templateRow.replace('__M__', a.m).replace('__P__', a.p).replace('__V__', a.v)).join('\n');
        const html = template.replace('__ROWS__', rows);
        console.log(html);
        // console.table(arr)
        return html;
    }

    document.querySelector('.btn-gerar').addEventListener('click', e => {
        e.preventDefault();
        console.log('# GERAR')
        getValues();
        setNos();
        setDates();
        calculoTotal();
        replaceTags();
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.neoenergia').style.display = 'block';
    })
})()
