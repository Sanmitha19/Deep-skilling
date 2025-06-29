package com.example; 
import org.junit.Test; 
import static org.junit.Assert.*; 
public class CalculatorTest { 
    @Test 
    public void testAdd() { 
        Calculator calc = new Calculator(); 
        assertEquals(8, calc.add(5, 3)); 
    } 
    @Test 
    public void testSubtract() { 
        Calculator calc = new Calculator(); 
        assertEquals(2, calc.subtract(5, 3)); 
    } 
} 
