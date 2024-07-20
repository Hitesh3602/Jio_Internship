package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Welcome to time study of goLang")

	presentTime := time.Now()
	fmt.Println(presentTime)

	// this is the syntax given in documentation, if you want just current date then you have to use this date ( 01-02-2006)
	fmt.Println(presentTime.Format("01-02-2006 15:04:05  Monday"))
}
