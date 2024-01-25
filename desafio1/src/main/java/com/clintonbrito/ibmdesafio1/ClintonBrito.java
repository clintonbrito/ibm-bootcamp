package com.clintonbrito.ibmdesafio1;

import java.util.List;

public class ClintonBrito {

    public double analiseTransacoes(List<String> transacoes, String categoriaAlvo) {

        double saldo = 0.00;

        //    Fonte, "forEach" para Java que eu não sabia como fazia: https://stackoverflow.com/questions/85190/in-detail-how-does-the-for-each-loop-work-in-java
        for (String transacao : transacoes) {
            String[] cadaPedacoDaString = transacao.split(",");
            double valores = Double.parseDouble(cadaPedacoDaString[1]);

            saldo += valores;
        }

        return saldo;
    }

}
