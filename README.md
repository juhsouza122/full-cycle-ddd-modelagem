# 📦 Domain & Repository Challenge – Full Cycle

Este projeto é um desafio técnico para prática de conceitos de **Domain-Driven Design** com **TypeScript** e **testes automatizados com Jest**.

---

## 🎯 Desafios implementados

### 1. OrderRepository

- Implementa a interface `OrderRepositoryInterface`
- Armazena pedidos em memória
- Testado com Jest cobrindo:
  - Criação de pedidos
  - Busca por ID
  - Listagem de todos os pedidos
  - Exclusão de pedidos

### 2. Domain Events com Customer

- Dispara eventos ao criar e alterar endereço de um `Customer`
- Usa `EventDispatcher` para registrar e invocar handlers
- `console.log` simula ações realistas em handlers

---

## 🧱 Estrutura do Projeto


full-cycke-ddd-modelagem/
├── src/
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── Customer.ts
│   │   │   └── Order.ts
│   │   ├── value-objects/
│   │   │   └── Address.ts
│   │   ├── repositories/
│   │   │   ├── OrderRepositoryInterface.ts
│   │   │   └── OrderRepository.ts
│   │   ├── events/
│   │   │   ├── EventDispatcher.ts
│   │   │   ├── customer-created.event.ts
│   │   │   └── customer-address-changed.event.ts
│   │   └── event-handlers/
│   │       ├── EnviaConsoleLog1Handler.ts
│   │       ├── EnviaConsoleLog2Handler.ts
│   │       └── EnviaConsoleLogHandler.ts
├── tests/
│   ├── OrderRepository.test.ts
│   └── CustomerEvents.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md


---

## 🚀 Como Executar o Projeto

### 1. Instalar dependências

```bash
npm install

### 2. Rodar testes

npm test
