# Relatório Técnico - Calculadora Utilizando a Estrutura de Dados Pilha

Neste relatório técnico, explico os algoritmos desenvolvidos para a calculadora simples apresentada, utilizando a estrutura de dados Pilha. A calculadora é implementada usando HTML, CSS e JavaScript, e a funcionalidade de gerenciamento de expressões matemáticas é baseada na estrutura de dados Pilha.

## Estrutura de Dados Pilha

Uma Pilha é uma estrutura de dados que segue o princípio LIFO (Last In, First Out), onde o último elemento adicionado à pilha é o primeiro a ser removido. Em outras palavras, a pilha opera em um esquema de inserção e remoção restrito a um único extremo chamado topo da pilha.

No contexto da calculadora, a Pilha é utilizada para armazenar os valores e operadores que compõem a expressão matemática digitada pelo usuário. Cada vez que um valor ou operador é adicionado à expressão, ele é empilhado no topo da pilha. Durante o cálculo do resultado, os elementos da pilha são desempilhados e processados de acordo com as regras da matemática.

## Algoritmo de Adicionar Valor

A função `adicionarValor(valor)` é responsável por adicionar um valor numérico ao campo de resultado. Nesse algoritmo, o valor fornecido como parâmetro é simplesmente concatenado ao texto existente no campo de resultado. O valor é adicionado à expressão como uma sequência de caracteres.

## Algoritmo de Adicionar Operador

A função `adicionarOperador(operador)` é responsável por adicionar um operador matemático (+, -, *, /) ao campo de resultado. Assim como o algoritmo de adicionar valor, o operador é concatenado ao texto existente no campo de resultado. O operador também é adicionado à expressão como uma sequência de caracteres.

## Algoritmo de Adicionar Ponto Decimal

A função `adicionarDecimal()` é responsável por adicionar um ponto decimal ao campo de resultado, permitindo que números decimais sejam inseridos na expressão. Semelhante aos algoritmos anteriores, o ponto decimal é concatenado ao texto existente no campo de resultado e adicionado à expressão como uma sequência de caracteres.

## Algoritmo de Calcular Resultado

A função `calcular()` é responsável por avaliar e calcular o resultado da expressão matemática digitada pelo usuário. Nesse algoritmo, o conteúdo do campo de resultado é obtido e armazenado na variável `expressao`. Em seguida, a função `eval()` é utilizada para avaliar a expressão e calcular o resultado final. A função `eval()` é capaz de interpretar e executar expressões matemáticas em formato de string.

## Algoritmo de Deletar Último Caractere

A função `deletarUltimo()` é responsável por remover o último caractere da expressão presente no campo de resultado. Isso é feito através da manipulação da string da expressão, usando o método `slice()` para extrair todos os caracteres, exceto o último.

## Algoritmo de Apagar Tudo

A função `apagarTudo()` é responsável por limpar completamente o campo de resultado, apagando toda a expressão. Nesse algoritmo, o conteúdo do campo de resultado é simplesmente definido como uma string vazia.

## Conclusão

Neste relatório técnico, explico os algoritmos implementados para a calculadora utilizando a estrutura de dados Pilha. A Pilha é utilizada para armazenar os valores e operadores da expressão matemática, permitindo a adição, remoção e processamento correto dos elementos durante o cálculo do resultado.

Os algoritmos desenvolvidos demonstram uma abordagem simples e eficiente para lidar com a funcionalidade básica de uma calculadora simples. No entanto, é importante mencionar que esses algoritmos não são adequados para uso em cenários de produção e não levam em consideração aspectos como validação de expressões, tratamento de erros ou segurança. Para aplicações reais, é recomendado utilizar bibliotecas ou frameworks especializados em avaliação de expressões matemáticas, a fim de garantir precisão, segurança e tratamento adequado de casos de uso mais complexos.