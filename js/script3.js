// Dados simulados dos clientes
const clientes = {
    "Cliente A": {
        nome: "Cliente A",
        setor: "Tecnologia",
        servico: "Consultoria em Gestão de Projetos",
        numero: "(81) 1234-5678",
        email: "contato@clientea.com.br",
        pagamento: "Cartão de Crédito"
    },
    "Cliente B": {
        nome: "Cliente B",
        setor: "Educação",
        servico: "Pesquisa de Mercado",
        numero: "(81) 8765-4321",
        email: "contato@clienteb.com.br",
        pagamento: "Boleto Bancário"
    },
    "Cliente C": {
        nome: "Cliente C",
        setor: "Saúde",
        servico: "Plano de Negócios",
        numero: "(81) 5555-4444",
        email: "contato@clientec.com.br",
        pagamento: "Transferência Bancária"
    },
    "Cliente D": {
        nome: "Cliente D",
        setor: "Comércio",
        servico: "Consultoria Financeira",
        numero: "(81) 9999-8888",
        email: "contato@cliented.com.br",
        pagamento: "Cartão de Débito"
    }
};

// Função para carregar os clientes no dropdown
function loadClientes() {
    const clienteSelect = document.getElementById('clientes');
    clienteSelect.innerHTML = '<option value="">Selecione um cliente:</option>';
    const nomesClientes = Object.keys(clientes);
    nomesClientes.forEach(nome => {
        const option = document.createElement('option');
        option.value = nome;
        option.text = nome;
        clienteSelect.appendChild(option);
    });
}

// Função para carregar as informações do cliente ao selecionar um cliente
function loadClientInfo() {
    const selectedCliente = document.getElementById('clientes').value;
    const infoContainer = document.getElementById('info-container');
    const infoTypeSelect = document.getElementById('info-type');

    if (selectedCliente) {
        // Carrega as informações do cliente selecionado
        const cliente = clientes[selectedCliente];

        document.getElementById('cliente-nome').textContent = cliente.nome;
        document.getElementById('cliente-setor').textContent = cliente.setor;
        document.getElementById('cliente-email').textContent = cliente.email;
        document.getElementById('cliente-numero').textContent = cliente.numero;
        document.getElementById('cliente-pagamento').textContent = cliente.pagamento;
        document.getElementById('cliente-servico').textContent = cliente.servico;

        // Exibe a área para as informações
        infoContainer.style.display = 'flex';

        // Habilita o select de tipo de informação
        infoTypeSelect.disabled = false;
    } else {
        // Esconde a div se nenhum cliente for selecionado e desabilita o segundo select
        infoContainer.style.display = 'none';
        infoTypeSelect.disabled = true;
        infoTypeSelect.value = ''; // Resetar o valor do select de tipo de informação
    }

    // Esconde todas as categorias de informações inicialmente
    hideAllSections();
}

// Função para mostrar a categoria de informação selecionada
function showInfo() {
    const selectedInfoType = document.getElementById('info-type').value;

    // Esconde todas as seções antes de mostrar a correta
    hideAllSections();

    if (selectedInfoType) {
        document.getElementById(selectedInfoType).style.display = 'block';
    }
}

// Função para esconder todas as seções de informações
function hideAllSections() {
    document.getElementById('informacoes').style.display = 'none';
    document.getElementById('detalhes').style.display = 'none';
    document.getElementById('pagamento').style.display = 'none';
    document.getElementById('servicos').style.display = 'none';
}

// Carregar os clientes ao iniciar a página
document.addEventListener('DOMContentLoaded', loadClientes);
