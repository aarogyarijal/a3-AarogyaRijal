let mileageData = [];
let editingIndex = -1;

// Set today's date as default
document.getElementById('date').valueAsDate = new Date();

// Load existing data
document.addEventListener('DOMContentLoaded', loadMileageData);

async function loadMileageData() {
    try {
        const response = await fetch('/api/mileage');
        if (response.ok) {
            mileageData = await response.json();
            displayMileageData();
        } else if (response.status === 401) {
            window.location.href = '/login';
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

document.getElementById('mileageForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        date: document.getElementById('date').value,
        cost: parseFloat(document.getElementById('cost').value),
        gallons: parseFloat(document.getElementById('gallons').value),
        totalMileage: parseInt(document.getElementById('totalMileage').value),
        cpg: (parseFloat(document.getElementById('cost').value) / parseFloat(document.getElementById('gallons').value)).toFixed(2)
    };

    if (editingIndex >= 0) {
        // Update existing record
        mileageData[editingIndex] = formData;
        editingIndex = -1;
        document.querySelector('#mileageForm button').textContent = 'Add Record';
    } else {
        // Add new record
        mileageData.push(formData);
    }

    try {
        await fetch('/api/mileage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mileageData)
        });

        displayMileageData();
        this.reset();
        document.getElementById('date').valueAsDate = new Date();
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Error saving data');
    }
});

function displayMileageData() {
    const tableBody = document.getElementById('mileageTable');
    tableBody.innerHTML = '';

    mileageData.forEach((record, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
                    <td>${record.date}</td>
                    <td>$${record.cost.toFixed(2)}</td>
                    <td>${record.gallons.toFixed(2)}</td>
                    <td>${record.totalMileage}</td>
                    <td>$${record.cpg}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" onclick="editRecord(${index})" style="margin-right: 8px;" aria-label="Edit mileage record from ${record.date}">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteRecord(${index})" aria-label="Delete mileage record from ${record.date}">Delete</button>
                    </td>
                `;
    });
}

function editRecord(index) {
    const record = mileageData[index];
    document.getElementById('date').value = record.date;
    document.getElementById('cost').value = record.cost;
    document.getElementById('gallons').value = record.gallons;
    document.getElementById('totalMileage').value = record.totalMileage;

    editingIndex = index;
    document.querySelector('#mileageForm button').textContent = 'Update Record';
}

async function deleteRecord(index) {
    if (confirm('Are you sure you want to delete this record?')) {
        mileageData.splice(index, 1);

        try {
            await fetch('/api/mileage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mileageData)
            });

            displayMileageData();
        } catch (error) {
            console.error('Error deleting record:', error);
            alert('Error deleting record');
        }
    }
}

async function logout() {
    try {
        await fetch('/api/logout', { method: 'POST' });
        window.location.href = '/login';
    } catch (error) {
        console.error('Error logging out:', error);
        window.location.href = '/login';
    }
}