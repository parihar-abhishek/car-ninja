import { FilterProps } from "@/types"

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters

  const headers = {
    "X-RapidAPI-Key": "66347cfed6msh9d6905f90870659p1ac59djsn648adc4d2e61",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  )

  const result = await response.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
