const appid = [
    '26LQEH-YT3P6T3YY9',
    'K49A6Y-4REWHGRWW6',
    'J77PG9-UY8A3WQ2PG',
    'P3WLYY-2G9GA6RQGE']

function query() {
    const input = document.getElementById('textarea').value
    const random = Math.floor(Math.random() * appid.length)
    fetch(
        'https://cors-anywhere.herokuapp.com/' +
        'http://api.wolframalpha.com/v2/query' +
        '?podstate=Step-by-step%20solution'    +
        '&input=' + encodeURIComponent(input)  +
        '&appid=' + appid[random]
    ).then(
        xml => xml.text()
    ).then(
        xml => xml.replace(/<\/?plaintext>/g, '<hr>')
    ).then(
        xml => xml.replace(/<pod title=/g, '<h1>')
    ).then(
        xml => xml.replace(/scanner/g, '</h1><pod scanner')
    ).then(
        xml => document.getElementById('p').innerHTML = xml
    )
}

document.getElementById('button').addEventListener('click', query)
