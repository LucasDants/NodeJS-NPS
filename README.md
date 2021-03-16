

    
<h1 align="center">
:disappointed:  
:worried: 
:neutral_face:
:smirk:
:smiley: <br/>
NPS API
</h1>
<p align="center">NPS is a Restfull API to Net Promoter Score</p>

<p align="center">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-NPS/express" alt="Express Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-NPS/typeorm" alt="Typeorm Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-NPS/sqlite3" alt="Sqlite3 Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-NPS/yup" alt="Yup Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-NPS/nodemailer" alt="Nodemailer Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-NPS/handlebars" alt="Handlebars Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-NPS/dev/jest" alt="Jest Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-NPS/dev/typescript" alt="Typescript Version">
</p>

<h1>:memo:About</h1>
<p>NPS is a project developed during the <a href="https://nextlevelweek.com/ 4">Next Level Week</a> presented by <a href="https://www.linkedin.com/school/rocketseat/">Rockeseat</a>.</p>

<h1>:rocket: Getting started</h1>

```bash

# Clone this repository
$ git clone https://github.com/Luksdantas/NodeJS-NPS.git

# Access the project folder cmd/terminal
$ cd NodeJS-NPS

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# Run tests
$ npm test

# The application will open on the port: 3333 - go to http://localhost:3333

```

<h1>🛠 NPS API</h1>
<a href="https://github.com/Luksdantas/NodeJS-NPS/blob/main/Insomnia_2021-02-27.json">Insomnia document</a>
<h2>POST Create User</h2>
<h3>Request</h3>

`POST /users`

```
curl --request POST \
  --url http://localhost:3333/users \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Example Name",
	"email": "example@email.com"
}'
```

<h3>Response</h3>

```
{
  "id": "uuid",
  "name": "Example Name",
  "email": "example@email.com",
  "created_at": "timestamp"
}
```

<h2>POST Create Survey</h2>
<h3>Request</h3>

`POST /surveys`

```
curl --request POST \
  --url http://localhost:3333/surveys \
  --header 'Content-Type: application/json' \
  --data '{
"title": "Example Survey",
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas eu odio vel pharetra. Donec faucibus consectetur ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
}'
```

<h3>Response</h3>

```
{
  "id": "uuid",
  "title": "Example Survey",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas eu odio vel pharetra. Donec faucibus consectetur ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "created_at": "timestamp"
}
```

<h2>POST Send Mail</h2>
<h3>Request</h3>

`POST /sendMail`

```
curl --request POST \
  --url http://localhost:3333/sendMail \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "example@email.com",
	"survey_id": "uuid"
}'
```

<h3>Response</h3>

```
{
  "id": "uuid",
  "user_id": "uuid",
  "survey_id": "uuid",
  "value": null,
  "created_at": "timestamp",
  "user": {
    "id": "uuid",
    "name": "Example Name",
    "email": "example@email.com",
    "created_at": "timestamp"
  },
  "survey": {
    "id": "uuid",
    "title": "Example Survey",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas eu odio vel pharetra. Donec faucibus consectetur ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "created_at": "timestamp"
  }
}
```

<h2>GET List of Surveys</h2>
<h3>Request</h3>

`GET /surveys`

```
curl --request GET \
  --url http://localhost:3333/surveys
```

<h3>Response</h3>

```
[
  {
    "id": "uuid",
    "title": "Example Survey",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas eu odio vel pharetra. Donec faucibus consectetur ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "created_at": "timestamp"
  },
]
```

<h2>GET Email Answer</h2>
<h3>Request</h3>

`GET /answers`

```
curl --request GET \
  --url 'http://localhost:3333/answers/:value?u=surveysUserId'
```

<h3>Response</h3>

```
{
  "id": "surveyUserId",
  "user_id": "uuid",
  "survey_id": "uuid",
  "value": value,
  "created_at": "timestamp"
}
```

<h2>GET NPS</h2>
<h3>Request</h3>

`GET /nps`

```
curl --request GET \
  --url http://localhost:3333/nps/:surveyId
```

<h3>Response</h3>

```
{
  "detractors": 0,
  "passives": 0,
  "promotors": 0,
  "totalAnswers": 0,
  "nps": 0
}
```

<h1>:bookmark_tabs: License</h1>
 <img  src="https://img.shields.io/github/license/Luksdantas/NodeJS-NPS" alt="License">
 
 <p>Made with :heart: by Lucas Dantas 👋🏽 <a href="https://www.linkedin.com/in/luksdantas/">Get in Touch!</a></p>
