# Accounts
**Requisitos Funcionais (RF)**
[X] - Deve ser possível cadastrar um usuário
[X] - Deve ser possível listar todos os usuários
[X] - Deve ser possível alterar um usuário
[x] - Deve ser possível deletar um usuário
[X] - Deve ser possível autenticar o usuário

**Requisitos Não Funcionais (RNF)**
[X] - Usar JWT para autenticação
[X] - Usar BCrypt para hash de senha

**Regras de Negócio (RN)**
[X] - Deve verificar se o usuário criado já existe
[x] - O usuário responsável pelas operações deve ser um usuário administrador

# Computers
Fields => [ id, brand, description, year,
            number_tumble, number_remote ]

**Requisitos Funcionais (RF)**
[X] - Deve ser possível cadastrar um novo computador
[X] - Deve ser possível listar todos os computadores
[X] - Deve ser possível alterar um computador
[X] - Deve ser possível deletar um computador

**Requisitos Não Funcionais (RNF)**
[X] - No campo *Description* deve se colocar tudo sobre
     o computador (processor, memory, disk, system_operational)

**Regras de Negócio (RN)**
[X] - Verificar pelo tombamento ou numero de série se o computador já foi cadastrado
[X] - Verificar se o computador que está sendo alterado já existe um número de tombamento cadastrado
[X] - Somente administradores poderão realizar as operações dos **(RF)**

# Printers
**Requisitos Funcionais (RF)**
[X] - Deve ser possível cadastrar uma nova impressora
[X] - Deve ser possível listar todas as impressoras
[X] - Deve ser possível alterar uma impressora
[X] - Deve ser possível deletar uma impressora

**Requisitos Não Funcionais (RNF)**

**Regras de Negócio (RN)**
[X] - Verificar pelo tombamento ou numero de série se a impressora já foi cadastrada
[X] - Verificar se a impressorea que está sendo alterada já existe um número de tombamento cadastrado
[X] - Somente administradores poderão realizar as operações dos **(RF)**

# Sectors
**Requisitos Funcionais (RF)**
[X] - Deve ser possível cadastrar um novo setor
[] - Deve ser possível listar todos setores
[] - Deve ser possível listar todos os computadores de um determinado setor
[] - Deve ser possível listar todas as impressoras de um determinado setor
[] - Deve ser possível listar todos os computadores/impressora de determinado setor
[] - Deve ser possível alterar um setor
[] - Deve ser possível deletar um setor

**Requisitos Não Funcionais (RNF)**
[] -

**Regras de Negócio (RN)**
[X] - Verificar se o setor já foi criado
[] - Verificar se o setor o qual deseja alterar existe
[] - Verificar se o setor o qual deseja deletar existe
[X] - Somente usuários administradores poderão realizar as operações da **RF**

# Registration
[] - Deve ser possível realizar um registro
