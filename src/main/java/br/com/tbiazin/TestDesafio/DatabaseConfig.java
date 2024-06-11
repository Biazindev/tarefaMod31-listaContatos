package br.com.tbiazin.TestDesafio;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseConfig {

    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://localhost:5432/vendas_online_2")
            .username("postgres")
            .password("Alado2jk*")
            .build();
    }
}
