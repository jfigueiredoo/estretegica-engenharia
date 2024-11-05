const data = {
    "Setor Financeiro": {
        "Supervisor Financeiro": {
                    "Aprovação de Pagamentos Mensais": [
            "A01: Quando chega a data de pagamento",
            "A02: Verificar a lista de pagamentos pendentes",
            "A03: Acessar o sistema de gestão financeira",
            "A04: Conferir se todas as faturas estão devidamente autorizadas",
            "Caso SIM: Ir para A08 e seguir leitura",
            "Caso NÃO: Ir para A05 e seguir a leitura",
            "A05: Solicitar autorização de pagamento pendente ao setor responsável",
            "A06: Receber a autorização pendente",
            "A07: Atualizar o status da fatura no sistema",
            "A08: Selecionar as faturas autorizadas para pagamento",
            "A09: Confirmar os detalhes de pagamento (valores, datas e destinatários)",
            "A10: Aprovar e enviar os pagamentos para o banco",
            "A11: Confirmar com a equipe de tesouraria a execução dos pagamentos",
            "A12: Arquivar as confirmações de pagamento",
            "A13: Processo concluído"
            ]
        }
    }
};

const descricaoDetalhada = {
    "A01: Quando chega a data de pagamento": "Verificar data de chegada do pagamaneto no sistema interno da empresa, selecionando todas as datas e as colocando no drive.",
    "A05: Cadastrar veículo no aplicativo do Zona Azul": "Vá até o menu de veículos e insira as informações necessárias para o cadastro do novo veículo."
    // Adicione mais descrições detalhadas conforme necessário
};

function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    
    const areas = Object.keys(data);
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area.charAt(0).toUpperCase() + area.slice(1);
        areaSelect.appendChild(option);
    });
}

function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('processos').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (area) {
        const cargos = Object.keys(data[area]);
        cargos.forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.text = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
        document.getElementById('processos').disabled = true;
    }
}

function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (cargo) {
        const processos = Object.keys(data[area][cargo]);
        processos.forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.text = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            li.onclick = () => openModal(etapa);  // Abre o modal com a descrição detalhada
            detalhesList.appendChild(li);
        });
        
        document.getElementById('detalhes').style.display = 'block';

        // Mapeamento do nome do processo para a imagem do fluxograma correspondente
        let fluxogramaUrl;
        if (processo === "Solicitação de Ativação do Cartão Zona Azul") {
            fluxogramaUrl = 'img/logo2 - cópia.png';
        } else if (processo === "Processo de Fechamento de Caixa") {
            fluxogramaUrl = 'img/fluxogramas/financeiro/Processo_Fechamento_Caixa.png';
        } else if (processo === "Conciliação Bancária") {
            fluxogramaUrl = 'img/fluxogramas/financeiro/Conciliacao_Bancaria.png';
        } else if (processo === "Emissão de Notas Fiscais") {
            fluxogramaUrl = 'img/fluxogramas/financeiro/Emissao_Notas_Fiscais.png';
        } else {
            fluxogramaUrl = null;
        }

        // Verificar se o URL do fluxograma foi definido e carregar a imagem
        const fluxogramaContainer = document.getElementById('fluxograma');
        const fluxogramaImagem = document.getElementById('fluxograma-imagem');

        if (fluxogramaUrl) {
            fluxogramaImagem.src = fluxogramaUrl;
            fluxogramaContainer.style.display = 'block';  // Mostrar o container
        } else {
            fluxogramaContainer.style.display = 'none';  // Ocultar o container se não houver imagem
        }
    }
}

function openModal(etapa) {
    const descricao = descricaoDetalhada[etapa] || "Descrição detalhada não disponível.";
    document.getElementById('modal-description').textContent = descricao;
    document.getElementById('modal-overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadAreas);
