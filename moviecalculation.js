// JavaScript equivalent of your Java code
const titles = ["Spider-Man", "The Batman", "No Exit", "Encanto", "The King's Man", "Scream", "Kimi", "Fistful of Vengeance", "Eternals", "Pursuit", "My Hero Academia: World Heroes' Mission", "Restless", "Nightmare Alley", "The Ice Age Adventures of Buck Wild", "Hotel Transylvania: Transformania", "Texas Chainsaw Massacre", "The Requin", "Looop Lapeta", "Red Notice", "Kathal - A Jackfruit Mystery", "Sing 2", "The Jack in the Box:Awakening 2", "Venom: Let There Be Carnage", "The Matrix Resurrections", "Resident Evil:Welcome to Raccoon City", "Last Man Down", "Sooryavanshi" , "Tere Ishq Mein", "Uncharted", "Ghostbusters: Afterlife", "The 355", "Chhaava", "Marry Me", "Saiyaara", "The Hunt", "West Side Story", "Through My Window", "The Seven Deadly Sins: Cursed by Light", "One Shot", "Tom and Jerry: Cowboy Up!", "Clifford the Big Red Dog", "Tyler Perry's A Madea Homecoming", "Chennai Express", "The Boss Baby: Family Business", "Raat Akeli Hai", "Turning Red", "Brazen", "Tu Jhoothi Main Makkaar", "The House", "Blacklight", "Qala", "Ron's Gone Wrong", "Dangal", "The Sky Is Pink", "Free Guy", "Cruella", "De De Pyaar De 2", "The Suicide Squad", "We Can Be Heroes", "Yeh Jawaani Hai Deewani", "Gunjan Saxena: The Kargil Girl", "The Simpsons in Plusaversary", "Luca", "Bulbbul", "Mortal Kombat", "Zack Snyder's Justice League", "Badrinath Ki Dulhania", "Mother/Android", "Murder Mystery", "Raees", "Loveyatri", "Dune", "OK Jaanu", "The Last Warrior: Root of Evil", "The Privilege", "Om Shanti Om", "Queen of Spades", "Antlers", "Dangerous", "Extraction", "Bird Box", "The Irishman", "The Gray Man", "Don't Look Up", "Mrs. Serial Killer", "The Adam Project", "Jaadugar", "Glass Onion: A Knives Out Mystery", "Guilty", "Army of the Dead", "Pagglait", "The Trial of the Chicago 7", "The Old Guard", "Tribhanga", "6 Underground", "Meenakshi Sundareshwar", "Triple Frontier", "Ak vs Ak", "Marriage Story", "Darlings", "Love Per Square Foot", "The Commando", "Ludo", "The Midnight Sky", "Chor Nikal Ke Bhaga", "Outside the Wire", "Khufiya", "Polar", "I Care a Lot", "Jaane Jaan", "Spiderhead", "The Mother", "Rajma Chawal","Choked: Paisa Bolta Hai","Kapoor & Sons","Ae Dil Hai Mushkil", "Article 15" ,"Day Shift", "Hustle", "Spider-Man: Homecoming","To All the Boys Ive Loved Before","The Perfect Date", "Wake Up Dead Man: A Knives Out Mystery", "Sniper 2", "Fifty Shades of Grey", "People We Meet on Vacation", "My Oxford Year", "Padmaavat", "Raazi", "Animal", "Even If This Love Disappears Tonight", "Made In Korea", "With Love"  ];

const voteCounts = [8940, 1151, 122, 5076, 1793, 8213, 2063, 1149, 4726, 1608, 1257, 2907, 9529, 737, 2889, 521, 6597, 330, 3193, 20000, 2172, 439, 5639, 3160, 1312, 318, 9390, 27900, 691, 2225, 2313, 42000, 75000, 12056, 16002, 15000, 18000, 7032, 4000, 4530, 38000, 11000, 60000, 4000, 40000, 15000, 9000, 55000, 3580, 3880, 25000, 4500,22000, 3598, 45000, 250000, 10200, 40000, 8000, 22000, 4526,4200, 18000, 50000, 19000, 35000, 70000, 11390, 18000, 90000, 8000, 90000, 4597, 7000, 12000, 97000, 6000, 4500, 11000, 24000, 35000, 42000, 220000, 58000, 9000, 21000, 5000, 50000, 10000, 180000, 5500, 20000, 220000, 9000, 180000, 8020, 15000, 30000, 330000, 65000, 1500, 3394, 8000, 18000, 45000, 90000, 11000, 10000, 14000, 35000, 12000, 90000, 8000, 7000, 450000, 60000, 60000, 3172, 200000, 794000, 145000, 60000, 20000, 10000, 350000, 41000, 2879, 40000, 90000, 150000, 8000, 9000, 8000 ];

const totalRatings = [74202, 9323.1, 768.9, 39085.2, 12551, 55848.4, 12996.9, 6089.7, 34027.2, 9487.2, 9176.1, 17151.3, 67655.9, 5232.7, 20223, 2657.1, 30346.2, 1980, 21712.4, 134000, 17810.4, 2370.6, 46426.9, 21488, 8003.2, 2003.4, 54462, 195300, 4906.1, 17132.5, 14109.3, 306600, 517500, 85597.6, 104013, 106500, 97200, 56256, 22400, 23133.5, 228000, 60500, 420000, 24000, 292000, 105000, 37800, 341000, 24344, 26384, 182500, 31500, 184800, 27344.8, 319500, 1825000, 59160, 304000, 36800, 158400, 24893, 21000, 133200, 330000, 115900, 280000, 469000, 55811, 109800, 603000, 37600, 720000, 24364.1, 41300, 70800, 97000, 22800, 26550, 56100, 163200, 231000, 327600, 1430000, 417600, 38700, 142800, 31000, 355000, 54000, 918000, 37950, 154000, 1474000, 55800, 1098000, 54536, 97500, 207000, 2607000, 429000, 11700, 22400.4, 60800, 102600, 315000, 486000, 67100, 63000, 88200, 245000, 66000, 513000, 45600.0, 39200, 3465000, 486000, 348000, 19349.2, 1469700, 5875600, 1015000, 348000, 146000, 52000, 1470000, 270600, 16986.1, 280000, 693000, 1005000, 59200, 54000, 57600 ];

// Main function (equivalent to Java main method)
function main() {
    console.log("=== Netflix Movie Analysis ===");
    
    for (let i = 0; i < titles.length; i++) {
        // Calculated voteAverage (EXACT same logic as Java)
        let voteAverage = totalRatings[i] / voteCounts[i];
        
        // Calculated popularity (EXACT same logic as Java)
        let popularity = voteAverage * voteCounts[i];
      

        let level;

        // Correct popularity level logic (EXACT same as Java)
        if (popularity < 20000) {
            level = "Low";
        } else if (popularity < 60000) {
            level = "Medium";
        } else {
            level = "High";
        }

        // EXACT same console output as Java System.out.println
        console.log("Movie: " + titles[i]);
        console.log("Vote Count: " + voteCounts[i]);
        console.log("Vote Average: " + voteAverage);
        console.log("Total Rating: " + totalRatings[i]);
        console.log("Popularity: " + popularity);
        console.log("Popularity Level: " + level);
        console.log("------------------------");
    }
    
    console.log("Analysis complete! Total movies analyzed: " + titles.length);
  
}

// Run the main function (equivalent to Java's main method execution)
main();