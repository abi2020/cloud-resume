function fetchData() {
    fetch('https://tvpo4j4evf.execute-api.us-west-2.amazonaws.com/Prod/put')
        .then(() => fetch('https://tvpo4j4evf.execute-api.us-west-2.amazonaws.com/Prod/get'))
        .then(response => response.json())
        .then((data) => {
            document.getElementById('visitor-count').innerText = data.count;
            console.log(data)
        })
        .catch(error => {
            console.error('Error getting data:', error);
            document.getElementById('replaceme').innerText = 'Error loading data';
        });
}