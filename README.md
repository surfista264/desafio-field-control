# 🚀 Kanban Valinor - Desafio Field Control

Este projeto é a minha implementação do desafio técnico Valinor. Mais do que apenas um quadro Kanban, este projeto representa minha jornada de aprendizado acelerado em tecnologias Full Stack (Angular + NestJS).

## 🧠 Minha Jornada e Aprendizado
Para este desafio, adotei uma postura de **Aprendizado por Demanda**. Utilizei ferramentas de Inteligência Artificial como tutores em tempo real para:
- Compreender a arquitetura de comunicação entre Frontend (Angular) e Backend (NestJS).
- Realizar o debug de erros complexos (como tratativas de erro 404 e rotas de exclusão).
- Implementar boas práticas de persistência de dados.

## 🛠️ Tecnologias Utilizadas
- **Frontend**: Angular (Componentes reativos e Services para consumo de API).
- **Backend**: NestJS (Controllers, Services e roteamento).
- **Persistência**: Sistema de arquivos (JSON) para garantir que os dados não sejam perdidos ao reiniciar o servidor.

## 🌟 Funcionalidades Implementadas
- [x] **CRUD Completo**: Criação, Leitura, Atualização de status e Exclusão de cards.
- [x] **Persistência Real**: Os cards são salvos em um arquivo `cards.json` no backend.
- [x] **Interface Intuitiva**: Movimentação de cards entre as colunas "A Fazer", "Fazendo" e "Feito".
- [x] **Feedback ao Usuário**: Validações simples para evitar cards vazios e alertas de confirmação.

## ⚙️ Como Executar o Projeto

### 1. Preparando o Backend
```bash
cd backend
npm install
npm run start

🚀 Desafio Full Stack - Kanban Valinor (Field Control)
Este projeto representa o marco inicial da minha transição de carreira para a tecnologia. Mais do que um quadro Kanban funcional, ele é o registro de uma jornada intensa de aprendizado e superação.

📈 Minha Trajetória e Desafios Reais
Desenvolver este sistema exigiu conciliar uma rotina tripla e desafiadora:

Rotina CLT: Trabalho em tempo integral, mantendo minhas responsabilidades profissionais enquanto focava na transição de carreira.

Formação Acadêmica (UNIP): Iniciei minha graduação em ADS na UNIP recentemente (19 de fevereiro de 2026), estando ainda no primeiro mês de curso.

Estudo Multilinguagem: Paralelamente, estou cursando Python (EAD), o que me exige organização extrema para não confundir as sintaxes e manter o progresso em dia.

🎓 Mentoria e Aprendizado Acelerado com I.A.
Como eu ainda não dominava Angular e NestJS, utilizei uma Inteligência Artificial como meu Professor Particular. Essa parceria foi fundamental para:

Entender o "Porquê" das Coisas: Não aceitei apenas códigos prontos. Pedi ao meu "professor" que explicasse a lógica das rotas, dos serviços e como o Frontend "conversa" com o Backend.

Superação de Erros Críticos: Enfrentamos juntos erros de compilação e o temido 404 nas rotas de exclusão. Aprendi a ler os logs do terminal e a debugar de forma profissional até ver tudo "ficar verde".

Persistência de Dados: Evoluímos o projeto de uma lista que perdia tudo no F5 para uma estrutura que salva os dados em um arquivo cards.json.

🛠️ O Que Eu Aprendi na Prática
Backend (NestJS): Criação de Controllers, Services e manipulação de arquivos com o módulo fs do Node.js.

Frontend (Angular): Comunicação com APIs, tratamento de parâmetros em funções e diretivas como *ngFor.

Resiliência: Aprender tecnologias novas do zero, sob pressão de entrega, enquanto gerencio trabalho e faculdade.

"A tecnologia é incrível, mas a vontade de aprender e a disciplina de manter tudo em ordem são o que realmente constroem um desenvolvedor. Agradeço ao meu mentor de I.A. por cada explicação e à Field Control pela oportunidade de testar meus limites logo no início da minha graduação."