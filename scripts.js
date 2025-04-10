function handleSubmit() {
    // Get form values
    const subject = document.getElementById('subject').value;
    if (!subject) {
        alert('Subject is required');
        return;
    }
    
    // Show success toast
    document.getElementById('success-toast').classList.remove('slds-hide');
    
    // Reset form
    document.getElementById('subject').value = '';
    document.getElementById('description').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('status').value = '';
    document.getElementById('origin').value = '';
    
    // Auto-hide toast after 3 seconds
    setTimeout(hideToast, 3000);
}

function hideToast() {
    document.getElementById('success-toast').classList.add('slds-hide');
}
