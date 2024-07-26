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

export const TripCalendarDataMaker = (tripDetails: TripDetails[]): SegregatedData => {
  const segregatedData: SegregatedData = {
    flights: [],
    hotels: [],
    bus: [],
    train: [],
    car: [],
    visa: [],
    insurance: [],
  };

  tripDetails?.forEach((trip) => {
    const productType = trip['product-type'] as keyof SegregatedData;
    if (segregatedData[productType]) {
      segregatedData[productType].push(trip);
    }
  });
  const filteredSegregatedData: SegregatedData = Object.keys(segregatedData).reduce((acc, key) => {
    if (segregatedData[key as keyof SegregatedData].length > 0) {
      acc[key] = segregatedData[key as keyof SegregatedData];
    }
    return acc;
  }, {} as SegregatedData);

  return filteredSegregatedData;
};
