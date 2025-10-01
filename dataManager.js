// This array acts as our simulated database.
let fameRecords = JSON.parse(localStorage.getItem('fameRecords')) || [];

function getAllRecords() {
    return fameRecords;
}

function addRecord(newRecord) {
    fameRecords.push(newRecord);
    localStorage.setItem('fameRecords', JSON.stringify(fameRecords));
    return true;
}

function deleteRecord(recordId) {
    fameRecords = fameRecords.filter(record => record.id !== recordId);
    localStorage.setItem('fameRecords', JSON.stringify(fameRecords));
}