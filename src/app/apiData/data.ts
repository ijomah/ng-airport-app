import { IFlight } from "../common/data.model";

export const flightDetailsLocalStorage: IFlight[] = JSON.parse(localStorage.getItem('openSkyApi'));