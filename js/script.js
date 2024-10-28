const data = {
    "Setor Financeiro": {
        "Supervisor Financeiro": {
            "Solicitação de Ativação do Cartão Zona Azul": [
                "A01: Quando há solicitação",
                "A02: Pegar o celular",
                "A03: Abrir o aplicativo do Zona Azul",
                "A04: O veículo já está no sistema?",
                "Caso SIM: Ir para A09 e seguir leitura",
                "Caso NÃO: Ir para A05 e seguir a leitura",
                "A05: Cadastrar veículo no aplicativo do Zona Azul",
                "A06: Ir na aba 'placas e usos' na aba de 'veículos' e depois em 'novo' selecionando se é moto ou carro",
                "A07: Preencher informações adicionando os dados Placa do veículo",
                "A08: Apertar em 'Cadastrar'",
                "A09: Selecionar veículo",
                "A10: Apertar o botão 'ativar cartão'",
                "A11: Selecionar a duração e a forma de pagamento, escolhendo a opção 'usar meus créditos'",
                "A12: Confirmar ativação",
                "A13: Cartão ativado"
            ],
            "Processo de Fechamento de Caixa": [
                "A01: Receber relatórios de vendas do dia",
                "A02: Conferir os valores com os dados do sistema",
                "A03: Identificar possíveis divergências",
                "A04: Gerar relatório final do caixa",
                "A05: Enviar relatório para o financeiro",
                "A06: Arquivar comprovantes"
            ]
        },
        "Analista Financeiro": {
            "Conciliação Bancária": [
                "A01: Acessar extrato bancário",
                "A02: Comparar valores com o sistema financeiro",
                "A03: Identificar e corrigir divergências",
                "A04: Finalizar conciliação"
            ],
            "Emissão de Notas Fiscais": [
                "A01: Acessar o sistema de emissão de notas fiscais",
                "A02: Preencher os dados do cliente",
                "A03: Gerar a nota fiscal",
                "A04: Enviar a nota fiscal para o cliente"
            ]
        }
    },
    "Recursos Humanos": {
        "Gerente de RH": {
            "Processo de Recrutamento e Seleção": [
                "A01: Receber solicitação de vaga",
                "A02: Publicar vaga em plataformas de emprego",
                "A03: Triagem de currículos",
                "A04: Agendar entrevistas",
                "A05: Conduzir entrevistas",
                "A06: Selecionar candidato",
                "A07: Enviar proposta ao candidato",
                "A08: Finalizar processo de seleção"
            ],
            "Onboarding de Novos Funcionários": [
                "A01: Preparar documentação de admissão",
                "A02: Agendar integração",
                "A03: Realizar integração com novos funcionários",
                "A04: Acompanhar primeiros dias do novo funcionário"
            ]
        },
        "Assistente de RH": {
            "Controle de Ponto": [
                "A01: Receber relatórios de ponto eletrônico",
                "A02: Verificar divergências e ajustar",
                "A03: Gerar relatório final",
                "A04: Enviar relatório para o gerente"
            ],
            "Gestão de Benefícios": [
                "A01: Identificar funcionários elegíveis para benefícios",
                "A02: Atualizar informações no sistema de benefícios",
                "A03: Enviar comunicações aos colaboradores",
                "A04: Responder dúvidas de funcionários sobre benefícios"
            ]
        }
    },
    "Operações": {
        "Coordenador de Operações": {
            "Gestão de Estoque": [
                "A01: Verificar níveis de estoque",
                "A02: Solicitar novos pedidos de compra",
                "A03: Receber e conferir mercadorias",
                "A04: Atualizar sistema de estoque"
            ],
            "Supervisão de Logística": [
                "A01: Planejar rotas de entrega",
                "A02: Acompanhar status das entregas",
                "A03: Resolver problemas de logística",
                "A04: Finalizar relatórios de entregas"
            ]
        },
        "Assistente de Operações": {
            "Acompanhamento de Produção": [
                "A01: Monitorar o andamento da produção",
                "A02: Comunicar possíveis atrasos",
                "A03: Atualizar sistema de produção",
                "A04: Gerar relatório de produção diária"
            ],
            "Controle de Qualidade": [
                "A01: Realizar inspeção de produtos acabados",
                "A02: Identificar defeitos e reportar",
                "A03: Recolher produtos defeituosos",
                "A04: Gerar relatório de controle de qualidade"
            ]
        }
    }
};

const descricaoDetalhada = {
    "A03: Abrir o aplicativo do Zona Azul": "Fazer o login e clicar no canto inferior central para cadastrar o carro.",
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

// Verifica se o usuário está logado
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', loadAreas);
