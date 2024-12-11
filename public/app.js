document.getElementById('getDataBtn').addEventListener('click', () => {
    fetch('http://localhost:3000/api/hello')
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseData').innerText = data;
        })
        .catch(error => console.error('Error al obtener el saludo:', error));
});
