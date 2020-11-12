'use strict'

var appid =
[
'26LQEH-YT3P6T3YY9',
'K49A6Y-4REWHGRWW6',
'J77PG9-UY8A3WQ2PG',
'P3WLYY-2G9GA6RQGE',
'P7JH3K-27RHWR53JQ',
'L349HV-29P5JV8Y7J',
'77PP56-XLQK5GKUAA',
]

var url = _ =>
`
https://lin2jing4-cors.herokuapp.com/
http://api.wolframalpha.com/v2/query?
&appid=${ appid[Date.now() % appid.length] }
&input=${ encodeURIComponent(input.value) }
&podstate=Step-by-step solution
&podstate=Step-by-step
&podstate=Show all steps
&scantimeout=20
`

var query = _ =>
    fetch(
        url()
    ).then(
        xml => xml.text()
    ).then(
        xml => xml.replace(/plaintext/g, 'pre')
                  .replace(/<pod title='/g, '<h1>')
                  .replace(/'\s*s/g, '</h1><!')
    ).then(
        xml => p.innerHTML = xml
    )

button.addEventListener('click', query)
