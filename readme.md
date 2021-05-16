# Accounts
**Requisitos Funcionais (RF)**
[] - Deve ser possível cadastrar um usuário
[] - Deve ser possível listar todos os usuários
[] - Deve ser possível alterar um usuário
[] - Deve ser possível deletar um usuário

**Requisitos Não Funcionais (RNF)**
[] - Usar JWT para autenticação
[] - Usar BCrypt para hash de senha

**Regras de Negócio (RN)**
[] - Deve verificar se o usuário criado já existe
[] - O usuário responsável pelas operações deve ser um usuário administrador

# Computers
**Requisitos Funcionais (RF)**
[] - Deve ser possível cadastrar um novo computador
[] - Deve ser possível listar todos os computadores
[] - Deve ser possível alterar um computador
[] - Deve ser possível deletar um computador

**Requisitos Não Funcionais (RNF)**
[] -

**Regras de Negócio (RN)**
[] - Verificar pelo tombamento ou numero de série se o computador já foi cadastrado
[] - Somente administradores poderão realizar as operações dos **(RF)**

# Printers
**Requisitos Funcionais (RF)**
[] - Deve ser possível cadastrar uma nova impressora
[] - Deve ser possível listar todas as impressoras
[] - Deve ser possível alterar uma impressora
[] - Deve ser possível deletar uma impressora

**Requisitos Não Funcionais (RNF)**
[] -

**Regras de Negócio (RN)**
[] - Verificar pelo tombamento ou numero de série se a impressora já foi cadastrada
[] - Somente administradores poderão realizar as operações dos **(RF)**

# Sectors
**Requisitos Funcionais (RF)**
[] - Deve ser possível cadastrar um novo setor
[] - Deve ser possível listar todos setores
[] - Deve ser possível alterar um setor
[] - Deve ser possível deletar um setor

**Requisitos Não Funcionais (RNF)**
[] -

**Regras de Negócio (RN)**
[] - Verificar se o setor já foi criado
[] - Verificar se o setor o qual deseja alterar existe
[] - Verificar se o setor o qual deseja deletar existe
[] - Somente usuários administradores poderão realizar as operações
