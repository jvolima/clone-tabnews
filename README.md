# Clone Tabnews

Clone do projeto https://www.tabnews.com.br/

## Aprendizados

### Git e Github, qual a diferença?

O Deschamps apresentou uma excelente analogia para explicar a diferença entre Git e Github. Imagine o Git como um vídeo mp4 instalado em seu computador, permitindo que você reproduza o conteúdo diretamente de sua máquina. Por outro lado, o Github seria como o Youtube, uma plataforma que oferece acesso a milhões de vídeos, possibilitando a interação com criadores de conteúdo e a comunidade, além da capacidade de publicar seus próprios vídeos.

Nessa analogia, o Github assume o papel do Youtube, onde você pode visualizar repositórios de outras pessoas, publicar os seus projetos e interagir com outros membros da comunidade. Enquanto isso, o Git é representado como o vídeo mp4, funcionando como a pasta que abriga o seu projeto em termos mais básicos.

Dessa forma, ao utilizar o Github, você pode usufruir de todas essas vantagens, tornando a experiência de gerenciamento de projetos mais interativa e colaborativa, como ocorre no Youtube.

### NVM

O Node Version Manager (NVM) é uma ferramenta essencial para gerenciar as diferentes versões do Node em sua máquina. Com ele, você pode facilmente alternar entre as versões do Node em seus projetos, o que é especialmente útil quando você precisa trabalhar em projetos com requisitos específicos de versão.

Ao utilizar o NVM, é altamente recomendado especificar a versão do Node que está sendo utilizada em cada projeto. Isso torna mais fácil para outras pessoas que desejam contribuir com o projeto, pois garante que todos estejam utilizando a mesma versão do Node. Uma estratégia eficaz para alcançar isso é criar o arquivo .nvmrc (Node Version Manager Run Command) na raiz do projeto.

Esse arquivo .nvmrc contém a versão específica do Node que o projeto requer. Quando outra pessoa acessar o projeto e executar o comando `nvm install`, o NVM detectará automaticamente o arquivo .nvmrc e instalará a versão correta do Node necessária para o projeto.

Portanto, ao utilizar o NVM e criar o arquivo .nvmrc em seus projetos, você garante uma gestão mais consistente e colaborativa das versões do Node, facilitando a contribuição e o desenvolvimento conjunto. Isso aumenta a eficiência e a harmonia da equipe, além de garantir uma experiência mais fluida no desenvolvimento de projetos que dependem do Node.js.

### DNS (Domain Name System)

De maneira muito grosseira, podemos imaginar o DNS sendo um grande banco de dados, que se comporta dessa maneira:

| Domínios    | IPS           |
| ----------- | ------------- |
| google.com  | 192.158.1.38  |
| youtube.com | 201.55.94.100 |
| github.com  | 89.98.100.105 |

Basicamente o fluxo que acontece quando digitamos uma URL no navegador é o seguinte: Primeiro o computador vai no DNS e pede para ele o endereço IP do servidor com domínio X, depois que o DNS retorna esse endereço, o computador procura o servidor com IP informado pelo DNS.

Computador (sem IP informado) -> DNS -> Computador (com IP informado) -> Servidor

O funcionamento do DNS é um processo complexo e envolve várias etapas para traduzir nomes de domínio em endereços IP. Quando um usuário digita um nome de domínio como uol.com.br, o computador inicia o processo enviando uma solicitação ao Recursive Resolver, que está localizado no provedor de internet utilizado pelo computador. O Recursive Resolver é responsável por buscar as informações necessárias para traduzir o nome de domínio em um endereço IP.

Inicialmente, o Recursive Resolver faz uma consulta ao primeiro Root Resolver para obter informações sobre o domínio em questão. No entanto, o primeiro Root Resolver responde com uma mensagem "Não sei", indicando que ele não possui os dados solicitados. O primeiro Root Resolver tem conhecimento de que o domínio pertence ao ccTLD (Country Code Top Level Domain) do Brasil, identificado pelo "br" no final, e encaminha a consulta para o Root Server correspondente ao ccTLD brasileiro.

