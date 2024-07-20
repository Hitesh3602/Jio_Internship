package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	welcome := "Welcome to user input"
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Enter the rating for my code: ")
	fmt.Println("Enter the rating between 1 to 5")

	// coma okk || err err

	//in go we don't have (try/catch) so we use { input, _n / input,err}
	input, _ := reader.ReadString('\n')
	fmt.Println("Thanks for the rating: ", input)
	fmt.Printf("Type of rating is:- %T", input)

	//conversion of string to int
	numRating, err := strconv.ParseFloat(strings.TrimSpace(input), 64)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println("\n Added 1 to your rating: ", numRating+1)
	}
}
