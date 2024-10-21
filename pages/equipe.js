const elementoConteudo = document.getElementById('table-place');

const ativos = document.getElementById('ativos');
const inativos = document.getElementById('inativos');

function tornarAtivo(){
    ativos.classList.add('tab-menu-ativo');
    inativos.classList.remove('tab-menu-ativo');
}

function tornarInativo(){
    inativos.classList.add('tab-menu-ativo');
    ativos.classList.remove('tab-menu-ativo');
}

function exibirTabelaAtivos(){
    tornarAtivo();
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table mt-4 mx-auto" style="table-layout: fixed; width: 90%;">
            <thead>
                <tr style="border: 2px solid var(--cor-primaria);">
                    <th style="width: 200px;">Nome:</th>
                    <th style="width: 200px;">Disponibilidade:</th>
                    <th style="width: 200px;">Função:</th>
                    <th style="width: 200px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input class="form-control" type="text" readonly value="Gustavo">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Segunda a sexta">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Cabeleireiro">
                    </td>
                    <td class="text-center">
                        <button class="btn me-2 bg-secundaria text-white">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                        <button class="btn bg-perigo text-white">
                            <i class="bi bi-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function exibirTabelaInativos(){
    tornarInativo();
    elementoConteudo.innerHTML = '';
    elementoConteudo.innerHTML = `
        <table class="table mt-4 mx-auto" style="table-layout: fixed; width: 90%;">
            <thead>
                <tr style="border: 2px solid var(--cor-primaria);">
                    <th style="width: 200px;">Nome:</th>
                    <th style="width: 200px;">Disponibilidade:</th>
                    <th style="width: 200px;">Função:</th>
                    <th style="width: 200px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input class="form-control" type="text" readonly value="Paula">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Sexta a domingo">
                    </td>
                    <td>
                        <input class="form-control" type="text" readonly value="Cabeleireira">
                    </td>
                    <td class="text-center">
                        <button class="btn me-2 bg-secundaria text-white">
                            <i class="bi bi-pen-fill"></i>
                        </button>
                        <button class="btn bg-sucesso text-white">
                            <i class="bi bi-arrow-counterclockwise"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

exibirTabelaAtivos()

ativos.addEventListener('click', exibirTabelaAtivos)
inativos.addEventListener('click', exibirTabelaInativos)