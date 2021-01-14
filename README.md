## Scriba

Aplicaçao Desenvolvida utilizando React.js e React-native, com aplicaçao de Typescript em toda a estruturaçao da camada Front-end. Observa-se no repositorio a divisao por pastas do frontend(scriba-web),backend e mobile(appScriba).
Camada de Back-end implementada utilizando node,Typescript e express. rodando no docker com utilizaçao do banco relacional Postgrese typeorm.

Intuito da aplicaçao é praticar técnicas de experiencia do usuario e melhor codificaçao para sistemas. assim utilizando tambem técnicas,estruturas e estados para melhor aproveitamento do dos frameworks empregados e ainda com a segurança da autenticaçao jwt.

Scriba: a ideia do aplicativo é de juntar uma interface amigavel e eficiente para integrar usuarios e suas atividades dentro de uma corporaçao, a partir disso se tem um controle sobre o uqe está sendo feito e um feedback sempre rapido. 

Pode-se fazer o clone da aplicaçao copiando a url que ao clicar no botao verde acima do repositorio aparece, apos isso basta, no terminal dar o comando Yarn e as dependencias dela sao baixadas(lembrando que precisa-se do Node,Postgres, Yarn e algumas ferramentas de desenvolvimento). apos isso, criar o banco de dados com postgres(pode ser localhost ou atravesda imagem do postgres no docker) e aplicar o comando yarn 'typeorm migration:run' para serem criadas as tabelas do banco de dados(o mesmo tem que ser comfigurado com sua instancia em frontend/ormConfig.json).
