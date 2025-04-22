    let numbers = [32, 12, 34, 87, 54, 33];

    console.log("Original Number :", numbers);

    numbers.push(99);
    console.log("After Push Number :", numbers);

    let blocked = numbers.pop(99);
    console.log("After Pop Number :", numbers);
    console.log("Removed Number :", blocked);
