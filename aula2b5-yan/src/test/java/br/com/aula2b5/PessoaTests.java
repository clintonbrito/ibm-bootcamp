package br.com.aula2b5;

import br.com.aula2b5.entities.PessoaEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class PessoaTests {

    @Autowired
    MockMvc mockMvc;
    @Test
    public void testInserirPessoa() throws Exception {

        PessoaEntity pessoa = new PessoaEntity();
        pessoa.setNome("João");

        String conteudoPessoa;
        mockMvc
                .perform(MockMvcRequestBuilders.post("/pessoa"))
                .contentType();


        String textoResultado = resultado.getResponse().getContentAsString();

        assert ("Oi mundo 2".equals(textoResultado));
    }

}
