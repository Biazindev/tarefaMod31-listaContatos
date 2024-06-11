package br.com.tbiazin.TestDesafio;

import javax.sql.DataSource;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TestDesafioApplication {

    private static CadastroDeClientes cadastro;

    @Autowired
    public TestDesafioApplication(CadastroDeClientes cadastro) {
        this.cadastro = cadastro;
    }

    public static void main(String[] args) {
        SpringApplication.run(TestDesafioApplication.class, args);
        iniciar();
    }

    private static void iniciar() {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            exibirMenu();
            
            int opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Informe o nome: ");
                    String nome = scanner.nextLine();
                    System.out.print("Informe o email: ");
                    String email = scanner.nextLine();
                    System.out.print("Informe o telefone: ");
                    Long telefone = scanner.nextLong();
				String Id = null;
				cadastro.cadastrarClientes(Id, nome, telefone, email);
                    break;
                case 2:
                    System.out.print("Informe o id: ");
                    String id = scanner.nextLine();
                    String resultado = cadastro.pesquisarPorId(id);
                    System.out.println(resultado);
                    break;
                case 3:
                    System.out.print("Informe o ID: ");
                    String idPesquisa = scanner.nextLine();
                    String resultado1 = cadastro.pesquisarPorId(idPesquisa);
                    System.out.println(resultado1);
                    break;
                case 4:
                    System.out.println("Encerrando o programa...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida. Por favor, escolha uma opção válida.");
            }
        }
    }

    private static void exibirMenu() {
        System.out.println("Escolha uma opção:");
        System.out.println("1. Cadastrar nome, email e telefone");
        System.out.println("2. Pesquisar pelo id");
        System.out.println("3. Pesquisar pelo email");
        System.out.println("4. Sair");
    }
}
