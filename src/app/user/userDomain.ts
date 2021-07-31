
export class UserDomain {
  id?: string;
  userId?: string;
  name?: string;
  rollNo?: string;
  grade?: string;
  salary?: number;
  age?: number;
  address?: Address;
  phoneNos?: string[];
}

class Address {
  id?: string;
  street?: string;
  houseNo?: string;
  city?: string;
  state?: string;
  country?: string;
  latLong?: string;
}