// Dados simulados para cargos
const data = {
    "Financeiro": {
        "Supervisor Financeiro": {
            "Descrição": "Responsável pela supervisão de todas as atividades financeiras da empresa, incluindo orçamento, controle financeiro e prestação de contas.",
            "Responsabilidades": [
                "Supervisionar o fechamento mensal e anual do financeiro.",
                "Controlar fluxo de caixa e provisões de pagamento.",
                "Analisar e aprovar pagamentos de grande valor."
            ],
            "Competências": [
                "Formação em contabilidade, finanças ou áreas relacionadas.",
                "Experiência mínima de 5 anos na área financeira.",
                "Conhecimento avançado em softwares de gestão financeira."
            ]
        },
        "Analista Financeiro": {
            "Descrição": "Responsável por realizar análises financeiras, controlar custos e apoiar na tomada de decisões estratégicas.",
            "Responsabilidades": [
                "Executar conciliações bancárias.",
                "Analisar custos e despesas da empresa.",
                "Apoiar a equipe no fechamento financeiro mensal."
            ],
            "Competências": [
                "Formação em finanças, economia ou áreas correlatas.",
                "Experiência com controle de custos e análise financeira.",
                "Domínio em Excel e ferramentas de BI."
            ]
        }
    },
    "Recursos Humanos": {
        "Gerente de RH": {
            "Descrição": "Gerencia todas as atividades relacionadas a recrutamento, seleção e desenvolvimento de funcionários.",
            "Responsabilidades": [
                "Supervisionar o recrutamento e seleção.",
                "Desenvolver políticas de treinamento e desenvolvimento.",
                "Gerenciar o clima organizacional."
            ],
            "Competências": [
                "Formação em administração, psicologia ou áreas afins.",
                "Experiência em gestão de pessoas e desenvolvimento de equipes.",
                "Conhecimento em legislação trabalhista."
            ]
        },
        "Assistente de RH": {
            "Descrição": "Apoia nas rotinas de administração de pessoal e na gestão de benefícios.",
            "Responsabilidades": [
                "Controlar ponto eletrônico dos funcionários.",
                "Gerenciar benefícios como plano de saúde e vale transporte.",
                "Apoiar nas atividades de recrutamento e seleção."
            ],
            "Competências": [
                "Formação em administração ou gestão de RH.",
                "Conhecimento básico de legislação trabalhista.",
                "Habilidade em sistemas de controle de ponto."
            ]
        }
    }
};

function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    
    const areas = Object.keys(data);
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('detalhes').style.display = 'none';

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
    }
}

function loadCargoDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (cargo) {
        const detalhes = data[area][cargo];
        detalhesList.innerHTML = '';

        // Adicionar descrição do cargo
        const descricao = document.createElement('li');
        descricao.innerHTML = `<strong>Descrição:</strong> ${detalhes["Descrição"]}`;
        detalhesList.appendChild(descricao);

        // Adicionar responsabilidades
        const responsabilidades = document.createElement('li');
        responsabilidades.innerHTML = '<strong>Responsabilidades:</strong><ul>';
        detalhes["Responsabilidades"].forEach(resp => {
            const li = document.createElement('li');
            li.textContent = resp;
            responsabilidades.querySelector('ul').appendChild(li);
        });
        detalhesList.appendChild(responsabilidades);

        // Adicionar competências
        const competencias = document.createElement('li');
        competencias.innerHTML = '<strong>Competências:</strong><ul>';
        detalhes["Competências"].forEach(comp => {
            const li = document.createElement('li');
            li.textContent = comp;
            competencias.querySelector('ul').appendChild(li);
        });
        detalhesList.appendChild(competencias);

        document.getElementById('detalhes').style.display = 'block';
    }
}

// Carregar as áreas assim que a página carregar
document.addEventListener('DOMContentLoaded', loadAreas);
