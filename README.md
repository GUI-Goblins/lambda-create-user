# Lambda Create User

This is a Lambda function that is used to create a character from inputs given by a user via the terminal.

## Installation

> Start with: `npm install`

## Usage

> To test, use: `npm test`

Create User via POST request to:
> https://tjmp838d98.execute-api.us-west-2.amazonaws.com/WorkingPOST/

Request Body Example:
```javascript
{
  "id": NUMBER, // Utilize id of 1. As endpoint is hardcoded to 1.
	"name": STRING,
	"race": STRING,
	"class": STRING,
	"age": NUMBER,
}
```

Play game utilizing live link below:
[Live Link](https://questforge.netlify.app/)

## UML Diagram

[UML Diagram](https://projects.invisionapp.com/freehand/document/Og97QVUVy)

## Repository link

[Repo Link](https://github.com/GUI-Goblins/lambda-create-user)

## Contributor(s)

- Chester Lee Coloma
- Anthony Cunningham
- Joshua Shea
- ChatGPT helped with tests
