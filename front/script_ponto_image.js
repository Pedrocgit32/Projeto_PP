function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('image');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}

let button = document.getElementById("seguir");

button.onclick = async function() {
    window.location.pathname = "/front/"
};