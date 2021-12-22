let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995"
    },
    {
        name: "Santakonia",
        number: 2000,
        amount: "$9,800",
        due: "10/31/2000"
    },
    {
        name: "Ocean Ave",
        number: 1999,
        amount: "$20,350",
        due: "8/05/1991"
    },
    {
        name: "West Hade",
        number: 2003,
        amount: "$800",
        due: "1/14/2008"
    },
    {
        name: "Candace Valley",
        number: 1989,
        amount: "$5,400",
        due: "3/19/2001"
    }
];

export function getInvoices() {
    return invoices;
}


export function getInvoice(number){
    console.log(number)
    return invoices.find(
        invoice => invoice.number === number
    );
}

export function deleteInvoice(number) {
    invoices = invoices.filter(
        invoice => invoice.number !== number
    );
}
