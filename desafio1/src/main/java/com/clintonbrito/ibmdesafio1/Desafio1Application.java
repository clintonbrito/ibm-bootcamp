package com.clintonbrito.ibmdesafio1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class Desafio1Application {

    public static void main(String[] args) {

     ClintonBrito clintonBrito = new ClintonBrito();

     double result = clintonBrito.analiseTransacoes(List.of("2024-01-25,-45.00,alimentacao", "2024-01-25,-80.00,alimentacao", "2024-01-10,500.00,alimentacao"), "alimentacao");

        System.out.println(result);
    }

}
