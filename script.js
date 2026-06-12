document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Funcionalidade do Botão "Ver Compromisso" na seção Sobre
    const btnMensagem = document.getElementById("btnMensagem");
    const mensagemOculta = document.getElementById("mensagemOculta");

    btnMensagem.addEventListener("click", function() {
        if (mensagemOculta.classList.contains("hidden")) {
            mensagemOculta.classList.remove("hidden");
            btnMensagem.textContent = "Fechar Compromisso";
        } else {
            mensagemOculta.classList.add("hidden");
            btnMensagem.textContent = "Ver Compromisso";
        }
    });

    // 2. Validação e envio simulado do Formulário de Contato
    const formContato = document.getElementById("formContato");

    formContato.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento automático da página

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Validação simples (o HTML5 já valida o básico, mas garante a segurança)
        if (nome && email && mensagem) {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre o futuro sustentável do agro foi enviada com sucesso.`);
            formContato.reset(); // Limpa os campos do formulário
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    });
});