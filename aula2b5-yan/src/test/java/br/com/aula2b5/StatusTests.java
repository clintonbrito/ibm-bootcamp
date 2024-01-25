package br.com.aula2b5;

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

@Test
public class StatusTests {

    @Autowired
    MockMvc mockMvc;
    @Test
    public void testStatusGet() throws Exception {
        MvcResult resultado = mockMvc
                .perform(MockMvcRequestBuilders.get("/status"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();

        String textoResultado = resultado.getResponse().getContentAsString();

        assert ("Oi mundo".equals(textoResultado));
    }

    @Test
    public class StatusTests {
        public void testStatusPost() throws Exception {
            MvcResult resultado = mockMvc
                    .perform(MockMvcRequestBuilders.post("/status"))
                    .andExpect(MockMvcResultMatchers.status().isOk())
                    .andReturn();

            String textoResultado = resultado.getResponse().getContentAsString();

            assert ("Oi mundo 2".equals(textoResultado));
        }
    }
}


