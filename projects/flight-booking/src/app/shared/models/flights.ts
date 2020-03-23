export interface Flights {
    flightNo: string;
    origin: string;
    destination: string;
    time: ArrDepTime;
    date: string;
    fare: ArrFare;
};

interface ArrDepTime {
    depart: string;
    arrive: string;
};

interface ArrFare {
    availableSeats: number,
    travelClass: string,
    amount: number
}