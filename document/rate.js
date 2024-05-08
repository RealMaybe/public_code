const rate = r => "★★★★★☆☆☆☆☆".slice(5 - r, 10 - r);


function rate(n) {
    const star = "★★★★★☆☆☆☆☆";

    if (n >= 0 && n <= 5) return star.slice(5 - n, 10 - n);
    else throw new Error("Rating can only be between 0 and 5.")
}


const rate = n => (n >= 0 && n <= 5) ?
    "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n) :
    console.error("Rating can only be between 0 and 5.");