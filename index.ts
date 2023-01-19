import express from 'express';
import { PrismaClient } from '@prisma/client';

const app: express.Application = express();

const prisma: PrismaClient = new PrismaClient();

const portti: number = Number(process.env.PORT) || 3001;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface IKunta {
  kunta: string;
  asukkaatYhteensa: number;
  asukkaatMiehet: number;
  asukkaatNaiset: number;
}

let kunnat: IKunta[];
const getKuntienLukumaara = (kunnat: IKunta[]) => {
  return kunnat.length;
};

const getAsukkaidenKeskiarvo = (kunnat: IKunta[]) => {
  const asukkaitaYhteensa = kunnat.reduce((a, b) => (a + b.asukkaatYhteensa), 0);
  const keskiarvo = asukkaitaYhteensa / getKuntienLukumaara(kunnat);
  if (keskiarvo) {
    return keskiarvo.toLocaleString("fi", { maximumFractionDigits: 2, minimumFractionDigits: 0 });
  } else {
    return 0;
  }
};

const getNaistenOsuus = (kunnat: IKunta[]) => {
  const naisiaYhteensa = kunnat.reduce((a, b) => (a + b.asukkaatNaiset), 0);
  const asukkaitaYhteensa = kunnat.reduce((a, b) => (a + b.asukkaatYhteensa), 0);
  const naisiaVaestosta = (naisiaYhteensa / asukkaitaYhteensa) * 100;
  if (naisiaVaestosta) {
    return naisiaVaestosta.toLocaleString("fi", { maximumFractionDigits: 2, minimumFractionDigits: 0 });
  } else {
    return 0;
  }
}

app.get("/", async (req: express.Request, res: express.Response) => {
  kunnat = await prisma.kunta.findMany();

  const kuntienMaara = getKuntienLukumaara(kunnat);
  const asukkaidenKeskiarvo = getAsukkaidenKeskiarvo(kunnat);
  const naistenOsuus = getNaistenOsuus(kunnat);

  res.render("index",
    { kunnat: kunnat, kuntia: kuntienMaara, asukkaidenKeskiarvo: asukkaidenKeskiarvo, naistenOsuus: naistenOsuus });
});

app.post("/", async (req: express.Request, res: express.Response) => {

  const sortBy: string = req.body.rajausteksti;
  kunnat = await prisma.kunta.findMany({
    where: {
      kunta: {
        startsWith: sortBy
      }
    }
  });

  const kuntienMaara = getKuntienLukumaara(kunnat);
  const asukkaidenKeskiarvo = getAsukkaidenKeskiarvo(kunnat);
  const naistenOsuus = getNaistenOsuus(kunnat);

  res.render("index",
    { kunnat: kunnat, kuntia: kuntienMaara, asukkaidenKeskiarvo: asukkaidenKeskiarvo, naistenOsuus: naistenOsuus });
});

app.listen(portti, () => {

  console.log(`Palvelin käynnistyi osoitteeseen http://localhost:${portti}`);

});