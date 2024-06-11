package br.com.tbiazin.TestDesafio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    @Autowired
    private IClienteRepository clienteRepository;

    public Cliente salvarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente buscarClientePorId(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }
}

