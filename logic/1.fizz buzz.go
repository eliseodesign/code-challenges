package main

import "fmt"

func main() {
    i := 1

    for i <= 100 {
        if i % 3 == 0 && i % 5 == 0 {
            fmt.Println("fizzbuzz")
        } else if i % 3 == 0 {
            fmt.Println("fizz")
        } else if i % 5 == 0 {
            fmt.Println("buzz")
        } else {
            fmt.Println(i)
        }
        i++
    }
}
