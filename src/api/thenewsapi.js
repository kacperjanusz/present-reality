import axios from 'axios';
import _ from 'lodash';

const baseUrl = 'https://api.thenewsapi.com/v1/news/';
const api_token = 'qAyU2H8D3g2AwVZzjhHZWd7mHY79vasv4omW57ur';
const language = 'pl';
const categories = 'general';

export const getRealNews = async () => {
  const page = _.random(10, false);
  const {
    data: { data },
  } = await axios.get(baseUrl + 'top', {
    params: {
      api_token,
      language,
      categories,
      page,
    },
  });

  return data;
};

export const getFakeNews = async () => {
  const page = _.random(10, false);

  const {
    data: { data },
  } = await axios.get(baseUrl + `all`, {
    params: {
      api_token,
      language,
      domains: 'aszdziennik.pl',
      page,
    },
  });

  return data;
};

export const mockData = {
  real: [
    {
      uuid: '7bad7f22-26a8-413f-8a8e-8aa06a2136e9',
      title: 'Kurski sprowadził do Polski Andrea Bocellego. Wiemy, ile go to kosztowało',
      description:
        'Jacek Kurski już niebawem planuje zapewnić swoim widzom wyjątkową atrakcję. Podczas Wielkanocy w TVP zostanie pokazany koncert Andrea Bocellego. Tym razem ...',
      keywords: '',
      snippet: '',
      url: 'https://natemat.pl/345631,kurski-sprowadzil-do-polski-andrea-bocellego-wiemy-ile-go-to-kosztowalo',
      image_url: 'https://cdn.natemat.pl/47725e68203fa7f4825038317988a314,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-26T17:44:46.000000Z',
      source: 'natemat.pl',
      categories: ['general'],
      relevance_score: null,
      locale: 'pl',
    },
    {
      uuid: '27f9dfa4-ae0a-41ed-9d10-1b8c7431717f',
      title: 'Morawiecki o prywatnych szpitalach. Polacy oburzeni. Szpitale odpowiadają',
      description:
        'Słowa premiera Morawieckiego o prywatnych szpitalach wywołały oburzenie w całej Polsce. Prywatne placówki, które ratują pacjentów z COVID-19, nie rozumi...',
      keywords: '',
      snippet: '',
      url: 'https://natemat.pl/345523,morawiecki-o-prywatnych-szpitalach-polacy-oburzeni-szpitale-odpowiadaja',
      image_url: 'https://cdn.natemat.pl/56904196bf76d074c85916af9052d62f,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-26T17:36:21.000000Z',
      source: 'natemat.pl',
      categories: ['general'],
      relevance_score: null,
      locale: 'pl',
    },
    {
      uuid: '1c3b37d3-e0f6-4176-8598-21e07fda3321',
      title: '"Narodowa" fabryka maseczek wciąż nie działa. Odpowiedź APR na interpelację',
      description: '',
      keywords: '',
      snippet: '',
      url: 'https://natemat.pl/345607,narodowa-fabryka-maseczek-wciaz-nie-dziala-odpowiedz-apr-na-interpelacje',
      image_url: 'https://cdn.natemat.pl/f446116987f6486809a6d42d6ba631cb,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-26T16:59:52.000000Z',
      source: 'natemat.pl',
      categories: ['general'],
      relevance_score: null,
      locale: 'pl',
    },
    {
      uuid: '9d8b0918-5639-4017-973b-83b06f1ff95e',
      title: 'Kontenerowiec Ever Given narysował w Zatoce Sueskiej... penisa [FILM]',
      description:
        'Kontenerowiec Ever Given, który utknął na mieliźnie w Kanale Sueskim i zablokował transport między Azją a Europą, wcześniej krążył po Zatoce Sueskie...',
      keywords: '',
      snippet: '',
      url: 'https://natemat.pl/345609,kontenerowiec-ever-given-narysowal-w-zatoce-sueskiej-penisa-film',
      image_url: 'https://cdn.natemat.pl/606a4810fbd7bcaade61b49e9f98c107,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-26T16:24:37.000000Z',
      source: 'natemat.pl',
      categories: ['general'],
      relevance_score: null,
      locale: 'pl',
    },
    {
      uuid: 'b0e31d5b-d5e3-4cee-b4f8-a951014a682c',
      title: 'Pełnia księżyca 28 marca 2021: kiedy oglądać wiosenny Robaczy Księżyc?',
      description:
        'Pełnia Księżyca 28 marca: gdzie i kiedy oglądać Robaczany Księżyc? Zmiana czasu 28 marca: w którą stronę przestawiamy zegarki? Różne nazwy pełni K...',
      keywords: '',
      snippet: '',
      url: 'https://natemat.pl/345623,pelnia-ksiezyca-28-marca-2021-kiedy-ogladac-wiosenny-robaczy-ksiezyc',
      image_url: 'https://cdn.natemat.pl/bf178f47d7a2e8b9041e18ed070b32f1,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-26T16:06:15.000000Z',
      source: 'natemat.pl',
      categories: ['general'],
      relevance_score: null,
      locale: 'pl',
    },
  ],
  fake: [
    {
      uuid: '85bf7def-a6e0-4570-b296-08dca1e9801a',
      title: 'Karczewski ujawnił, dlaczego mamy rekord zachorowań: bo rząd bał się hejtu',
      description:
        'OK, może i mamy 30 tysięcy zachorowań i 500 ludzi umiera dziennie, ale przynajmniej Mateuszowi Morawieckiemu nie jest przykro. Stansiław Karczewski w TVN24 ...',
      keywords: '',
      snippet: '',
      url: 'https://aszdziennik.pl/132601,karczewski-ujawnil-dlaczego-mamy-rekord-zachorowan-bo-rzad-bal-sie-hejtu',
      image_url: 'https://cdn.aszdziennik.pl/e22fc62a37afcde799cf92343f4af7fd,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-26T09:01:53.000000Z',
      source: 'aszdziennik.pl',
      categories: ['entertainment'],
      relevance_score: null,
    },
    {
      uuid: 'b8e76a7a-7698-4ae5-adfe-af634c7908a5',
      title: 'Apostazja będzie trudniejsza: trzeba udowodnić, że Bóg nie istnieje',
      description:
        'Konferencja Episkopatu Polski ogłosiła decyzję o skomplikowaniu apostazji. Duchowni uważają, że proces odejścia z Kościoła był do tej pory zbyt prosty...',
      keywords: '',
      snippet: '',
      url: 'https://aszdziennik.pl/132591,apostazja-bedzie-trudniejsza-trzeba-udowodnic-ze-bog-nie-istnieje',
      image_url: 'https://cdn.aszdziennik.pl/ef2e74bf83b14605192cacedcf7cdccd,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-25T16:18:10.000000Z',
      source: 'aszdziennik.pl',
      categories: ['entertainment'],
      relevance_score: null,
    },
    {
      uuid: '0c990ea5-f076-49f3-a563-80f3a89f5b30',
      title: 'Ksiądz wyjaśnia, czemu seks niehetero jest zły. Bo może być zwarcie',
      description:
        'Dlaczego Kościół katolicki tak zaciekle sprzeciwia się związkom jednopłciowym? Bynajmniej nie dlatego, że chce kontrolować ludzką seksualność albo ż...',
      keywords: '',
      snippet: '',
      url: 'https://aszdziennik.pl/132589,ksiadz-wyjasnia-czemu-seks-niehetero-jest-zly-bo-moze-byc-zwarcie',
      image_url: 'https://cdn.aszdziennik.pl/1c35a9e223ad4d37e871e4b1a75d0c41,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-25T14:47:16.000000Z',
      source: 'aszdziennik.pl',
      categories: ['entertainment'],
      relevance_score: null,
    },
    {
      uuid: '3801fc23-8544-41db-bf9c-077a6ef835eb',
      title: 'PILNE: W obliczu szczytu zakażeń Pan nakazał zbudować Morawieckiemu arkę',
      description:
        'Trzecia fala pandemii COVID-19 zalewa Polskę, a krzyk chorych i konających wznosi się aż pod niebiosa. Czy nasz naród przetrwa śmiercionośną plagę? Ok...',
      keywords: '',
      snippet: '',
      url: 'https://aszdziennik.pl/132583,pilne-w-obliczu-szczytu-zakazen-pan-nakazal-zbudowac-morawieckiemu-arke',
      image_url: 'https://cdn.aszdziennik.pl/2fa245f50521baf3ca0d710efe85844b,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-25T11:46:03.000000Z',
      source: 'aszdziennik.pl',
      categories: ['entertainment'],
      relevance_score: null,
    },
    {
      uuid: '16f12658-06fc-4f4e-91fd-87ecdb47a50e',
      title: 'Bąkiewicz ma rację! Oto dowód na dechrystianizację Polski',
      description:
        'Czy zauważyliście, jak dziwny ma przebieg pandemia w Polsce? Że szczyty zachorowań na Covid wypadają nieprzypadkowo? Nie umknęło to bystremu umysłowi Ro...',
      keywords: '',
      snippet: '',
      url: 'https://aszdziennik.pl/132585,bakiewicz-ma-racje-oto-dowod-na-dechrystianizacje-polski',
      image_url: 'https://cdn.aszdziennik.pl/d1a46b1c3749357ebd4f27734817dd63,1200,0,0,0.jpg',
      language: 'pl',
      published_at: '2021-03-25T11:30:05.000000Z',
      source: 'aszdziennik.pl',
      categories: ['entertainment'],
      relevance_score: null,
    },
  ],
};
