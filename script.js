document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. FUNCIONALIDADES DE ACESSIBILIDADE ---
    
    // Controle de Tamanho de Fonte
    let atualFontSize = 100; // Representa 100% (16px)
    const limiteMax = 140;   // Limite máximo de aumento (140%)
    const limiteMin = 80;    // Limite mínimo de diminuição (80%)
    
    const btnIncrease = document.getElementById("btn-increase");
    const btnDecrease = document.getElementById("btn-decrease");
    const btnContrast = document.getElementById("btn-contrast");
    const htmlElement = document.documentElement;

    // Aumentar Fonte
    btnIncrease.addEventListener("click", function() {
        if (atualFontSize < limiteMax) {
            atualFontSize += 10;
            htmlElement.style.fontSize = atualFontSize + "%";
        }
    });

    // Diminuir Fonte
    btnDecrease.addEventListener("click", function() {
        if (atualFontSize > limiteMin) {
            atualFontSize -= 10;
            htmlElement.style.fontSize = atualFontSize + "%";
        }
    });

    // Alternar Alto Contraste
    btnContrast.addEventListener("click", function() {
        document.body.classList.toggle("high-contrast");
        
        // Alerta opcional para leitores de tela saberem da mudança
        const estaAtivo = document.body.classList.contains("high-contrast");
        btnContrast.setAttribute("aria-pressed", estaAtivo);
    });


    // --- 2. INTERAÇÕES DA PÁGINA ---

    // Botão de Compromisso (Seção Sobre)
    const btnMensagem = document.getElementById("btnMensagem");
    const mensagemOculta = document.getElementById("mensagemOculta");

    btnMensagem.addEventListener("click", function() {
        if (mensagemOculta.classList.contains("hidden")) {
            mensagemOculta.classList.remove("hidden");
            btnMensagem.textContent = "Fechar Compromisso";
            mensagemOculta.focus();
        } else {
            mensagemOculta.classList.add("hidden");
            btnMensagem.textContent = "Ver Compromisso";
        }
    });

    // Envio do Formulário de Contato
    const formContato = document.getElementById("formContato");

    formContato.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (nome && email && mensagem) {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o agro sustentável foi recebida.`);
            formContato.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});