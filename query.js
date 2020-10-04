function query() {
    var input = encodeURIComponent(document.getElementById('textarea').value)
    fetch(
        'https://cors-anywhere.herokuapp.com/' +
        'http://api.wolframalpha.com/v2/query' +
        '?appid=26LQEH-YT3P6T3YY9'             +
        '&podstate=Step-by-step%20solution'    +
        '&input=' + input
    ).then(
        response => response.text()
    ).then(
        string => string.replace(/<\/?plaintext>/g, '<hr>')
    ).then(
        xml => document.getElementById('p').innerHTML = xml
    )
}

document.getElementById('button').addEventListener('click', query)
