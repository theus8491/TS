const LojaCipherWalk = {
    // 1. Informações Básicas da Marca
    nome: "C.I.P.H.E.R. (Cipher Walk)",
    slogan: "Decifre o seu próximo passo.",
    paletaCores: ["#000000", "#333333", "#00FF00", "#00FFFF"], // Preto, Cinza Escuro, Verde Néon, Ciano Elétrico
    conceito: "Calçados que unem estilo urbano, tecnologia e criptografia.",
    
    // 2. Linhas de Produtos (Array de Objetos)
    linhas: [
        {
            nome: "Vigenère",
            descricao: "Tênis urbanos com múltiplos painéis e texturas (as 'chaves' do código). Foco em conforto e tecnologia de amortecimento.",
            segmento: "Streetwear / Urbano",
            coresChave: ["Preto/Verde Néon", "Cinza/Azul Elétrico"]
        },
        {
            nome: "Enigma",
            descricao: "Botas de cano alto e coturnos com fechos complexos e detalhes metálicos, inspirados em mecanismos de codificação.",
            segmento: "Tático / Gótico Urbano",
            materialPrincipal: "Couro vegano e metal"
        },
        {
            nome: "Binário",
            descricao: "Sapatos minimalistas com grafismos sutis de '0' e '1' costurados. Design 'clean' e funcional.",
            segmento: "Minimalista / Casual Inteligente",
            caracteristicaUnica: "Símbolos Binários em relevo na sola"
        }
    ],
    
    // 3. O Produto Estrela (Objeto Detalhado)
    produtoEstrela: {
        nome: "Decodificador 3000",
        linha: "Vigenère",
        precoBase: 499.99,
        descricao: "Um tênis customizável com painel lateral para troca de 'patches' (velcros) com símbolos. Permite ao usuário 'codificar' mensagens no próprio calçado.",
        recursosTecnicos: [
            "Sistema de amortecimento reativo",
            "Painel lateral de velcro intercambiável",
            "Cadarços refletivos com padrão de código Morse"
        ],
        // Função JS para simular a ação de 'codificar' um patch
        codificarMensagem: function(mensagem) {
            // Simula uma simples Cifra de César com deslocamento 3
            let mensagemCodificada = "";
            for (let i = 0; i < mensagem.length; i++) {
                let charCode = mensagem.charCodeAt(i);
                // Assume-se que estamos codificando letras maiúsculas ou minúsculas
                if (charCode >= 65 && charCode <= 90) { // Maiúsculas (A-Z)
                    mensagemCodificada += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
                } else if (charCode >= 97 && charCode <= 122) { // Minúsculas (a-z)
                    mensagemCodificada += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
                } else {
                    mensagemCodificada += mensagem[i];
                }
            }
            console.log(`Mensagem original: ${mensagem}`);
            console.log(`Mensagem codificada (para o patch): ${mensagemCodificada}`);
            return mensagemCodificada;
        }
    },

    // 4. Funcionalidade da Loja (Método)
    listarLinhas: function() {
        console.log("--- Linhas de Produtos Cipher Walk ---");
        this.linhas.forEach(linha => {
            console.log(`* ${linha.nome}: ${linha.descricao}`);
        });
    }
};

// Exemplos de uso do objeto
LojaCipherWalk.listarLinhas();

// Testando a função de codificação do produto estrela
LojaCipherWalk.produtoEstrela.codificarMensagem("PASSO");