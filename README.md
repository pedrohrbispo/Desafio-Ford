# Desafio Ford

A Ford está se transformando em uma gigante da tecnologia, e utilizando software para mudar a
forma que enxergamos a mobilidade e criar experiências positivas na vida das pessoas. Pensando
nisso, é essencial inserir o processo de inovação e tecnologia na forma como é trabalhada a
importação dos veiculos na empresa, em especial para o mercado brasileiro. Esse processo de
lojistica tem alguns requisitos, no qual um carro deve ser transportado entre quaisquer duas
capitais do país:

Capitais = [“Porto Velho”,”Manaus”,”Rio Branco”,”Campo Grande”,”Macapá”,”Brasília”,”Boa
Vista”,”Cuiabá”,”Palmas”,”São Paulo”,”Teresina”,”Rio de
Janeiro”,”Belém”,”Goiânia”,”Salvador”,”Florianópolis”,”São Luís”,”Maceió”,”Porto
Alegre”,”Curitiba”,”Belo Horizonte”,”Fortaleza”,”Recife”,”João Pessoa”,”Aracaju”,”Natal “,”Vitória”]

# Hoje em dia a empresa possui mapeado apenas as seguintes rotas unidirecionais:

[“Rio Branco”,”Macapá”], [“Macapá”,”Manaus”], [“Belém”,”Porto Velho”], [“Boa
Vista”,”Palmas”], [“Belém”,”Rio Branco”], [“Palmas”,”Rio Branco”], [“Boa
Vista”,”Salvador”], [“Maceió”,”Fortaleza”], [“São Luís”,”Salvador”], [“João
Pessoa”,”Recife”], [“Recife”,”Teresina”], [“Teresina”,”Natal”], [“Aracaju”,”Salvador”],
[“Natal”,”Aracaju”], [“Goiânia”,”Cuiabá”], [“Cuiabá”,”Campo Grande”], [“Campo
Grande”,”Brasília”], [“Vitória”, “Cuiabá”], [“Vitória”,”Belo Horizonte”], [“Belo
Horizonte”,”São Paulo”], [“São Paulo”,”Rio de Janeiro”], [“Rio de Janeiro”,”Curitiba”],
[“Curitiba”,”Florianópolis”], [“Florianópolis”,”Porto Alegre”]

Qualquer capital de qualquer região é capaz de se interconectar com todas as demais capitais da
mesma região. Por exemplo, São paulo é capaz de se conectar com qualquer outra capital da
região sudeste.