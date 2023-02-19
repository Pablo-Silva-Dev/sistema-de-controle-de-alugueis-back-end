
# Sistema de controle de alugueis

## Descrição

Sistema para controle de aluguéis composto por uma entidade de items, clientes, comprovantes de aluguel e administradores. O sistema será operável pelo administrador.

!(Diagrama de Entidade Relacionamento)[https://i.ibb.co/55WmRyW/entity-relationship-diagram.jpg]

## Requisitos funcionais

### Comprovante de aluguel

- [x]  Administrador poderá emitir um novo comprovante de aluguel.
- [x]  Administrador poderá listar todos os comprovantes de aluguel cadastrados.
- [x]  Administrador poderá listar todos os comprovantes de aluguel vinculados a um cliente.
- [x]  Administrador poderá listar um unico comprovante  através do código do comprovante.
- [x]  Administrador poderá listar todos os comprovantes de aluguel por períodos de 7, 15, 30 e 90 dias.
- [x]  Administrador poderá editar a data de início e retorno de um comprovante de aluguel.
- [x]  Administrador poderá excluir permanentemente um comprovante de aluguel.

### Items

- [x]  Administrador poderá cadastrar um novo item para ser alugado (ex: talheres).
- [x]  Administrador poderá listar todos os items cadastrados.
- [x]  Administrador poderá editar um item cadastrado.
- [x]  Administrador poderá excluir permanentemente um item cadastrado.

### Clientes

- [x]  Administrador poderá cadastrar um novo cliente (telefone e endereço).
- [x]  Administrador poderá listar todos os clientes cadastrados.
- [x]  Administrador poderá editar dados do endereço de um cliente cadastrado.
- [x]  Administrador poderá excluir permanentemente um cliente cadastrado.

### Administrador

- [x]  Deve ser possível cadastrar um novo admnistrador.
- [x]  Deve ser possível listar todos os admnistradores.
- [x]  Deve ser possível editar a senha de um admnistrador.
- [x]  Deve ser possível excluir permanentemente um admnistrador.

### Autenticação

- [x]  Administrador poderá se autenticar no sistema.
- [x]  Administrador poderá solicitar redefinição de senha em caso de esquecimento/perda.
- [x]  Administrador poderá redefinir sua senha em caso de esquecimento/perda.

## Regras do negócio

### Administrador regras

- [x] Não é possível cadastrar dois ou mais administradores com o mesmo email.
- [x] Não é possível editar dados de um administrador que não exista.
- [x] Não é possível remover um administrador que não exista.
- [x] Não é possível manusear qualquer dado de administradores sem autenticação.

### Clientes regras

- [x] Não é possível cadastrar dois ou mais clientes com o mesmo email.
- [x] Não é possível cadastrar um cliente sem um CPF ou CNPJ válido.
- [x] Não é possível editar dados de um cliente que não exista.
- [x] Não é possível remover um cliente que não exista.
- [x] Não é possível manusear qualquer dado de clientes sem autenticação.

### Items regras

- [X] Não é possível editar dados de um item que não exista.
- [X] Não é possível remover um item que não exista.
- [x] Não é possível manusear qualquer dado de items sem autenticação.

### Comprovante de aluguel regras

- [x] Não é possível cadastrar um novo comprovante sem estar vinculado a um cliente existente.
- [x] Não é possível editar dados de um de um comprovante que não exista.
- [x] Não é possível remover um comprovante que não exista.
