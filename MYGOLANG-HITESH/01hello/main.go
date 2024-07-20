package main

import "fmt"

const LoginToken string = "hitesh123" //this is PUBLIC  ->  in go if we write first letter capital that means it is an public.

func main() {
	var username string = "hitesh"
	fmt.Println(username)
	fmt.Printf("Variable is of type: %T \n", username)

	var isLoggedIn bool = false
	fmt.Println(username)
	fmt.Printf("Variable is of type: %T \n", isLoggedIn)

	// uint8       the set of all unsigned  8-bit integers (0 to 255)
	// uint16      the set of all unsigned 16-bit integers (0 to 65535)
	// uint32      the set of all unsigned 32-bit integers (0 to 4294967295)
	// uint64      the set of all unsigned 64-bit integers (0 to 18446744073709551615)

	// int8        the set of all signed  8-bit integers (-128 to 127)
	// int16       the set of all signed 16-bit integers (-32768 to 32767)
	// int32       the set of all signed 32-bit integers (-2147483648 to 2147483647)
	// int64       the set of all signed 64-bit integers (-9223372036854775808 to 9223372036854775807)

	// float32     the set of all IEEE-754 32-bit floating-point numbers
	// float64     the set of all IEEE-754 64-bit floating-point numbers

	// complex64   the set of all complex numbers with float32 real and imaginary parts
	// complex128  the set of all complex numbers with float64 real and imaginary parts

	// byte        alias for uint8
	// rune        alias for int32

	// uint     either 32 or 64 bits
	// int      same size as uint
	// uintptr  an unsigned integer large enough to store the uninterpreted bits of a pointer value

	var smallValue uint8 = 255
	fmt.Println(smallValue)
	fmt.Printf("Variable is of type: %T \n", smallValue)

	var smallFloat float32 = 255.51651651321
	fmt.Println(smallFloat)
	fmt.Printf("Variable is of type: %T \n", smallFloat)

	//if we use int, it won't assign the defalut any garbage values. 0 is assigned.
	var IAmInterger int
	fmt.Println(IAmInterger)
	fmt.Printf("Variable is of type: %T \n", IAmInterger)

	//if we don't assign the datatype it will automatically assign the type as per the value assign
	var website = "gfg.com"
	fmt.Println(website)
	fmt.Printf("Variable is of type: %T \n", website)
	// now if we assign website=3 it will not allow us to do that.

	//no use of var
	noUseOfVar := 500
	fmt.Println(noUseOfVar)
	fmt.Printf("Variable is of type: %T \n", noUseOfVar)

	//using of constant
	fmt.Println(LoginToken)
	fmt.Printf("Variable is of type: %T \n", LoginToken)

	
}