O segundo Root Server também não possui os dados necessários para responder à consulta, mas ele sabe que o servidor Authoritative Server do ccTLD brasileiro possui essas informações. Portanto, o Recursive Resolver prossegue enviando a consulta para o servidor Authoritative Server do ccTLD do Brasil.

Finalmente, o servidor Authoritative Server do ccTLD brasileiro possui os registros atualizados do domínio uol.com.br e fornece a resposta contendo o endereço IP associado a esse domínio. Com essa informação, o Recursive Resolver retorna o endereço IP ao computador, permitindo que ele acesse o site desejado, no caso do exemplo, o site da UOL.

Assim, o funcionamento do DNS envolve uma série de consultas e encaminhamentos entre vários servidores até que a informação correta seja obtida, permitindo que o computador acesse o site desejado com sucesso. Esse processo é essencial para a navegação eficiente na internet e exemplifica a importância e complexidade do sistema de nomes de domínio.

### POC (Proof of Concept) e MVP (Minimum Viable Product)

Imagine-se como o capitão de um navio, responsável por uma equipe considerável, quando de repente se encontra em uma situação desconcertante: todos os sinais desaparecem, as bússolas param de operar e você se vê perdido em meio ao vasto oceano. Diante desse desafio, surge a seguinte ponderação: deve-se traçar um rumo incerto em múltiplas direções, consumindo recursos valiosos e tempo precioso na tentativa de atingir um destino incerto, ou seria mais sensato despachar vários barquinhos em distintas orientações, na busca pela rota exata que o navio principal deve seguir?

Essa analogia, por sua vez, pode ser habilmente aplicada para ilustrar os conceitos de Provas de Conceito (POCs) e Mínimo Produto Viável (MVP) no âmbito do empreendedorismo. Assim como no desafio do capitão, é uma tarefa formidável acertar o rumo ideal logo de início, contudo, adotar a estratégia de enviar barquinhos exploratórios permite a identificação mais precisa do ângulo correto. À medida que os barquinhos revelam insights valiosos e indicam a direção apropriada, a missão se torna consideravelmente mais clara. No paralelo desta metáfora, o navio representa o MVP, a representação mais simplificada e funcional de um produto ou serviço, enquanto os barquinhos simbolizam os POCs, experimentos prévios que investigam diferentes abordagens e refinam o direcionamento.

Portanto, essa comparação eloquente destaca a importância de se adotar uma abordagem estratégica ao empreender. Em vez de confiar cegamente na primeira tentativa, a tática de explorar alternativas viáveis e acumular aprendizados valiosos através dos POCs, antes de impulsionar com determinação total através do MVP, emerge como uma estratégia mais prudente e eficaz.

### Arquitetura de Software

A seleção da arquitetura para um software deve priorizar a simplicidade, mas essa simplicidade não deve ser confundida com falta de qualidade. Em vez disso, deve refletir uma abordagem que facilite a incorporação de novas funcionalidades, promova a colaboração de diversos colaboradores, inspire confiança na manutenção contínua do projeto e evite rigidez e complexidade desnecessárias. A arquitetura ideal é aquela que prioriza a adaptabilidade e a facilidade de modificação.

Nesse contexto, a simplicidade significa optar por uma estrutura que seja clara e compreensível, facilitando o processo de adicionar ou alterar funcionalidades. Ela encoraja a participação ativa de diferentes pessoas no desenvolvimento, permitindo uma colaboração eficaz. A escolha acertada de arquitetura também garante que o software possa ser mantido com confiança ao longo do tempo, minimizando a possibilidade de problemas inesperados e reduzindo a curva de aprendizado para novos desenvolvedores.

Em contraposição, uma abordagem engessada e excessivamente complexa pode criar obstáculos à evolução do software. Uma arquitetura que priorize a flexibilidade deve ser preferida, evitando caminhos que levem a um sistema rígido e difícil de modificar. O objetivo é permitir que o software evolua de maneira contínua e natural, sem imposições desnecessárias que restrinjam suas possibilidades.

Em resumo, a arquitetura de software deve ser uma aliada da adaptabilidade, da colaboração e da facilidade de manutenção. Ao optar por uma abordagem simples e flexível, você estabelece as bases para um projeto que possa crescer e se adaptar às mudanças, mantendo sua qualidade e eficácia.