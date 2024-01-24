package org.example;

public class Main {
    public static void main(String[] args) {

        Calculator calculator = new Calculator(7.5, 2.25);

        System.out.println("Addition result: " + calculator.addition());
        System.out.println("Subtraction result: " + calculator.subtraction());
        System.out.println("Multiplication result: " + calculator.multiplication());
        System.out.println("Division result: " + calculator.division());
    }

}
