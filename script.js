function submitForm() {
    var formData = $('#registrationForm').serialize();
    $.ajax({
    type:'POST',
    url:'backend.php',
    data:formData,
    success: function(response) {
    Swal.fire('Success!', 'Registration completed successfully!', 'success');
    },
    error: function(error) {
    Swal.fire('Error!', 'Something went wrong. Please try again later.', 'error');
    }
    });
}
