# Projeto DevOps - Fase 1: Configuração e Automação Inicial

Este projeto faz parte da Fase 1 da matéria de DevOps, onde o objetivo é configurar um pipeline de integração contínua (CI) e criar scripts de infraestrutura como código (IaC) com Terraform.

## Objetivos
- Configurar um pipeline de CI utilizando GitHub Actions.
- Automatizar a criação de infraestrutura utilizando Terraform.
- Implementar testes automatizados. 

## Estrutura
- `.github/workflows/ci.yml` → Pipeline CI/CD.
- `infra/main.tf` → Script Terraform.
- `src/` → Código base e testes.

## Tecnologias
- GitHub Actions
- Node.js
- Terraform

## Autor
Nathalia Chagas

------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Projeto DevOps - Fase 2: CD, Containerização e Orquestração (Docker Compose)

## Como rodar localmente
1. Instale Docker e Docker Compose
2. Na raiz do projeto:
   - `docker-compose up -d`
3. Acesse: http://localhost:3000

## Pipeline CI/CD
Arquivo `.github/workflows/cicd.yml`:
- Instala dependências
- Roda testes
- Builda e envia a imagem ao Docker Hub
- Executa `docker compose up -d` para demonstrar o deploy (CD)

## Infraestrutura
Arquivo `infra/main.tf` (Terraform) disponibiliza um bucket S3 (e pode ser extendido).

## Autor
Nathalia Chagas
