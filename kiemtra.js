document.getElementById('tourForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const tourId = document.getElementById('tourId').value;
    const destination = document.getElementById('destination').value;
    const price = document.getElementById('price').value;
    const imageFile = document.getElementById('image').files[0];

    // Create a new row
    const newRow = document.createElement('tr');
    
    // Create cells for each piece of data
    const idCell = document.createElement('td');
    idCell.textContent = tourId;
    
    const destinationCell = document.createElement('td');
    destinationCell.textContent = destination;
    
    const priceCell = document.createElement('td');
    priceCell.textContent = price;
    
    const imageCell = document.createElement('td');
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(imageFile);
    imageCell.appendChild(imageElement);
    
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });
    actionCell.appendChild(deleteButton);
    
    // Append cells to the row
    newRow.appendChild(idCell);
    newRow.appendChild(destinationCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(imageCell);
    newRow.appendChild(actionCell);
    
    // Append the row to the table
    document.getElementById('tourList').appendChild(newRow);
    
    // Clear the form
    document.getElementById('tourForm').reset();
});
