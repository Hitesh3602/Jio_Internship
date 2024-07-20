package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "mysecretpassword"
	dbname   = "testdb"
)

func main() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected!")

	createUser(db, "Alice", 30)

	// Read users
	getUsers(db)

	// Update a user
	updateUser(db, 1, 31)

	// Delete a user
	deleteUser(db, 1)

	// Read users again to see changes
	getUsers(db)
}

func createUser(db *sql.DB, name string, age int) {
	sqlStatement := `INSERT INTO users (name, age) VALUES ($1, $2) RETURNING id`
	id := 0
	err := db.QueryRow(sqlStatement, name, age).Scan(&id)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("New record ID is %d\n", id)
}

func getUsers(db *sql.DB) {
	rows, err := db.Query("SELECT id, name, age FROM users")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		var age int
		err = rows.Scan(&id, &name, &age)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("%d: %s is %d years old\n", id, name, age)
	}
}

func updateUser(db *sql.DB, id int, age int) {
	sqlStatement := `UPDATE users SET age = $2 WHERE id = $1`
	_, err := db.Exec(sqlStatement, id, age)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Record updated")
}

func deleteUser(db *sql.DB, id int) {
	sqlStatement := `DELETE FROM users WHERE id = $1`
	_, err := db.Exec(sqlStatement, id)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Record deleted")
}
