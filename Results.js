// Add your custom JavaScript here

function filterResults() {
    // Add filtering logic based on selected season
    var selectedSeason = document.getElementById("season").value;
    var results = document.querySelectorAll('.results-list li');

    if (selectedSeason === "all") {
        results.forEach(function (result) {
            result.style.display = 'block';
        });
        if (selectedSeason === "currentSeason") {
            results.forEach(function (result) {
                result.style.display = 'block';
            });
    } else {
        results.forEach(function (result) {
            var resultSeason = result.getAttribute('data-season');
            if (resultSeason === selectedSeason) {
                result.style.display = 'block';
            } else {
                result.style.display = 'none';
            }
        });
    }
    }
}
