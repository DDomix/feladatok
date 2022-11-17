import { Get, Controller, Render } from '@nestjs/common';

const hónapok = [
  'Január',
  'Február',
  'Március',
  'Április',
  'Május',
  'Június',
  'Július',
  'Augusztus',
  'Szeptember',
  'Október',
  'November',
  'December',
  'Nincs ilyen hónap',
];

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    const randomszam = Math.floor(Math.random() * 12) + 1;
    const veletlenszam1 = Math.floor(Math.random() * 100) + 1;
    const veletlenszam2 = Math.floor(Math.random() * 100) + 1;
    return {
      message: 'Hello world!',
      honap: hónapok[randomszam - 1],
      szam1: veletlenszam1,
      szam2: veletlenszam2,
      egyenlo: 'A két szám egyenlő',
    };
  }
}
