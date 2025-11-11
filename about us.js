
fetch('about us.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('text-output').textContent = data;
  })
  .catch(error => {
    console.error('Error fetching text file:', error);
  });