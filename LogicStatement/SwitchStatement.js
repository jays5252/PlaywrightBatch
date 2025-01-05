switch (grade) {
    case 'A':
        console.log("Excellent work!");
        break;
    case 'B':
        console.log("Good job!");
        break;
    case 'C':
        console.log("Satisfactory");
        break;
    default:
        console.log("Need improvement");
        break;
}

//Equivalent If-Else Statement
if (grade === 'A') {
    console.log("Excellent work!");
} else if (grade === 'B') {
    console.log("Good job!");
} else if (grade === 'C') {
    console.log("Satisfactory");
} else {
    console.log("Need improvement");
}
