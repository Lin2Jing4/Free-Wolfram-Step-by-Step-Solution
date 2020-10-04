function query() {
    var input = encodeURIComponent(document.getElementById('textarea').value)
    fetch(
        'https://cors-anywhere.herokuapp.com/' +
        'http://api.wolframalpha.com/v2/query' +
        '?appid=26LQEH-YT3P6T3YY9'             +
        '&podstate=Step-by-step%20solution'    +
        '&input=' + input
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
