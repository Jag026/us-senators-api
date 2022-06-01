Build a get route that returns the first and last names of all senators
A GET request to http://localhost:3000/recipes returns:
Response body (JSON):
{
	"usSenators":
		[
			"michaelCrapo",
			"charlesGrassley",
			"patrcikLeahy"
		]
}
Status: 200

Build a GET route that takes a senator name as a string param. Return the Senator's state, party, nickname, phone, and website as JSON
A GET request to http://localhost:3000/senators/details/benjaminCardin returns:
If Senator exists: 
Response body (JSON):
{
	"details":
		{
			"state": "MD",
			"party": "Democrat",
			"nickname": "",
			"phone": "202-224-4524",
			"website": "https://www.cardin.senate.gov" ,
		}
}
Status: 200
---
If Senator does NOT exist: 
Response body (JSON): {}
Status: 200


Add a POST route that can add additional senators in the existing format to the backend with support for the above routes.
A POST request to http://localhost:3000/senators with body 
{
	"firstName": "spongebob",
	"lastName": "squarepants",
	"state": "DB",
	"party": "independent",
	"nickname": "spongey",
	"phone": "555-555-1111",
	"website": "https://www.squarepants.senate.gov" ,
} 
returns:
Response body: None
Status: 201

Error Response:

If the senator already exists:
Response body (JSON):
{
	"error": "Senator already exists"
}
Status: 400

Add a PUT route that can update existing senators.
A PUT request to http://localhost:3000/senators with body 
{
	"name": "benjaminCardin", 
		"state": "CA"
} returns:
Response body: None
Status: 204

Error Response:

If the senator doesn't exist:

Response body (JSON):
{
	"error": "Senator does not exist"
}
Status: 404