const { Location } = require('../models');

const locationdata = [
 {
   "trip_id": 1,
   "destination": "London, UK",
   "traveler_age": 35,
   "traveler_gender": "Male",
   "traveler_nationality": "American",
   "accommodation_type": "Hotel",
   "accommodation_cost": "1200",
   "transportation_type": "Flight",
   "transportation_cost": "600"
 },
 {
   "trip_id": 2,
   "destination": "Phuket, Thailand",
   "traveler_age": 28,
   "traveler_gender": "Female",
   "traveler_nationality": "Canadian",
   "accommodation_type": "Resort",
   "accommodation_cost": "800",
   "transportation_type": "Flight",
   "transportation_cost": "500"
 },
 {
   "trip_id": 3,
   "destination": "Bali, Indonesia",
   "traveler_age": 45,
   "traveler_gender": "Male",
   "traveler_nationality": "Korean",
   "accommodation_type": "Villa",
   "accommodation_cost": "1000",
   "transportation_type": "Flight",
   "transportation_cost": "700"
 },
 {
   "trip_id": 4,
   "destination": "New York, USA",
   "traveler_age": 29,
   "traveler_gender": "Female",
   "traveler_nationality": "British",
   "accommodation_type": "Hotel",
   "accommodation_cost": "2000",
   "transportation_type": "Flight",
   "transportation_cost": "1000"
 },
 {
   "trip_id": 5,
   "destination": "Tokyo, Japan",
   "traveler_age": 26,
   "traveler_gender": "Female",
   "traveler_nationality": "Vietnamese",
   "accommodation_type": "Airbnb",
   "accommodation_cost": "700",
   "transportation_type": "Train",
   "transportation_cost": "200"
 },
 {
   "trip_id": 6,
   "destination": "Paris, France",
   "traveler_age": 42,
   "traveler_gender": "Male",
   "traveler_nationality": "American",
   "accommodation_type": "Hotel",
   "accommodation_cost": "1500",
   "transportation_type": "Flight",
   "transportation_cost": "800"
 },
 {
   "trip_id": 7,
   "destination": "Sydney, Australia",
   "traveler_age": 33,
   "traveler_gender": "Female",
   "traveler_nationality": "Australian",
   "accommodation_type": "Hostel",
   "accommodation_cost": "500",
   "transportation_type": "Flight",
   "transportation_cost": "1200"
 },
 {
   "trip_id": 8,
   "destination": "Rio de Janeiro, Brazil",
   "traveler_age": 25,
   "traveler_gender": "Male",
   "traveler_nationality": "Brazilian",
   "accommodation_type": "Airbnb",
   "accommodation_cost": "900",
   "transportation_type": "Flight",
   "transportation_cost": "600"
 },
 {
   "trip_id": 9,
   "destination": "Amsterdam, Netherlands",
   "traveler_age": 31,
   "traveler_gender": "Female",
   "traveler_nationality": "Dutch",
   "accommodation_type": "Hotel",
   "accommodation_cost": "1200",
   "transportation_type": "Train",
   "transportation_cost": "200"
 },
 {
   "trip_id": 10,
   "destination": "Dubai, United Arab Emirates",
   "traveler_age": 39,
   "traveler_gender": "Male",
   "traveler_nationality": "Emirati",
   "accommodation_type": "Resort",
   "accommodation_cost": "2500",
   "transportation_type": "Flight",
   "transportation_cost": "800"
 },
 {
   "trip_id": 11,
   "destination": "Cancun, Mexico",
   "traveler_age": 27,
   "traveler_gender": "Female",
   "traveler_nationality": "Mexican",
   "accommodation_type": "Hotel",
   "accommodation_cost": "1000",
   "transportation_type": "Flight",
   "transportation_cost": "500"
 },
 {
   "trip_id": 12,
   "destination": "Barcelona, Spain",
   "traveler_age": 36,
   "traveler_gender": "Male",
   "traveler_nationality": "Spanish",
   "accommodation_type": "Airbnb",
   "accommodation_cost": "800",
   "transportation_type": "Train",
   "transportation_cost": "100"
 },
 {
   "trip_id": 13,
   "destination": "Honolulu, Hawaii",
   "traveler_age": 29,
   "traveler_gender": "Female",
   "traveler_nationality": "Chinese",
   "accommodation_type": "Resort",
   "accommodation_cost": "3000",
   "transportation_type": "Flight",
   "transportation_cost": "1200"
 },
 {
   "trip_id": 14,
   "destination": "Berlin, Germany",
   "traveler_age": 48,
   "traveler_gender": "Male",
   "traveler_nationality": "German",
   "accommodation_type": "Hotel",
   "accommodation_cost": "1400",
   "transportation_type": "Flight",
   "transportation_cost": "700"
 },
 {
   "trip_id": 15,
   "destination": "Marrakech, Morocco",
   "traveler_age": 26,
   "traveler_gender": "Female",
   "traveler_nationality": "Moroccan",
   "accommodation_type": "Riad",
   "accommodation_cost": "600",
   "transportation_type": "Flight",
   "transportation_cost": "400"
 },
 {
   "trip_id": 16,
   "destination": "Edinburgh, Scotland",
   "traveler_age": 32,
   "traveler_gender": "Male",
   "traveler_nationality": "Scottish",
   "accommodation_type": "Hotel",
   "accommodation_cost": "900",
   "transportation_type": "Train",
   "transportation_cost": "150"
 },
 {
   "trip_id": 17,
   "destination": "Paris",
   "traveler_age": 30,
   "traveler_gender": "Female",
   "traveler_nationality": "American",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$900 ",
   "transportation_type": "Plane",
   "transportation_cost": "$400 "
 },
 {
   "trip_id": 18,
   "destination": "Bali",
   "traveler_age": 28,
   "traveler_gender": "Male",
   "traveler_nationality": "Chinese",
   "accommodation_type": "Resort",
   "accommodation_cost": "$1,500 ",
   "transportation_type": "Plane",
   "transportation_cost": "$700 "
 },
 {
   "trip_id": 19,
   "destination": "London",
   "traveler_age": 35,
   "traveler_gender": "Female",
   "traveler_nationality": "British",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$1,200 ",
   "transportation_type": "Train",
   "transportation_cost": "$150 "
 },
 {
   "trip_id": 20,
   "destination": "Tokyo",
   "traveler_age": 45,
   "traveler_gender": "Male",
   "traveler_nationality": "Japanese",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$1,200 ",
   "transportation_type": "Plane",
   "transportation_cost": "$800 "
 },
 {
   "trip_id": 21,
   "destination": "New York",
   "traveler_age": 27,
   "traveler_gender": "Female",
   "traveler_nationality": "American",
   "accommodation_type": "Airbnb",
   "accommodation_cost": "$600 ",
   "transportation_type": "Bus",
   "transportation_cost": "$100 "
 },
 {
   "trip_id": 22,
   "destination": "Sydney",
   "traveler_age": 32,
   "traveler_gender": "Male",
   "traveler_nationality": "Australian",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$1,000 ",
   "transportation_type": "Plane",
   "transportation_cost": "$600 "
 },
 {
   "trip_id": 23,
   "destination": "Rome",
   "traveler_age": 29,
   "traveler_gender": "Female",
   "traveler_nationality": "Italian",
   "accommodation_type": "Airbnb",
   "accommodation_cost": "$700 ",
   "transportation_type": "Train",
   "transportation_cost": "$80 "
 },
 {
   "trip_id": 24,
   "destination": "Bangkok",
   "traveler_age": 40,
   "traveler_gender": "Male",
   "traveler_nationality": "Indian",
   "accommodation_type": "Hostel",
   "accommodation_cost": "$400 ",
   "transportation_type": "Plane",
   "transportation_cost": "$500 "
 },
 {
   "trip_id": 25,
   "destination": "Paris",
   "traveler_age": 24,
   "traveler_gender": "Female",
   "traveler_nationality": "Vietnamese",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$1,400 ",
   "transportation_type": "Train",
   "transportation_cost": "$100 "
 },
 {
   "trip_id": 26,
   "destination": "Hawaii",
   "traveler_age": 34,
   "traveler_gender": "Male",
   "traveler_nationality": "Korean",
   "accommodation_type": "Resort",
   "accommodation_cost": "$2,000 ",
   "transportation_type": "Plane",
   "transportation_cost": "$800 "
 },
 {
   "trip_id": 27,
   "destination": "Barcelona",
   "traveler_age": 31,
   "traveler_gender": "Female",
   "traveler_nationality": "Spanish",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$1,100 ",
   "transportation_type": "Train",
   "transportation_cost": "$150 "
 },
 {
   "trip_id": 28,
   "destination": "Japan",
   "traveler_age": 30,
   "traveler_gender": "Female",
   "traveler_nationality": "American",
   "accommodation_type": "Hotel",
   "accommodation_cost": "$800 ",
   "transportation_type": "Plane",
   "transportation_cost": "$500 "
 },
 {
   "trip_id": 29,
   "destination": "Thailand",
   "traveler_age": 45,
   "traveler_gender": "Male",
   "traveler_nationality": "Canadian",
   "accommodation_type": "Hostel",
   "accommodation_cost": "$200 ",
   "transportation_type": "Train",
   "transportation_cost": "$150 "
 },
 {
   "trip_id": 30,
   "destination": "France",
   "traveler_age": 25,
   "traveler_gender": "Male",
   "traveler_nationality": "Korean",
   "accommodation_type": "Airbnb",
   "accommodation_cost": "$600 ",
   "transportation_type": "Car rental",
   "transportation_cost": "$300 "
 }
]

const seedLocationData = () => Location.bulkCreate(locationdata);

module.exports = seedLocationData;