function showForm(planName) {
    const prices = {
      "Ultimate ACH": 29.99,
      "Core ACH": 26.99,
      "Flex ACH": 19.99
    };
  
    const taxRate = 0.08875;
    const base = prices[planName];
    const tax = +(base * taxRate).toFixed(2);
    const total = +(base + tax).toFixed(2);
  
    document.getElementById('membershipForm').style.display = 'block';
    document.getElementById('selectedPlanName').innerText = `You selected: ${planName}`;
  
    document.getElementById('invoiceBox').style.display = 'block';
    document.getElementById('invoicePlan').innerText = planName;
    document.getElementById('invoiceBase').innerText = base.toFixed(2);
    document.getElementById('invoiceTax').innerText = tax.toFixed(2);
    document.getElementById('invoiceTotal').innerText = total.toFixed(2);
  }


function validateForm() {
    let valid = true;
  
    // Field references
    const fields = [
      { id: 'fname', name: 'First Name', pattern: /^[A-Za-z\s]+$/, message: 'Only letters allowed.' },
      { id: 'lname', name: 'Last Name', pattern: /^[A-Za-z\s]+$/, message: 'Only letters allowed.' },
      { id: 'email', name: 'Email', pattern: /^[^@]+@[^@]+\.[^@]+$/, message: 'Enter a valid email.' },
      { id: 'phone', name: 'Phone Number', pattern: /^\d{10,}$/, message: 'Must be at least 10 digits.' },
      { id: 'address', name: 'Mailing Address', pattern: /.+/, message: 'Required.' },
      { id: 'city', name: 'City', pattern: /^[A-Za-z\s]+$/, message: 'Only letters allowed.' },
      { id: 'state', name: 'State', pattern: /^[A-Za-z\s]+$/, message: 'Only letters allowed.' },
      { id: 'zip', name: 'Zip Code', pattern: /^\d{5}$/, message: 'Must be 5 digits.' }
    ];
  
    // Validate each field
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(`${field.id}-error`);
  
      if (!input.value.trim()) {
        error.innerText = `${field.name} is required.`;
        input.classList.add('input-error');
        valid = false;
      } else if (!field.pattern.test(input.value.trim())) {
        error.innerText = field.message;
        input.classList.add('input-error');
        valid = false;
      } else {
        error.innerText = '';
        input.classList.remove('input-error');
      }
    });
  
    return valid;
  }