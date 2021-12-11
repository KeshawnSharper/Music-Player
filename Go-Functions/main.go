package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"

	"fmt"

	"github.com/rs/cors"
)

type MyEvent struct {
	Name string `json:"name"`
}

// DynamoDB Register
func registerUser(db *dynamodb.DynamoDB) error {
	params := &dynamodb.PutItemInput{
		Item: map[string]*dynamodb.AttributeValue{
			"id": {
				S: aws.String("1"),
			},
			"oauthid": {
				S: aws.String("google:1234"),
			},
			"email": {
				S: aws.String("test@example.com"),
			},
			"username": {
				S: aws.String("username"),
			},
			"created_at": {
				N: aws.String("123456789"),
			},
			"lastlogin": {
				N: aws.String("123456789"),
			},
		},
		TableName: aws.String("Music-Application-Users"),
	}
	_, err := db.PutItem(params)

	if err != nil {
		return err
	}

	return nil
}

func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
func HandleRequest(ctx context.Context, name MyEvent) (string, error) {
	return fmt.Sprintf("Hello %s!", name.Name), nil
}
func registerHandler(w http.ResponseWriter, r *http.Request) {
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String("us-west-2")},
	)
	setupResponse(&w, r)
	// if r.URL.Path != "/" {
	// 	http.Error(w, "404 not found.", http.StatusNotFound)
	// 	return
	// }

	// if r.Method != "GET" {
	// 	http.Error(w, "Method is not supported.", http.StatusNotFound)
	// 	return
	// }

	if r.URL.Path == "/register" {
		body, _ := ioutil.ReadAll(r.Body)
		registerUser(sess)
		fmt.Println("response Body:", string(body))
		fmt.Fprintf(w, string(body))
	}
}
func main() {

	mux := http.NewServeMux()
	mux.HandleFunc("/register", registerHandler)

	// cors.Default() setup the middleware with default options being
	// all origins accepted with simple methods (GET, POST). See
	// documentation below for more options.
	handler := cors.Default().Handler(mux)
	http.ListenAndServe(":8080", handler)
}
