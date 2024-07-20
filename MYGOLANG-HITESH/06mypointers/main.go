package main

import "fmt"

func main() {
	fmt.Println("Welcome to class POINTERS")

	//if you don't assign value to pointer then, then it stores nil
	var ptr *int
	fmt.Println("Value of pointer is: ", ptr)
}
