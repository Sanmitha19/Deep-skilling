package com.example; 
import org.junit.Before; 
import org.junit.After; 
import org.junit.Test; 
import static org.junit.Assert.*; 
public class CalculatorTest { 
    private Calculator calc; 
    @Before 
    public void setUp() { 
        System.out.println("Setup before test"); 
        calc = new Calculator(); 
    } 
    @After 
    public void tearDown() { 
        System.out.println("Teardown after test"); 
        calc = null; 
    } 
    @Test 
    public void testAdd() { 
        int result = calc.add(2, 3); 
        assertEquals(5, result); 
    } 
    @Test 
    public void testMultiply() { 
        int result = calc.multiply(4, 5); 
        assertEquals(20, result); 
    } 
} 
