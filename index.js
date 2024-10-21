const agendar = document.getElementById('agendar');
const bloquear = document.getElementById('bloquear');
const desbloquear = document.getElementById('desbloquear');

const conteudoModal = document.getElementById('conteudo-modal');

const btnAgenda = document.getElementById('btn-agenda');

function marcarAbaAgendar(){
    agendar.classList.add('tab-menu-ativo');
    bloquear.classList.remove('tab-menu-ativo');
    desbloquear.classList.remove('tab-menu-ativo');
}

function marcarAbaBloquear(){
    bloquear.classList.add('tab-menu-ativo');
    agendar.classList.remove('tab-menu-ativo');
    desbloquear.classList.remove('tab-menu-ativo');
}

function marcarAbaDesbloquear(){
    desbloquear.classList.add('tab-menu-ativo');
    agendar.classList.remove('tab-menu-ativo');
    bloquear.classList.remove('tab-menu-ativo');
}

function abrirAbaAgendar(){
    marcarAbaAgendar();

    conteudoModal.innerHTML = '';
    conteudoModal.innerHTML = `
        <form class="row">
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Dia:
                </label>
                <input class="form-control" type="date">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Horário:
                </label>
                <input class="form-control" type="time">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Duração:
                </label>
                <select class="form-select">
                    <option value="30 minutos">30 minutos</option>
                    <option value="45 minutos">45 minutos</option>
                    <option value="60 minutos">60 minutos</option>
                    <option value="75 minutos">75 minutos</option>
                    <option value="90 minutos">90 minutos</option>
                    <option value="105 minutos">105 minutos</option>
                    <option value="120 minutos">120 minutos</option>
                    <option value="135 minutos">135 minutos</option>
                    <option value="150 minutos">150 minutos</option>
                    <option value="165 minutos">165 minutos</option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Serviços:
                </label>
                <select class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Profissionais:
                </label>
                <select class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Clientes:
                </label>
                <select class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-6 col-12">
                <label class="form-label">
                    Observações:
                </label>
                <input class="form-control" type="text">
            </div>
            <div class="mb-3 col-12">
                <label class="form-label">
                    Feedback:
                </label>
                <textarea class="form-control" style="resize: none;"></textarea>
            </div>
        </form>
    `;

    btnAgenda.innerHTML = '';
    btnAgenda.innerHTML = 'Agendar';
    btnAgenda.classList.add('bg-sucesso');
    btnAgenda.classList.remove('bg-perigo');
}

function abrirAbaBloquear(){
    marcarAbaBloquear();

    conteudoModal.innerHTML = '';
    conteudoModal.innerHTML = `
        <form class="row">
            <div class="mb-3 col-xl-8 col-12">
                <label class="form-label">
                    Profissional:
                </label>
                <select class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Motivo:
                </label>
                <select class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Dia:
                </label>
                <input type="date" class="form-control">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Horário:
                </label>
                <input type="time" class="form-control">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Duração:
                </label>
                <select class="form-select">
                    <option value="30 minutos">30 minutos</option>
                    <option value="45 minutos">45 minutos</option>
                    <option value="60 minutos">60 minutos</option>
                    <option value="75 minutos">75 minutos</option>
                    <option value="90 minutos">90 minutos</option>
                    <option value="105 minutos">105 minutos</option>
                    <option value="120 minutos">120 minutos</option>
                    <option value="135 minutos">135 minutos</option>
                    <option value="150 minutos">150 minutos</option>
                    <option value="165 minutos">165 minutos</option>
                </select>
            </div>
            <div class="mb-3 col-12">
                <label class="form-label">
                    Observações:
                </label>
                <textarea class="form-control" style="resize: none;"></textarea>
            </div>
        </form>
    `;

    btnAgenda.innerHTML = '';
    btnAgenda.innerHTML = 'Bloquear';
    btnAgenda.classList.add('bg-perigo');
    btnAgenda.classList.remove('bg-sucesso');
}

function abrirAbaDesbloquear(){
    marcarAbaDesbloquear();

    conteudoModal.innerHTML = '';
    conteudoModal.innerHTML = `
        <form class="row">
            <div class="mb-3 col-xl-8 col-12">
                <label class="form-label">
                    Profissional:
                </label>
                <select disabled class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Motivo:
                </label>
                <select disabled class="form-select">
                    <option value=""></option>
                </select>
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Dia:
                </label>
                <input disabled type="date" class="form-control">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Horário:
                </label>
                <input disabled type="time" class="form-control">
            </div>
            <div class="mb-3 col-xl-4 col-12">
                <label class="form-label">
                    Duração:
                </label>
                <select disabled class="form-select">
                    <option value="30 minutos">30 minutos</option>
                    <option value="45 minutos">45 minutos</option>
                    <option value="60 minutos">60 minutos</option>
                    <option value="75 minutos">75 minutos</option>
                    <option value="90 minutos">90 minutos</option>
                    <option value="105 minutos">105 minutos</option>
                    <option value="120 minutos">120 minutos</option>
                    <option value="135 minutos">135 minutos</option>
                    <option value="150 minutos">150 minutos</option>
                    <option value="165 minutos">165 minutos</option>
                </select>
            </div>
            <div class="mb-3 col-12">
                <label class="form-label">
                    Observações:
                </label>
                <textarea disabled class="form-control" style="resize: none;"></textarea>
            </div>
        </form>
    `;

    btnAgenda.innerHTML = '';
    btnAgenda.innerHTML = 'Desbloquear';
    btnAgenda.classList.add('bg-perigo');
    btnAgenda.classList.remove('bg-sucesso');
}

abrirAbaAgendar();

agendar.addEventListener('click', abrirAbaAgendar)
bloquear.addEventListener('click', abrirAbaBloquear)
desbloquear.addEventListener('click', abrirAbaDesbloquear)