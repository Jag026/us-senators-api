Build a get route that returns the first and last names of all senators
A GET request to http://localhost:3000/api/senators returns:
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