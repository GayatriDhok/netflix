function updateStats() {
    // Total Movies
    if (document.getElementById('totalMovies')) {
        document.getElementById('totalMovies').textContent = allMovies.length;
    }

    // LANGUAGE STATS - Updates ALL your stat cards ✅
    const englishMovies = allMovies.filter(m => m.originalLanguage.toLowerCase() === 'english').length;
    const hindiMovies = allMovies.filter(m => m.originalLanguage.toLowerCase() === 'hindi').length;
    const otherMovies = allMovies.length - englishMovies - hindiMovies;
    
    // Update YOUR exact HTML IDs
    document.getElementById('englishMovies').textContent = englishMovies;
    document.getElementById('hindiMovies').textContent = hindiMovies;
    document.getElementById('otherMovies').textContent = otherMovies;

 // Popularity Stats
    const highPop = allMovies.filter(m => m.popularityLevel === 'High').length;
    document.getElementById('highPopularity').textContent = highPop;
    const mediumPop = allMovies.filter(m => m.popularityLevel === 'Medium').length;
    document.getElementById('mediumPopularity').textContent = mediumPop;
    const lowPop = allMovies.filter(m => m.popularityLevel === 'Low').length;
    document.getElementById('lowPopularity').textContent = lowPop;
}

// Show Movies language
function filterMovies(type) {
    currentFilter = type;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    let filteredMovies = allMovies;
    
    if (type !== 'all') {
        // LANGUAGE FILTERS ✅
        if (type === 'English') {
            filteredMovies = allMovies.filter(movie => 
                movie.originalLanguage.toLowerCase() === 'english'
            );
        } 
        else if (type === 'Hindi') {
            filteredMovies = allMovies.filter(movie => 
                movie.originalLanguage.toLowerCase() === 'hindi'
            );
        }
        else if (type === 'Other') {
            filteredMovies = allMovies.filter(movie => 
                movie.originalLanguage.toLowerCase() !== 'english' && 
                movie.originalLanguage.toLowerCase() !== 'hindi'
            );
        }
       // Other filters...
        else if (['High', 'Medium', 'Low'].includes(type)) {
            filteredMovies = allMovies.filter(movie => movie.popularityLevel === type);
        }
        else {
            filteredMovies = allMovies.filter(movie => 
                movie.genre.toLowerCase().includes(type.toLowerCase())
            );
        }
    }
    
    displayMovies(filteredMovies);
}
    

