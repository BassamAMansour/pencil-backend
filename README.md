# pencil-backend

## POST /login

Request body:

`{
"username": string,
"password": string
}`

Response:

`
{
"accessToken": string
}
`

Username and password can be anything. This is just a demo API on how to generate a JWT.
The returned JWT should be used later for authentication.

## GET /parse/:url

Params:
- url: website URL to parse its content and unfurl it.

Response:

`
{
"title": string,
"favicon": string,
"large-image": string,
"snippet": string
}
`

## POST /upload

Request body:

`"form-data": {"file": blob}`

Response:

`
{
"message": string,
"id": string
}
`

## GET /download/:id

Params:
- id: File identifier to download.
