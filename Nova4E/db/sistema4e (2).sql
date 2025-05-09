-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Jul-2024 às 17:52
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistema4e`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `adm`
--

CREATE TABLE `adm` (
  `idAdm` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `atividade`
--

CREATE TABLE `atividade` (
  `idAtividade` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `atividade`
--

INSERT INTO `atividade` (`idAtividade`, `nome`) VALUES
(1, 'Apoio em oficinas'),
(2, 'Acompanhamento'),
(3, 'Ensino'),
(4, 'Trabalho administrativo'),
(5, 'Eventos'),
(6, 'Divulgação'),
(7, 'Controle de acesso'),
(8, 'Cozinha'),
(9, 'Outro');

-- --------------------------------------------------------

--
-- Estrutura da tabela `atividadesrequeridas`
--

CREATE TABLE `atividadesrequeridas` (
  `idEvento` int(11) NOT NULL,
  `idAtividade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `disponibilidade`
--

CREATE TABLE `disponibilidade` (
  `idVoluntario` int(11) NOT NULL,
  `idAtividade` int(11) NOT NULL,
  `outroDescricao` text DEFAULT NULL,
  `horasSemanais` int(11) NOT NULL,
  `periodicidade` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `doacoes`
--

CREATE TABLE `doacoes` (
  `idDoacoes` int(11) NOT NULL,
  `idVoluntario` int(11) DEFAULT NULL,
  `cpf_cnpj` varchar(20) NOT NULL,
  `nomeDoador` varchar(50) NOT NULL,
  `gratificacao` tinyint(1) NOT NULL,
  `email` varchar(50) NOT NULL,
  `perecivel` tinyint(1) DEFAULT NULL,
  `dataVencimento` datetime DEFAULT NULL,
  `dataDoacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `quantidade` int(11) DEFAULT NULL,
  `retirada` tinyint(1) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `documentos`
--

CREATE TABLE `documentos` (
  `idVoluntario` int(11) NOT NULL,
  `estadoCivil` varchar(50) NOT NULL,
  `RG` varchar(15) NOT NULL,
  `CPF` varchar(15) NOT NULL,
  `nacionalidade` varchar(50) NOT NULL,
  `profissao` varchar(50) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `complemento` varchar(100) DEFAULT NULL,
  `cep` int(11) NOT NULL,
  `caminhoImagem` varchar(10) NOT NULL,
  `nomeImagem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `idEvento` int(11) NOT NULL,
  `nomeEvento` varchar(50) NOT NULL,
  `data` datetime NOT NULL,
  `horario` varchar(50) NOT NULL,
  `resumo` varchar(50) NOT NULL,
  `descricao` text NOT NULL,
  `caminhoImagem` varchar(10) NOT NULL,
  `nomeImagem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedback`
--

CREATE TABLE `feedback` (
  `idFeedback` int(11) NOT NULL,
  `idVoluntario` int(11) DEFAULT NULL,
  `nome` varchar(50) NOT NULL,
  `data` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `descricao` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `participacao`
--

CREATE TABLE `participacao` (
  `idEvento` int(11) NOT NULL,
  `idVoluntario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `voluntario`
--

CREATE TABLE `voluntario` (
  `idVoluntario` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `nomeSocial` varchar(50) DEFAULT NULL,
  `telefone` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `dataNascimento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `adm`
--
ALTER TABLE `adm`
  ADD PRIMARY KEY (`idAdm`);

--
-- Índices para tabela `atividade`
--
ALTER TABLE `atividade`
  ADD PRIMARY KEY (`idAtividade`);

--
-- Índices para tabela `atividadesrequeridas`
--
ALTER TABLE `atividadesrequeridas`
  ADD KEY `fk_eventoAtividades` (`idEvento`),
  ADD KEY `fk_atividadesEvento` (`idAtividade`);

--
-- Índices para tabela `disponibilidade`
--
ALTER TABLE `disponibilidade`
  ADD KEY `fk_voluntarioDisponibilidade` (`idVoluntario`),
  ADD KEY `fk_atividadeDisponibilidade` (`idAtividade`);

--
-- Índices para tabela `doacoes`
--
ALTER TABLE `doacoes`
  ADD PRIMARY KEY (`idDoacoes`),
  ADD KEY `fk_voluntarioDoacoes` (`idVoluntario`);

--
-- Índices para tabela `documentos`
--
ALTER TABLE `documentos`
  ADD KEY `fk_idVoluntario` (`idVoluntario`);

--
-- Índices para tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`idEvento`);

--
-- Índices para tabela `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`idFeedback`),
  ADD KEY `fk_voluntarioFeedback` (`idVoluntario`);

--
-- Índices para tabela `participacao`
--
ALTER TABLE `participacao`
  ADD KEY `fk_voluntarioParticipacao` (`idVoluntario`),
  ADD KEY `fk_eventoParticipacao` (`idEvento`);

--
-- Índices para tabela `voluntario`
--
ALTER TABLE `voluntario`
  ADD PRIMARY KEY (`idVoluntario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adm`
--
ALTER TABLE `adm`
  MODIFY `idAdm` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `atividade`
--
ALTER TABLE `atividade`
  MODIFY `idAtividade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `doacoes`
--
ALTER TABLE `doacoes`
  MODIFY `idDoacoes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `idEvento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `feedback`
--
ALTER TABLE `feedback`
  MODIFY `idFeedback` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `voluntario`
--
ALTER TABLE `voluntario`
  MODIFY `idVoluntario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `atividadesrequeridas`
--
ALTER TABLE `atividadesrequeridas`
  ADD CONSTRAINT `fk_atividadesEvento` FOREIGN KEY (`idAtividade`) REFERENCES `atividade` (`idAtividade`),
  ADD CONSTRAINT `fk_eventoAtividades` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`);

--
-- Limitadores para a tabela `disponibilidade`
--
ALTER TABLE `disponibilidade`
  ADD CONSTRAINT `fk_atividadeDisponibilidade` FOREIGN KEY (`idAtividade`) REFERENCES `atividade` (`idAtividade`),
  ADD CONSTRAINT `fk_voluntarioDisponibilidade` FOREIGN KEY (`idVoluntario`) REFERENCES `voluntario` (`idVoluntario`);

--
-- Limitadores para a tabela `doacoes`
--
ALTER TABLE `doacoes`
  ADD CONSTRAINT `fk_voluntarioDoacoes` FOREIGN KEY (`idVoluntario`) REFERENCES `voluntario` (`idVoluntario`);

--
-- Limitadores para a tabela `documentos`
--
ALTER TABLE `documentos`
  ADD CONSTRAINT `fk_idVoluntario` FOREIGN KEY (`idVoluntario`) REFERENCES `voluntario` (`idVoluntario`);

--
-- Limitadores para a tabela `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `fk_voluntarioFeedback` FOREIGN KEY (`idVoluntario`) REFERENCES `voluntario` (`idVoluntario`);

--
-- Limitadores para a tabela `participacao`
--
ALTER TABLE `participacao`
  ADD CONSTRAINT `fk_eventoParticipacao` FOREIGN KEY (`idEvento`) REFERENCES `evento` (`idEvento`),
  ADD CONSTRAINT `fk_voluntarioParticipacao` FOREIGN KEY (`idVoluntario`) REFERENCES `voluntario` (`idVoluntario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
