interface TravellerDetails {
  paxId: string;
  name: string;
  email: string | null;
  phone: string | null;
  designation: string;
}

interface TripDetails {
  cartNumber: number;
  tripId: string | null;
  bookerName: string;
  bookerEmail: string | null;
  'product-type': string; 
  billingEntity: string;
  departureCity: string;
  arrivalCity: string;
  travellerDetails: TravellerDetails[];
}

interface SegregatedData {
  [key: string]: TripDetails[];
}