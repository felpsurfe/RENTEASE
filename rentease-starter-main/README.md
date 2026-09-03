# RentEase

O **RentEase** é uma aplicação web intuitiva desenhada para simplificar a gestão e consulta de propriedades imobiliárias para arrendamento. A plataforma resolve a dificuldade em organizar e filtrar múltiplos imóveis, permitindo aos utilizadores visualizar rapidamente estatísticas gerais, gerir imóveis favoritos em formato *post-it*, e aplicar filtros combinados de pesquisa (por cidade, intervalo de preços e área) com persistência de dados local (`localStorage`).

## Funcionalidades concluídas

- [x] criar apartamentos;
- [x] guardar e recuperar dados com `localStorage`;
- [x] listar apartamentos;
- [x] filtrar por cidade, preço e área;
- [x] ordenar por cidade, preço e área;
- [x] marcar e desmarcar favoritos;
- [x] eliminar apartamentos;
- [x] apresentar resumo e favoritos na Home;
- [x] adaptar a interface a mobile.

## 🚀 Como Executar

- **Opção 1 (Direta):** Clica duas vezes no ficheiro `index.html` para abrir diretamente no navegador.
- **Opção 2 (Recomendada - Cursor):** Abre a pasta no **Cursor**, clica com o botão direito no `index.html` e escolhe **"Open with Live Server"** para abrir com atualização automática.

## 🧭 Como Utilizar

A navegação no **RentEase** é simples e dividida em 3 passos:

1. **Home (`index.html`):** Vê o resumo com o total de imóveis registados, estatísticas gerais e os teus favoritos guardados.
2. **Imóveis (`flats.html`):** Explora a lista completa de apartamentos. Usa a barra de topo para filtrar por cidade, preço ou área, e clica no botão para marcar/desmarcar favoritos.
3. **Novo Imóvel (`add-flat.html`):** Preenche o formulário para registar um novo apartamento. Assim que guardares, ele fica logo disponível na lista e salvo no teu browser.

## 🧪 Testes Realizados

Para garantir que a aplicação é estável e não quebra durante a utilização, foram realizados testes manuais cobrindo diferentes cenários de uso:

### 1. Casos Válidos (Caminho Feliz)
- **Criação de Imóvel:** Preenchimento completo do formulário com dados válidos e confirmação de que o novo apartamento surge imediatamente na listagem de `flats.html`.
- **Persistência de Dados:** Atualização (*refresh*) da página e fecho do navegador para garantir que os imóveis criados permanecem guardados no `localStorage`.
- **Filtros e Ordenação:** Teste aos filtros por cidade, intervalo de preço e área, combinados com a ordenação (ex: preço mais baixo primeiro), confirmando que a lista reage e exibe os resultados corretos.
- **Favoritos e Resumo:** Marcação de um imóvel como favorito na página de Imóveis e verificação imediata do aumento dos contadores e surgimento do cartão na Home.

### 2. Casos Inválidos & Validações
- **Formulário Incompleto:** Tentativa de submeter o formulário de criação com campos obrigatórios vazios (ex: sem preço ou sem cidade), garantindo que o browser bloqueia o envio e avisa o utilizador.
- **Valores Negativos/Inválidos:** Teste de inserção de valores negativos nos campos de preço e área para validar que apenas números positivos são aceites.

### 3. Operações Repetidas & Edge Cases
- **Adicionar e Remover Favoritos Alternadamente:** Clicar várias vezes em "Marcar como favorito" e "Remover dos favoritos" para garantir que os contadores na Home sincronizam sem erros de contagem.
- **Eliminação de Todos os Imóveis:** Eliminação sucessiva de cartões até a lista ficar vazia, confirmando que as mensagens de aviso ("Ainda não existem apartamentos") aparecem corretamente sem quebrar o layout.

## ⚠️ Limitações Conhecidas & Futuras Melhorias

Embora a aplicação esteja totalmente funcional para a sua versão atual, existem alguns pontos identificados para evolução futura:

- **Persistência Apenas Local:** Os dados ficam guardados exclusivamente no `localStorage` do navegador. Se limpares a cache do browser ou mudares de dispositivo, os dados não são sincronizados (não há base de dados remota nem sistema de contas).
- **Sem Edição de Imóveis (UPDA*TE):** De momento é possível criar e eliminar apartamentos, mas ainda não existe uma opção para editar os dados de um imóvel já criado.
- **Validação Básica do Formulário:** A validação depende essencialmente das regras nativas do HTML. Validações avançadas de campos em tempo real no JS poderiam melhorar ainda mais a experiência de utilização.
- **Sem Upload Real de Imagens:** Os cartões usam layout e estilo estático (*post-it*); adicionar suporte a carregamento ou URLs de fotos dos imóveis seria um excelente próximo passo.

## 👤 Autor

Desenvolvido por **Felipe Duarte**.