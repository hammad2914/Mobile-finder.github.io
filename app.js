
var a = {
    mobiles: {
        samsung: {
            a30: {
                name: "a30",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 2000,
            },
            note10: {
                name: "note10",
                ram: "6gb",
                rom: "128gb",
                camera: "50px",
                price: 4000,
            },
            s10: {
                name: "s10",
                ram: "3gb",
                rom: "128gb",
                camera: "10px",
                price: 5000,
            },
        },
        iphone: {
            iphone4: {
                name: "iphone4",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            iphone4s: {
                name: "iphone4s",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 20000,
            },
            iphone5: {
                name: "iphone5",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 30000,
            },
            iphone6: {
                name: "iphone6",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 30000,
            },
        },
        xiomi: {
            redminote10: {
                name: "redminote10",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redminote11: {
                name: "redminote11",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redmi10: {
                name: "redmi10",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
            redmi10pro: {
                name: "redmi10pro",
                ram: "4gb",
                rom: "64gb",
                camera: "50px",
                price: 10000,
            },
        },
    },
};

var brand = document.getElementById("brand");
var model = document.getElementById("model");
var details = document.getElementById("child2")


function rendermodels() {
    model.innerHTML = ""
    let leng = Object.values(a.mobiles[brand.value])
    let models = Object.keys(a.mobiles[brand.value])

    for (let i = 0; i < leng.length; i++) {
        model.innerHTML += `<option>${models[i]}</option>`
    }
}
rendermodels()


function searchVal() {
    let phone =a['mobiles'][brand.value][model.value];
    console.log(phone);
    details.innerHTML = `<h2>${phone.name}</h2>
                         <p>Model Name: <span>${phone.name}</span></p>
                         <p>Ram: <span>${phone.ram}</span></p>
                         <p>Rom: <span>${phone.rom}</span></p>
                         <p>Camera: <span>${phone.camera}</span></p>
                         <p>Price: <span>${phone.price}</span></p>`
    details.style.display='block'
}








