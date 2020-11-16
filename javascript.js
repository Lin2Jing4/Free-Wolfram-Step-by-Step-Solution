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
'59EQ3X-HE26TY2W64',
'8Q68TL-QA8W9GEXAA',
'KQRKKJ-8WHPY395HA',
'AAT4HU-Q3RETTGY93',
'7JKH84-T648HW2UV9',
]

var percentalize = str => 
    encodeURIComponent(str)
    .replace(/[-_.!~*'()]/g, char => '%' + char.charCodeAt(0).toString(16))

var url = _ =>
`
https://lin2jing4-cors.herokuapp.com/
http://api.wolframalpha.com/v2/query?
&appid=${ appid[Date.now() % appid.length] }
&input=${ percentalize(input.value) }
&podstate=Step-by-step solution
&podstate=Step-by-step
&podstate=Show all steps
&scantimeout=20
`

form.onsubmit = event => {
    container.prepend('Processing, please wait. ')
    fetch(
        url()
    ).then(
        xml => xml.text()
    ).then(
        xml => container.innerHTML = xml.replace(/plaintext/g, 'pre')
                                        .replace(/<pod title../g, '<h1>')
                                        .replace(/.......scanner/gs, '</h1><!')
    )
    event.preventDefault()
}

input.oninput = _ =>
    location.hash = percentalize(input.value)

window.onhashchange = _ =>
    input.value = decodeURIComponent(location.hash.slice(1))

if (input.value = decodeURIComponent(location.hash.slice(1)))
    submit.click()

var demo = category => {
    container.prepend('Processing, please wait. ')
    fetch(
        'https://lin2jing4-cors.herokuapp.com/' +
        'https://www.wolframalpha.com/examples/pro-features/step-by-step-solutions/' +
        'step-by-step-' + category
    ).then(
        html => html.text()
    ).then(
        html => container.innerHTML = html.replace(/.*examples-subpage-body../gs, '')
                                          .replace(/subpage-footer-section.*/gs, '')
                                          .replace(/.input..../g, '/Free-Wolfram-Step-by-Step-Solution#')
                                          .replace(/\+/g, ' ')
                                          .replace(/&amp;..../g, '')
                                          .replace(/aside/g, 'aside hidden')
                                          .replace(/More examples/g, '')
                                          .replace(/svg /g, '')
    )
}

document.querySelectorAll('.example').forEach(
    example => example.href = `javascript:demo('${example.innerText}')`
)
