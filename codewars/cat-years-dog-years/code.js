const humanYearsCatYearsDogYears = (humanYears) => {  
    return [
        humanYears,
        [15, 9, ...Array(humanYears)].fill(4, 2).slice(0, humanYears).reduce((t, n) => t + n, 0),
        [15, 9, ...Array(humanYears)].fill(5, 2).slice(0, humanYears).reduce((t, n) => t + n, 0),
    ];
}