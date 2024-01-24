package org.example;

public class Calculator {
    private double number1;
    private double number2;

    public Calculator(double number1, double number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    public double addition() {
        return number1 + number2;
    }

    public double subtraction() {
        return number1 - number2;
    }

    public double multiplication() {
        return number1 * number2;
    }

    public double division() {
        if(number2 != 0) {
            return number1 / number2;
        } else {
            throw new IllegalArgumentException("Division by zero is not allowed"); // Source: https://stackoverflow.com/questions/12829962/how-do-i-throw-an-exception-for-division-by-0
        }

    }
}
