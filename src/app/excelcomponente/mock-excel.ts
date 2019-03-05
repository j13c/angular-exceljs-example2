import { ExcelCar } from './excel.car';

export const DATA: ExcelCar[] = [
  { year: 2007, month: '1',  make: "Volkswagen", model: "Volkswagen Golf",   quiantity: "21", pct: "12.2"},
  { year: 2005, month: '1',  make: "Toyota",     model: "Toyota Rav4",       quiantity: "21", pct: "12.2"},
  { year: 2005, month: '3',  make: "Toyota",     model: "Toyota Rav4",       quiantity: "21", pct: "12.2"},
  { year: 2005, month: '3',  make: "Toyota",     model: "Toyota Avensis",    quiantity: "21", pct: "12.2"},
  { year: 2007, month: '3',  make: "Volkswagen", model: "Volkswagen Golf",   quiantity: "21", pct: "12.2"},
  { year: 2007, month: '1',  make: "Toyota",     model: "Toyota Avensis",    quiantity: "21", pct: "12.2"},
  { year: 2003, month: '1',  make: "Volkswagen", model: "Volkswagen Passat", quiantity: "21", pct: "12.2"},
  { year: 2003, month: '12', make: "Toyota",     model: "Toyota Corolla",    quiantity: "21", pct: "12.2"},
  { year: 2003, month: '12', make: "Volkswagen", model: "Volkswagen Passat", quiantity: "21", pct: "12.2"},
  { year: 2007, month: '1',  make: "Toyota",     model: "Toyota Corolla",    quiantity: "21", pct: "12.2"}
];

export const TITTLE = 'Informe de venta de automóviles' ; 
export const HEADER = [ "Year" , "Month" , "Make" , "Model" , "Quantity" , "Pct" ];      
