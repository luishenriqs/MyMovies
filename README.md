CONHEÇA ESSE TRABALHO ACESSANDO AO LINK ABAIXO DO VÍDEO PUBLICADO NO MEU LINKEDIN.

https://www.linkedin.com/posts/luis-h-pereira-nodejs-react-native_react-activity-6731924043710160896-7-gz

Descrição
Esta aplicação foi desenvolvida em React (create-react-app) para consumir a Api pública do site TMDB (www.themoviedb.org). Para a sua construção foram usadas várias bibliotecas de auxílio no desenvolvimento além dos conceitos de "Hooks" e "Contexto".

INICIALIZAÇÃO
Para abrir a aplicação no navegador vá para o terminal na pasta do projeto e digite o comando "yarn start"

PÁGINAS

SIGNUP
Página destinada ao cadastro de novos usuários. Como esta aplicação não conta com integração com backend, nem banco de dados, optamos por salvar os dados de login no LocalStorage.

SIGNIN
Após se cadastrar o usuário está apto para fazer o login e acessar o conteúdo privado da aplicação.

DASHBOARD
A Dashboard é a página principal desta aplicação. De conteúdo privado, permitido acesso apenas para usuários logados, ela apresenta uma lista de filmes em destaque, os mais populares nos últimos 30 dias. Os cartazes dos filmes são exibidos em cards, que quando clicados direcionam a aplicação para a página Movie.

MOVIE
Página privada de exibição do poster do filme alvo da ação.

BESTOFYEAR
Pagina privada de exibição de lista com os melhores filmes do ano.


COMPONENTES

HEADER
O Header é de propriedade exclusiva das páginas de acesso privado. Apresenta a logo, um link para a página "BestOfYear" com os melhores filmes do ano, a informação de usuário logado e sua identificação, por fim, o botão de logout.

TOOLTIP
O tooltip é um importânte instrumento de auxílio no preenchimento do formulário nas páginas de signin e signup. Caso um dos campos obrigatórios não sejam preenchidos corretamente ou estejam vazios um mensagem de tooltip é exibida alertando o usuário
