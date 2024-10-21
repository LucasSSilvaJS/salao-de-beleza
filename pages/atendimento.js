const elementoConteudo = document.getElementById('conteudo');

const conteudoLista = [
    {
        id: 1,
        horario: '8:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: true
    },
    {
        id: 2,
        horario: '8:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 3,
        horario: '9:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 4,
        horario: '9:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 5,
        horario: '10:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 6,
        horario: '10:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 7,
        horario: '11:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: true
    },
    {
        id: 8,
        horario: '11:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 9,
        horario: '12:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 10,
        horario: '12:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 11,
        horario: '13:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 12,
        horario: '13:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 13,
        horario: '14:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 14,
        horario: '14:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 15,
        horario: '15:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 16,
        horario: '15:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 17,
        horario: '16:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 18,
        horario: '16:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 19,
        horario: '17:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 20,
        horario: '17:30',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
    {
        id: 21,
        horario: '18:00',
        cabelereira: 'Ana Maria',
        preco: 'R$ 240,00',
        produtos: [
            'Escova + Hidratação',
            'Creme hidratação de coco'
        ],
        agendado: false
    },
];

function gerarAtendimento() {
    elementoConteudo.innerHTML = '';
    conteudoLista.forEach(conteudo => {
        const produtosHTML = conteudo.produtos.map(produto => `<span>${produto}</span>`).join('');

        const cardCollapse = `
            <button class="${conteudo.agendado ? 'bg-secundaria' : 'bg-white'} w-100 border-0 p-4 text-start texto-primario fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${conteudo.id}" aria-expanded="false" aria-controls="collapse${conteudo.id}" style="border-top: 2px solid var(--cor-primaria) !important;">
                    ${conteudo.horario}
                </button>
                <div class="collapse" id="collapse${conteudo.id}">
                    <div class="card card-body bg-terciaria">
                      <div class="bg-white rounded-3 p-4" style="min-height: 120px; max-width: 350px;">
                        <div class="row">
                            <div class="col-8 d-flex flex-column gap-2">
                                <span>${conteudo.cabelereira}</span>
                                ${produtosHTML}
                            </div>
                            <div class="col-4 rounded-2 bg-terciaria d-flex align-items-center justify-content-center">
                                <span class="fw-bold texto-primario">${conteudo.preco}</span>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
        `;

        elementoConteudo.innerHTML += cardCollapse;
    });
}

function obterQuantidadeDeDias(mes, ano) {
    const primeiroDiaDoProximoMes = new Date(ano, mes, 0);
    return primeiroDiaDoProximoMes.getDate();
}

function obterDiaDaSemana(mes, ano) {
    const dataObj = new Date(ano, mes - 1, 1);

    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    const diaIndex = dataObj.getDay();

    return diasDaSemana[diaIndex];
}

function obterMesEmCaixaAlta(mes) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    if (mes < 1 || mes > 12) {
        return 'Mês inválido';
    }

    return meses[mes - 1].substring(0, 3).toUpperCase();
}

function inserirTabelaSemana(){

    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');

    const mes = 10;
    const ano = 2024;
    
    const mesPorEscrito = obterMesEmCaixaAlta(mes);

    conteudoLista.forEach(conteudo => {

        tableBody.innerHTML += `
            <tr id="linha-${conteudo.id}">
                <td class="text-center texto-primario">${conteudo.horario}</td>
            </tr>
        `
        const linha = document.getElementById(`linha-${conteudo.id}`);

        for (let dia = 1; dia < obterQuantidadeDeDias(mes, ano); dia++) {
            linha.innerHTML += `<td class="text-center texto-primario"></td>`;
        }
        
    })

    for (let dia = 1; dia < obterQuantidadeDeDias(mes, ano); dia++) {
        const data = `${dia}/${mesPorEscrito}/${ano}`
        tableHeader.innerHTML += `<th class="text-center texto-primario fw-semibold" style="font-size: 12px;">${data}</th>`;
    }
}

function gerarTabelaSemana(){
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table w-100">
            <thead class="table-secondary">
                <tr id="table-header">
                    <th class="text-center texto-primario fw-semibold">Horário</th>
                    <!-- gerado automaticamente com js -->
                </tr>
            </thead>
            <tbody id="table-body">
                <!-- gerado automaticamente com js -->
            </tbody>
        </table>
    `;
    inserirTabelaSemana();
}

function gerarTabelaMes(){
    elementoConteudo.innerHTML = `
        <table class="table table-bordered w-100" style="table-layout: fixed;">
                <thead>
                    <tr>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Segunda-feira
                        </th>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Terça-feira
                        </th>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Quarta-feira
                        </th>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Quinta-feira
                        </th>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Sexta-feira
                        </th>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Sábado
                        </th>
                        <th class="text-center text-white bg-terciaria align-middle" style="width: 200px;">
                            Domingo
                        </th>
                    </tr>
                </thead>
                <tbody class="table-bordered">
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                    <tr>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                        <td style="height: 120px;"></td>
                    </tr>
                </tbody>
             </table>
    `
}

const dia = document.querySelectorAll('.dia');
const semana = document.querySelectorAll('.semana');
const mes = document.querySelectorAll('.mes');

dia.forEach(d => {
    d.addEventListener('click', gerarAtendimento);
})

semana.forEach(s => {
    s.addEventListener('click', gerarTabelaSemana);
})

mes.forEach(m => {
    m.addEventListener('click', gerarTabelaMes);
})