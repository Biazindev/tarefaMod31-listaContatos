package br.com.tbiazin.TestDesafio;

import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Service
public class CadastroDeClientes {
    private final JdbcTemplate jdbcTemplate;
    
    @Autowired
    public CadastroDeClientes(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public void cadastrarClientes(String nome, String email, Long telefone, String id) {
        try {
            String sql = "INSERT INTO cidadaos (id, nome, email, telefone) VALUES (?, ?, ?, ?)";
            jdbcTemplate.update(sql, id, nome, email, telefone);
            System.out.println("Cadastrado com sucesso!\nNome: " + nome + "\nId: " + id);
        } catch (Exception e) {
            System.out.println("Erro ao cadastrar cidadão: " + e.getMessage());
        }
    }

    public String pesquisarPorId(String id) {
        try {
            String sql = "SELECT nome FROM cidadaos WHERE id = ?";
            String nome = jdbcTemplate.queryForObject(sql, String.class, id);
            if (nome != null) {
                return "Cliente encontrado:\nNome: " + nome + "\nID: " + id;
            } else {
                return "Cliente não encontrado.";
            }
        } catch (Exception e) {
            return "Erro ao pesquisar por id: " + e.getMessage();
        }
    }
}
