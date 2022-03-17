let apt1 = {
    bedrooms: 4 ,
    sqft: 50,
    bathrooms: 3,
    windows: 0,
    rent: 4500,
    unit: '1A',
    tenants: [],
}

let apt2 = {
    bedrooms: 1,
    sqft: 500,
    bathrooms: 3,
    windows: 2,
    rent: 1500,
    unit: '1B',
    tenants: []
}

let apt3 = {
    bedrooms: 2,
    sqft: 53,
    bathrooms: 3,
    windows: 2,
    rent: 2400,
    unit: '1C',
    tenants: [],
}

let apt4 = {
    bedrooms: 0,
    sqft: 11,
    bathrooms: 0,
    windows: 0,
    rent: 900,
    unit: '1D',
    tenants: [],
}

let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 30,
    pet: 'Jpeg'
}

let tenant2 = {
    name: 'Jane Doe',
    creditScore: 800,
    salary: 22000,
    age: 33,
}

let building = {
    streetAddress: '74 N 7th Street, Brooklyn NY 11249',
    laundry: false,
    allowsPets: false,
    lease: function(apt, tenant) {
        if (apt.tenants.length === apt.bedrooms) {
            return `${apt.unit} is already full!`}
        if (this.allowsPets === false && tenant.pet) {
            return `${apt.unit} is available, but you must give ${tenant.pet} up for adoption.`
        }
        apt.tenants.push(tenant)
        console.log(tenant.name, 'has rented out', apt.unit)
    },
    apartments : [apt1, apt2, apt3]
}

// apt1.lease(tenant1)