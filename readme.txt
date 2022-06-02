The US-Senators-API is a suite of JSON endpoints that returns publicly available data about United States Senators.

Endpoints:
/api/senators A GET request returns response body (JSON) of all US Senators:

{
	"usSenators":
		[
			"michaelCrapo",
			"charlesGrassley",
			"patrcikLeahy"
		]
}


/api/senators/benjaminCardin A GET request returns response body (JSON) of details about the specified senator:

{
            "caucus": null,
            "congress_numbers": [
                116,
                117,
                118
            ],
            "current": true,
            "description": "Senior Senator for Maryland",
            "district": null,
            "enddate": "2025-01-03",
            "extra": {
                "address": "509 Hart Senate Office Building Washington DC 20510",
                "contact_form": "https://www.cardin.senate.gov/contact/",
                "office": "509 Hart Senate Office Building",
                "rss_url": "http://www.cardin.senate.gov/rss/feeds/?type=all"
            },
            "leadership_title": null,
            "party": "Democrat",
            "person": {
                "bioguideid": "C000141",
                "birthday": "1943-10-05",
                "cspanid": 4004,
                "firstname": "Benjamin",
                "gender": "male",
                "gender_label": "Male",
                "lastname": "Cardin",
                "link": "https://www.govtrack.us/congress/members/benjamin_cardin/400064",
                "middlename": "L.",
                "name": "Sen. Benjamin Cardin [D-MD]",
                "namemod": "",
                "nickname": "",
                "osid": "N00001955",
                "pvsid": "26888",
                "sortname": "Cardin, Benjamin (Sen.) [D-MD]",
                "twitterid": "SenatorCardin",
                "youtubeid": "senatorcardin"
            },
            "phone": "202-224-4524",
            "role_type": "senator",
            "role_type_label": "Senator",
            "senator_class": "class1",
            "senator_class_label": "Class 1",
            "senator_rank": "senior",
            "senator_rank_label": "Senior",
            "startdate": "2019-01-03",
            "state": "MD",
            "title": "Sen.",
            "title_long": "Senator",
            "website": "https://www.cardin.senate.gov"
        },
---
If Senator does NOT exist: 
Response body (JSON): {}


/api/senators/benjaminCardin/:attribute A GET request returns response body (JSON) with the attribute of the senator:
	/api/senators/benjaminCardin/party:
	"Democrat"


/api/states/:state A GET request returns response body (JSON) with the Senators of that state:
	/api/states/ks:
	["Jerry Moran","Roger Marshall"]


/api/party/:party A GET request returns response body (JSON) with the Senators of that Political Party:
	/api/party/republican:
	["Michael Crapo(ID)","Charles Grassley(IA)","Lisa Murkowski(AK)","Richard Shelby(AL)","Roy Blunt(MO)"]