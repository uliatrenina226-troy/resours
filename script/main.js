document.querySelector('.search-form').addEventListener('submit',function(e) {
    const query = this.querySelector('input[name="q"]').value.trim();
    if (!query) {
        e.preventDefault();
        alert("Введите запрос");
    }
});