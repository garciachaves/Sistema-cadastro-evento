# Atividade - SENAI - Front-end
## Implementação utilizando JavaScript
O sistema tem como objetivo verificar algumas condições para permitir o cadastro de participantes em um evento.

A primeira verificação é se a data do evento é posterior à data atual. Se a data do evento for anterior ou igual à data atual, uma mensagem de erro será exibida. Caso contrário, o cadastro será permitido.

A segunda verificação é se o participante tem idade igual ou superior a 18 anos. Se a idade do participante for menor do que 18 anos, o cadastro será negado e uma mensagem informando a idade mínima necessária será exibida.

Em seguida, é exibido as listas de participantes e palestrantes cadastrados. O limite máximo de participantes permitidos é de 100 pessoas. O código verifica se o número de participantes cadastrados excede esse limite e exibe uma mensagem de erro se isso acontecer.

Caso o número de participantes esteja dentro do limite permitido, o código exibe uma mensagem informando o número total de participantes cadastrados.

Segue abaixo o diagrama do sistema: <br>
![Imagem com o diagrama do sistema](/SistemaCadastroEvento.jpg)

