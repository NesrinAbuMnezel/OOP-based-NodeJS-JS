class Hotel {
    address;
    numberOfRooms;
    #minFloor;
    #maxFloor;
    rooms = [];
    constructor(address, numberOfRooms, minFloor, maxFloor, rooms) {
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.#minFloor = minFloor;
        this.#maxFloor = maxFloor;
        this.rooms = rooms;
    }
    listOfRooms() {
        this.rooms.forEach(i => { console.log(i); });
    }
    printAdvertisement() {
        console.log(`address is  ${this.address} , number of rooms = ${this.numberOfRooms} , min floor = ${this.#minFloor} , 
                     max floor  ${this.#maxFloor} , list of rooms (${this.rooms.length}) is :`);
        this.listOfRooms();
    }

    listBookedRooms() {
        console.log('list of booked rooms: ');
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].isBooked() == true) {
                this.rooms[i].printRoom();
            }
        }
    }
}
class Room {
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum, roomNum, price, isBooked) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }
    setFloorNum(f) {
        this.floorNum = f;
    }
    getFloorNum() {
        return this.floorNum;
    }
    setRoomNum(r) {
        this.roomNum = r;
    }
    getRoomNum() {
        return this.roomNum;
    }
    setPrice(p) {
        this.price = p;
    }
    getPrice() {
        return this.price;
    }
    setIsBooked(i) {
        this.#isBooked = i;
    }
    getIsBooked() {
        return this.#isBooked;
    }
    printRoom() {
        console.log(`floor number = ${this.floorNum} , room number = ${this.roomNum} , price = ${this.price} , 
   the room is bookesd ? ${this.#isBooked} `);
    }
    book() {
        if (!this.#isBooked) {
            this.#isBooked = true;
        } else {
            console.log('room is already booked');
        }
    }
    isBooked() {
        if (this.#isBooked == true) {
            return true;
        } else {
            return false;
        }
    }
}
let obj1 = new Room(1, '111', 1111, false);
let obj2 = new Room(2, '222', 2222, true);
let obj3 = new Room(3, '333', 3333, true);
let obj4 = new Room(4, '444', 4444, false);
let obj5 = new Room(5, '555', 5555, true);
let arr = []
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
arr.push(obj4);
arr.push(obj5);
let h1 = new Hotel('jenin', 99, 1, 99, arr);
h1.printAdvertisement();
h1.listBookedRooms();
class RoomWithView extends Room {
    view;
    numberOfBeds;
    constructor(floorNum, roomNum, price, isBooked, view, numberOfBeds) {
        super(floorNum, roomNum, price, isBooked);
        this.view = view;
        this.numberOfBeds = numberOfBeds;
    }
    setView(v) {
        this.view = v;
    }
    getView() {
        return this.view;
    }
    setNumberOfBeds(n) {
        this.numberOfBeds = n;
    }
    getNumberOfBeds() {
        return this.numberOfBeds;
    }
    printRoom() {
        console.log(`number of floors = ${this.floorNum} , number of rooms = ${this.roomNum} , price = ${this.price} , 
    the room is bookesd ? ${this.getIsBooked()} , the view is ${this.view} and number of beds = ${this.numberOfBeds} `);
    }
}
class SleepingRoom extends Room {
    personCapacity;
    constructor(floorNum, roomNum, price, isBooked, personCapacity) {
        super(floorNum, roomNum, price, isBooked);
        this.personCapacity = personCapacity;
    }
    setPersonCapacity(p) {
        this.personCapacity = p;
    }
    getPersonCapacity() {
        return this.personCapacity;
    }
    printRoom() {
        console.log(`number of floors = ${this.floorNum} , number of rooms = ${this.roomNum} , price = ${this.price} , 
    the room is bookesd ? ${this.getIsBooked()} , person capacity = ${this.personCapacity} `);
    }
}
/*
let r1 = new Room(2,'22',122,false);
r1.setFloorNum(4);
r1.setRoomNum('133');
r1.setPrice(1234);
r1.setIsBooked(false);
console.log(r1.getFloorNum());
console.log(r1.getRoomNum());
console.log(r1.getPrice());
console.log(r1.getIsBooked());
r1.printRoom();
r1.book();
r1.printRoom();
r1.book();
r1.printRoom();
console.log(r1.isBooked());
*/
/*
let r2 = new RoomWithView(2,'22',122,false,'beach',5);
console.log(r2.isBooked());
r2.setIsBooked(true);
console.log(r2.isBooked());
r2.book();
r2.setNumberOfBeds(2)
console.log(r2.getNumberOfBeds());
r2.printRoom();
*/
/*
let r3 = new SleepingRoom(2,'22',122,false,50);
console.log(r3.getPrice());
r3.book();
r3.printRoom();
console.log(r3.isBooked());
*/


