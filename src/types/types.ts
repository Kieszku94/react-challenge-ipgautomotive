export type Condition = {
  code: Number;
  text: string;
  icon: string;
};

export type Location = {
  name: String;
};

export type Current = {
  condition: Condition;
  temp_c: Number;
  humidity: Number;
  precip_mm: Number;
};

export type CityType = {
  location: Location;
  current: Current;
};
