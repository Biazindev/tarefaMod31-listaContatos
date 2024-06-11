package br.com.tbiazin.TestDesafio;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IClienteRepository extends JpaRepository<Cliente, Long> {
}
