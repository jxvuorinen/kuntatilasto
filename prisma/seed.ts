import { PrismaClient } from '@prisma/client'
const prisma : PrismaClient = new PrismaClient()

const kunnat = [
    {
        "kunta": "Akaa",
        "asukkaatYhteensa": 17057,
        "asukkaatMiehet": 8495,
        "asukkaatNaiset": 8562
    },
    {
        "kunta": "Alajärvi",
        "asukkaatYhteensa": 9969,
        "asukkaatMiehet": 5025,
        "asukkaatNaiset": 4944
    },
    {
        "kunta": "Alavieska",
        "asukkaatYhteensa": 2661,
        "asukkaatMiehet": 1388,
        "asukkaatNaiset": 1273
    },
    {
        "kunta": "Alavus",
        "asukkaatYhteensa": 12005,
        "asukkaatMiehet": 6054,
        "asukkaatNaiset": 5951
    },
    {
        "kunta": "Asikkala",
        "asukkaatYhteensa": 8312,
        "asukkaatMiehet": 4150,
        "asukkaatNaiset": 4162
    },
    {
        "kunta": "Askola",
        "asukkaatYhteensa": 5080,
        "asukkaatMiehet": 2549,
        "asukkaatNaiset": 2531
    },
    {
        "kunta": "Aura",
        "asukkaatYhteensa": 3986,
        "asukkaatMiehet": 1940,
        "asukkaatNaiset": 2046
    },
    {
        "kunta": "Brändö",
        "asukkaatYhteensa": 464,
        "asukkaatMiehet": 254,
        "asukkaatNaiset": 210
    },
    {
        "kunta": "Eckerö",
        "asukkaatYhteensa": 943,
        "asukkaatMiehet": 495,
        "asukkaatNaiset": 448
    },
    {
        "kunta": "Enonkoski",
        "asukkaatYhteensa": 1455,
        "asukkaatMiehet": 749,
        "asukkaatNaiset": 706
    },
    {
        "kunta": "Enontekiö",
        "asukkaatYhteensa": 1879,
        "asukkaatMiehet": 994,
        "asukkaatNaiset": 885
    },
    {
        "kunta": "Espoo",
        "asukkaatYhteensa": 272384,
        "asukkaatMiehet": 134942,
        "asukkaatNaiset": 137442
    },
    {
        "kunta": "Eura",
        "asukkaatYhteensa": 12114,
        "asukkaatMiehet": 6080,
        "asukkaatNaiset": 6034
    },
    {
        "kunta": "Eurajoki",
        "asukkaatYhteensa": 6008,
        "asukkaatMiehet": 3048,
        "asukkaatNaiset": 2960
    },
    {
        "kunta": "Evijärvi",
        "asukkaatYhteensa": 2544,
        "asukkaatMiehet": 1316,
        "asukkaatNaiset": 1228
    },
    {
        "kunta": "Finström",
        "asukkaatYhteensa": 2521,
        "asukkaatMiehet": 1251,
        "asukkaatNaiset": 1270
    },
    {
        "kunta": "Forssa",
        "asukkaatYhteensa": 17378,
        "asukkaatMiehet": 8446,
        "asukkaatNaiset": 8932
    },
    {
        "kunta": "Föglö",
        "asukkaatYhteensa": 572,
        "asukkaatMiehet": 299,
        "asukkaatNaiset": 273
    },
    {
        "kunta": "Geta",
        "asukkaatYhteensa": 506,
        "asukkaatMiehet": 256,
        "asukkaatNaiset": 250
    },
    {
        "kunta": "Haapajärvi",
        "asukkaatYhteensa": 7391,
        "asukkaatMiehet": 3775,
        "asukkaatNaiset": 3616
    },
    {
        "kunta": "Haapavesi",
        "asukkaatYhteensa": 7111,
        "asukkaatMiehet": 3631,
        "asukkaatNaiset": 3480
    },
    {
        "kunta": "Hailuoto",
        "asukkaatYhteensa": 1016,
        "asukkaatMiehet": 520,
        "asukkaatNaiset": 496
    },
    {
        "kunta": "Halsua",
        "asukkaatYhteensa": 1223,
        "asukkaatMiehet": 630,
        "asukkaatNaiset": 593
    },
    {
        "kunta": "Hamina",
        "asukkaatYhteensa": 20766,
        "asukkaatMiehet": 10307,
        "asukkaatNaiset": 10459
    },
    {
        "kunta": "Hammarland",
        "asukkaatYhteensa": 1510,
        "asukkaatMiehet": 774,
        "asukkaatNaiset": 736
    },
    {
        "kunta": "Hankasalmi",
        "asukkaatYhteensa": 5194,
        "asukkaatMiehet": 2583,
        "asukkaatNaiset": 2611
    },
    {
        "kunta": "Hanko",
        "asukkaatYhteensa": 8796,
        "asukkaatMiehet": 4396,
        "asukkaatNaiset": 4400
    },
    {
        "kunta": "Harjavalta",
        "asukkaatYhteensa": 7248,
        "asukkaatMiehet": 3553,
        "asukkaatNaiset": 3695
    },
    {
        "kunta": "Hartola",
        "asukkaatYhteensa": 2941,
        "asukkaatMiehet": 1460,
        "asukkaatNaiset": 1481
    },
    {
        "kunta": "Hattula",
        "asukkaatYhteensa": 9726,
        "asukkaatMiehet": 4917,
        "asukkaatNaiset": 4809
    },
    {
        "kunta": "Hausjärvi",
        "asukkaatYhteensa": 8709,
        "asukkaatMiehet": 4441,
        "asukkaatNaiset": 4268
    },
    {
        "kunta": "Heinola",
        "asukkaatYhteensa": 19459,
        "asukkaatMiehet": 9440,
        "asukkaatNaiset": 10019
    },
    {
        "kunta": "Heinävesi",
        "asukkaatYhteensa": 3556,
        "asukkaatMiehet": 1842,
        "asukkaatNaiset": 1714
    },
    {
        "kunta": "Helsinki",
        "asukkaatYhteensa": 632577,
        "asukkaatMiehet": 299616,
        "asukkaatNaiset": 332961
    },
    {
        "kunta": "Hirvensalmi",
        "asukkaatYhteensa": 2283,
        "asukkaatMiehet": 1149,
        "asukkaatNaiset": 1134
    },
    {
        "kunta": "Hollola",
        "asukkaatYhteensa": 23954,
        "asukkaatMiehet": 11803,
        "asukkaatNaiset": 12151
    },
    {
        "kunta": "Honkajoki",
        "asukkaatYhteensa": 1787,
        "asukkaatMiehet": 934,
        "asukkaatNaiset": 853
    },
    {
        "kunta": "Huittinen",
        "asukkaatYhteensa": 10451,
        "asukkaatMiehet": 5179,
        "asukkaatNaiset": 5272
    },
    {
        "kunta": "Humppila",
        "asukkaatYhteensa": 2371,
        "asukkaatMiehet": 1213,
        "asukkaatNaiset": 1158
    },
    {
        "kunta": "Hyrynsalmi",
        "asukkaatYhteensa": 2421,
        "asukkaatMiehet": 1266,
        "asukkaatNaiset": 1155
    },
    {
        "kunta": "Hyvinkää",
        "asukkaatYhteensa": 46699,
        "asukkaatMiehet": 22802,
        "asukkaatNaiset": 23897
    },
    {
        "kunta": "Hämeenkyrö",
        "asukkaatYhteensa": 10684,
        "asukkaatMiehet": 5349,
        "asukkaatNaiset": 5335
    },
    {
        "kunta": "Hämeenlinna",
        "asukkaatYhteensa": 67910,
        "asukkaatMiehet": 32795,
        "asukkaatNaiset": 35115
    },
    {
        "kunta": "Ii",
        "asukkaatYhteensa": 9662,
        "asukkaatMiehet": 4986,
        "asukkaatNaiset": 4676
    },
    {
        "kunta": "Iisalmi",
        "asukkaatYhteensa": 21890,
        "asukkaatMiehet": 10777,
        "asukkaatNaiset": 11113
    },
    {
        "kunta": "Iitti",
        "asukkaatYhteensa": 6904,
        "asukkaatMiehet": 3423,
        "asukkaatNaiset": 3481
    },
    {
        "kunta": "Ikaalinen",
        "asukkaatYhteensa": 7180,
        "asukkaatMiehet": 3560,
        "asukkaatNaiset": 3620
    },
    {
        "kunta": "Ilmajoki",
        "asukkaatYhteensa": 12204,
        "asukkaatMiehet": 6165,
        "asukkaatNaiset": 6039
    },
    {
        "kunta": "Ilomantsi",
        "asukkaatYhteensa": 5291,
        "asukkaatMiehet": 2686,
        "asukkaatNaiset": 2605
    },
    {
        "kunta": "Imatra",
        "asukkaatYhteensa": 27687,
        "asukkaatMiehet": 13496,
        "asukkaatNaiset": 14191
    },
    {
        "kunta": "Inari",
        "asukkaatYhteensa": 6799,
        "asukkaatMiehet": 3558,
        "asukkaatNaiset": 3241
    },
    {
        "kunta": "Inkoo",
        "asukkaatYhteensa": 5580,
        "asukkaatMiehet": 2780,
        "asukkaatNaiset": 2800
    },
    {
        "kunta": "Isojoki",
        "asukkaatYhteensa": 2110,
        "asukkaatMiehet": 1123,
        "asukkaatNaiset": 987
    },
    {
        "kunta": "Isokyrö",
        "asukkaatYhteensa": 4771,
        "asukkaatMiehet": 2417,
        "asukkaatNaiset": 2354
    },
    {
        "kunta": "Janakkala",
        "asukkaatYhteensa": 16837,
        "asukkaatMiehet": 8462,
        "asukkaatNaiset": 8375
    },
    {
        "kunta": "Joensuu",
        "asukkaatYhteensa": 75444,
        "asukkaatMiehet": 36773,
        "asukkaatNaiset": 38671
    },
    {
        "kunta": "Jokioinen",
        "asukkaatYhteensa": 5419,
        "asukkaatMiehet": 2676,
        "asukkaatNaiset": 2743
    },
    {
        "kunta": "Jomala",
        "asukkaatYhteensa": 4725,
        "asukkaatMiehet": 2412,
        "asukkaatNaiset": 2313
    },
    {
        "kunta": "Joroinen",
        "asukkaatYhteensa": 5117,
        "asukkaatMiehet": 2599,
        "asukkaatNaiset": 2518
    },
    {
        "kunta": "Joutsa",
        "asukkaatYhteensa": 4695,
        "asukkaatMiehet": 2401,
        "asukkaatNaiset": 2294
    },
    {
        "kunta": "Juankoski",
        "asukkaatYhteensa": 4760,
        "asukkaatMiehet": 2441,
        "asukkaatNaiset": 2319
    },
    {
        "kunta": "Juuka",
        "asukkaatYhteensa": 5013,
        "asukkaatMiehet": 2565,
        "asukkaatNaiset": 2448
    },
    {
        "kunta": "Juupajoki",
        "asukkaatYhteensa": 1992,
        "asukkaatMiehet": 1021,
        "asukkaatNaiset": 971
    },
    {
        "kunta": "Juva",
        "asukkaatYhteensa": 6517,
        "asukkaatMiehet": 3264,
        "asukkaatNaiset": 3253
    },
    {
        "kunta": "Jyväskylä",
        "asukkaatYhteensa": 136934,
        "asukkaatMiehet": 67232,
        "asukkaatNaiset": 69702
    },
    {
        "kunta": "Jämijärvi",
        "asukkaatYhteensa": 1934,
        "asukkaatMiehet": 979,
        "asukkaatNaiset": 955
    },
    {
        "kunta": "Jämsä",
        "asukkaatYhteensa": 21465,
        "asukkaatMiehet": 10727,
        "asukkaatNaiset": 10738
    },
    {
        "kunta": "Järvenpää",
        "asukkaatYhteensa": 41346,
        "asukkaatMiehet": 20152,
        "asukkaatNaiset": 21194
    },
    {
        "kunta": "Kaarina",
        "asukkaatYhteensa": 32657,
        "asukkaatMiehet": 15975,
        "asukkaatNaiset": 16682
    },
    {
        "kunta": "Kaavi",
        "asukkaatYhteensa": 3191,
        "asukkaatMiehet": 1604,
        "asukkaatNaiset": 1587
    },
    {
        "kunta": "Kajaani",
        "asukkaatYhteensa": 37500,
        "asukkaatMiehet": 18504,
        "asukkaatNaiset": 18996
    },
    {
        "kunta": "Kalajoki",
        "asukkaatYhteensa": 12626,
        "asukkaatMiehet": 6354,
        "asukkaatNaiset": 6272
    },
    {
        "kunta": "Kangasala",
        "asukkaatYhteensa": 30943,
        "asukkaatMiehet": 15389,
        "asukkaatNaiset": 15554
    },
    {
        "kunta": "Kangasniemi",
        "asukkaatYhteensa": 5624,
        "asukkaatMiehet": 2827,
        "asukkaatNaiset": 2797
    },
    {
        "kunta": "Kankaanpää",
        "asukkaatYhteensa": 11711,
        "asukkaatMiehet": 5746,
        "asukkaatNaiset": 5965
    },
    {
        "kunta": "Kannonkoski",
        "asukkaatYhteensa": 1434,
        "asukkaatMiehet": 732,
        "asukkaatNaiset": 702
    },
    {
        "kunta": "Kannus",
        "asukkaatYhteensa": 5581,
        "asukkaatMiehet": 2775,
        "asukkaatNaiset": 2806
    },
    {
        "kunta": "Karijoki",
        "asukkaatYhteensa": 1365,
        "asukkaatMiehet": 710,
        "asukkaatNaiset": 655
    },
    {
        "kunta": "Karkkila",
        "asukkaatYhteensa": 8976,
        "asukkaatMiehet": 4429,
        "asukkaatNaiset": 4547
    },
    {
        "kunta": "Karstula",
        "asukkaatYhteensa": 4264,
        "asukkaatMiehet": 2105,
        "asukkaatNaiset": 2159
    },
    {
        "kunta": "Karvia",
        "asukkaatYhteensa": 2472,
        "asukkaatMiehet": 1298,
        "asukkaatNaiset": 1174
    },
    {
        "kunta": "Kaskinen",
        "asukkaatYhteensa": 1318,
        "asukkaatMiehet": 661,
        "asukkaatNaiset": 657
    },
    {
        "kunta": "Kauhajoki",
        "asukkaatYhteensa": 13800,
        "asukkaatMiehet": 6917,
        "asukkaatNaiset": 6883
    },
    {
        "kunta": "Kauhava",
        "asukkaatYhteensa": 16797,
        "asukkaatMiehet": 8415,
        "asukkaatNaiset": 8382
    },
    {
        "kunta": "Kauniainen",
        "asukkaatYhteensa": 9283,
        "asukkaatMiehet": 4519,
        "asukkaatNaiset": 4764
    },
    {
        "kunta": "Kaustinen",
        "asukkaatYhteensa": 4302,
        "asukkaatMiehet": 2174,
        "asukkaatNaiset": 2128
    },
    {
        "kunta": "Keitele",
        "asukkaatYhteensa": 2364,
        "asukkaatMiehet": 1213,
        "asukkaatNaiset": 1151
    },
    {
        "kunta": "Kemi",
        "asukkaatYhteensa": 21650,
        "asukkaatMiehet": 10720,
        "asukkaatNaiset": 10930
    },
    {
        "kunta": "Kemijärvi",
        "asukkaatYhteensa": 7716,
        "asukkaatMiehet": 3881,
        "asukkaatNaiset": 3835
    },
    {
        "kunta": "Keminmaa",
        "asukkaatYhteensa": 8360,
        "asukkaatMiehet": 4230,
        "asukkaatNaiset": 4130
    },
    {
        "kunta": "Kemiönsaari",
        "asukkaatYhteensa": 6936,
        "asukkaatMiehet": 3491,
        "asukkaatNaiset": 3445
    },
    {
        "kunta": "Kempele",
        "asukkaatYhteensa": 17159,
        "asukkaatMiehet": 8549,
        "asukkaatNaiset": 8610
    },
    {
        "kunta": "Kerava",
        "asukkaatYhteensa": 35427,
        "asukkaatMiehet": 17359,
        "asukkaatNaiset": 18068
    },
    {
        "kunta": "Keuruu",
        "asukkaatYhteensa": 10078,
        "asukkaatMiehet": 4926,
        "asukkaatNaiset": 5152
    },
    {
        "kunta": "Kihniö",
        "asukkaatYhteensa": 2012,
        "asukkaatMiehet": 1034,
        "asukkaatNaiset": 978
    },
    {
        "kunta": "Kinnula",
        "asukkaatYhteensa": 1730,
        "asukkaatMiehet": 926,
        "asukkaatNaiset": 804
    },
    {
        "kunta": "Kirkkonummi",
        "asukkaatYhteensa": 39020,
        "asukkaatMiehet": 19454,
        "asukkaatNaiset": 19566
    },
    {
        "kunta": "Kitee",
        "asukkaatYhteensa": 10779,
        "asukkaatMiehet": 5344,
        "asukkaatNaiset": 5435
    },
    {
        "kunta": "Kittilä",
        "asukkaatYhteensa": 6332,
        "asukkaatMiehet": 3193,
        "asukkaatNaiset": 3139
    },
    {
        "kunta": "Kiuruvesi",
        "asukkaatYhteensa": 8527,
        "asukkaatMiehet": 4294,
        "asukkaatNaiset": 4233
    },
    {
        "kunta": "Kivijärvi",
        "asukkaatYhteensa": 1183,
        "asukkaatMiehet": 619,
        "asukkaatNaiset": 564
    },
    {
        "kunta": "Kokemäki",
        "asukkaatYhteensa": 7588,
        "asukkaatMiehet": 3792,
        "asukkaatNaiset": 3796
    },
    {
        "kunta": "Kokkola",
        "asukkaatYhteensa": 47727,
        "asukkaatMiehet": 23541,
        "asukkaatNaiset": 24186
    },
    {
        "kunta": "Kolari",
        "asukkaatYhteensa": 3813,
        "asukkaatMiehet": 1951,
        "asukkaatNaiset": 1862
    },
    {
        "kunta": "Konnevesi",
        "asukkaatYhteensa": 2759,
        "asukkaatMiehet": 1414,
        "asukkaatNaiset": 1345
    },
    {
        "kunta": "Kontiolahti",
        "asukkaatYhteensa": 14747,
        "asukkaatMiehet": 7464,
        "asukkaatNaiset": 7283
    },
    {
        "kunta": "Korsnäs",
        "asukkaatYhteensa": 2188,
        "asukkaatMiehet": 1124,
        "asukkaatNaiset": 1064
    },
    {
        "kunta": "Koski Tl",
        "asukkaatYhteensa": 2394,
        "asukkaatMiehet": 1192,
        "asukkaatNaiset": 1202
    },
    {
        "kunta": "Kotka",
        "asukkaatYhteensa": 54288,
        "asukkaatMiehet": 26751,
        "asukkaatNaiset": 27537
    },
    {
        "kunta": "Kouvola",
        "asukkaatYhteensa": 85784,
        "asukkaatMiehet": 42098,
        "asukkaatNaiset": 43686
    },
    {
        "kunta": "Kristiinankaupunki",
        "asukkaatYhteensa": 6760,
        "asukkaatMiehet": 3382,
        "asukkaatNaiset": 3378
    },
    {
        "kunta": "Kruunupyy",
        "asukkaatYhteensa": 6655,
        "asukkaatMiehet": 3359,
        "asukkaatNaiset": 3296
    },
    {
        "kunta": "Kuhmo",
        "asukkaatYhteensa": 8735,
        "asukkaatMiehet": 4510,
        "asukkaatNaiset": 4225
    },
    {
        "kunta": "Kuhmoinen",
        "asukkaatYhteensa": 2322,
        "asukkaatMiehet": 1140,
        "asukkaatNaiset": 1182
    },
    {
        "kunta": "Kumlinge",
        "asukkaatYhteensa": 319,
        "asukkaatMiehet": 169,
        "asukkaatNaiset": 150
    },
    {
        "kunta": "Kuopio",
        "asukkaatYhteensa": 112000,
        "asukkaatMiehet": 54434,
        "asukkaatNaiset": 57566
    },
    {
        "kunta": "Kuortane",
        "asukkaatYhteensa": 3693,
        "asukkaatMiehet": 1900,
        "asukkaatNaiset": 1793
    },
    {
        "kunta": "Kurikka",
        "asukkaatYhteensa": 21581,
        "asukkaatMiehet": 10799,
        "asukkaatNaiset": 10782
    },
    {
        "kunta": "Kustavi",
        "asukkaatYhteensa": 911,
        "asukkaatMiehet": 468,
        "asukkaatNaiset": 443
    },
    {
        "kunta": "Kuusamo",
        "asukkaatYhteensa": 15629,
        "asukkaatMiehet": 7952,
        "asukkaatNaiset": 7677
    },
    {
        "kunta": "Kyyjärvi",
        "asukkaatYhteensa": 1388,
        "asukkaatMiehet": 720,
        "asukkaatNaiset": 668
    },
    {
        "kunta": "Kärkölä",
        "asukkaatYhteensa": 4602,
        "asukkaatMiehet": 2337,
        "asukkaatNaiset": 2265
    },
    {
        "kunta": "Kärsämäki",
        "asukkaatYhteensa": 2667,
        "asukkaatMiehet": 1399,
        "asukkaatNaiset": 1268
    },
    {
        "kunta": "Kökar",
        "asukkaatYhteensa": 245,
        "asukkaatMiehet": 137,
        "asukkaatNaiset": 108
    },
    {
        "kunta": "Lahti",
        "asukkaatYhteensa": 119118,
        "asukkaatMiehet": 57231,
        "asukkaatNaiset": 61887
    },
    {
        "kunta": "Laihia",
        "asukkaatYhteensa": 8175,
        "asukkaatMiehet": 4103,
        "asukkaatNaiset": 4072
    },
    {
        "kunta": "Laitila",
        "asukkaatYhteensa": 8545,
        "asukkaatMiehet": 4223,
        "asukkaatNaiset": 4322
    },
    {
        "kunta": "Lapinjärvi",
        "asukkaatYhteensa": 2766,
        "asukkaatMiehet": 1388,
        "asukkaatNaiset": 1378
    },
    {
        "kunta": "Lapinlahti",
        "asukkaatYhteensa": 9932,
        "asukkaatMiehet": 5019,
        "asukkaatNaiset": 4913
    },
    {
        "kunta": "Lappajärvi",
        "asukkaatYhteensa": 3207,
        "asukkaatMiehet": 1582,
        "asukkaatNaiset": 1625
    },
    {
        "kunta": "Lappeenranta",
        "asukkaatYhteensa": 72430,
        "asukkaatMiehet": 35812,
        "asukkaatNaiset": 36618
    },
    {
        "kunta": "Lapua",
        "asukkaatYhteensa": 14654,
        "asukkaatMiehet": 7263,
        "asukkaatNaiset": 7391
    },
    {
        "kunta": "Laukaa",
        "asukkaatYhteensa": 18961,
        "asukkaatMiehet": 9551,
        "asukkaatNaiset": 9410
    },
    {
        "kunta": "Lemi",
        "asukkaatYhteensa": 3089,
        "asukkaatMiehet": 1626,
        "asukkaatNaiset": 1463
    },
    {
        "kunta": "Lemland",
        "asukkaatYhteensa": 2006,
        "asukkaatMiehet": 1004,
        "asukkaatNaiset": 1002
    },
    {
        "kunta": "Lempäälä",
        "asukkaatYhteensa": 22681,
        "asukkaatMiehet": 11279,
        "asukkaatNaiset": 11402
    },
    {
        "kunta": "Leppävirta",
        "asukkaatYhteensa": 9947,
        "asukkaatMiehet": 5026,
        "asukkaatNaiset": 4921
    },
    {
        "kunta": "Lestijärvi",
        "asukkaatYhteensa": 815,
        "asukkaatMiehet": 419,
        "asukkaatNaiset": 396
    },
    {
        "kunta": "Lieksa",
        "asukkaatYhteensa": 11662,
        "asukkaatMiehet": 5943,
        "asukkaatNaiset": 5719
    },
    {
        "kunta": "Lieto",
        "asukkaatYhteensa": 19347,
        "asukkaatMiehet": 9615,
        "asukkaatNaiset": 9732
    },
    {
        "kunta": "Liminka",
        "asukkaatYhteensa": 10031,
        "asukkaatMiehet": 5120,
        "asukkaatNaiset": 4911
    },
    {
        "kunta": "Liperi",
        "asukkaatYhteensa": 12373,
        "asukkaatMiehet": 6234,
        "asukkaatNaiset": 6139
    },
    {
        "kunta": "Lohja",
        "asukkaatYhteensa": 47318,
        "asukkaatMiehet": 23303,
        "asukkaatNaiset": 24015
    },
    {
        "kunta": "Loimaa",
        "asukkaatYhteensa": 16427,
        "asukkaatMiehet": 8130,
        "asukkaatNaiset": 8297
    },
    {
        "kunta": "Loppi",
        "asukkaatYhteensa": 8174,
        "asukkaatMiehet": 4208,
        "asukkaatNaiset": 3966
    },
    {
        "kunta": "Loviisa",
        "asukkaatYhteensa": 15294,
        "asukkaatMiehet": 7632,
        "asukkaatNaiset": 7662
    },
    {
        "kunta": "Luhanka",
        "asukkaatYhteensa": 768,
        "asukkaatMiehet": 405,
        "asukkaatNaiset": 363
    },
    {
        "kunta": "Lumijoki",
        "asukkaatYhteensa": 2067,
        "asukkaatMiehet": 1068,
        "asukkaatNaiset": 999
    },
    {
        "kunta": "Lumparland",
        "asukkaatYhteensa": 386,
        "asukkaatMiehet": 202,
        "asukkaatNaiset": 184
    },
    {
        "kunta": "Luoto",
        "asukkaatYhteensa": 5208,
        "asukkaatMiehet": 2689,
        "asukkaatNaiset": 2519
    },
    {
        "kunta": "Luumäki",
        "asukkaatYhteensa": 4874,
        "asukkaatMiehet": 2465,
        "asukkaatNaiset": 2409
    },
    {
        "kunta": "Luvia",
        "asukkaatYhteensa": 3348,
        "asukkaatMiehet": 1693,
        "asukkaatNaiset": 1655
    },
    {
        "kunta": "Maalahti",
        "asukkaatYhteensa": 5542,
        "asukkaatMiehet": 2838,
        "asukkaatNaiset": 2704
    },
    {
        "kunta": "Maarianhamina - Mariehamn",
        "asukkaatYhteensa": 11602,
        "asukkaatMiehet": 5583,
        "asukkaatNaiset": 6019
    },
    {
        "kunta": "Marttila",
        "asukkaatYhteensa": 2036,
        "asukkaatMiehet": 1035,
        "asukkaatNaiset": 1001
    },
    {
        "kunta": "Masku",
        "asukkaatYhteensa": 9744,
        "asukkaatMiehet": 4949,
        "asukkaatNaiset": 4795
    },
    {
        "kunta": "Merijärvi",
        "asukkaatYhteensa": 1129,
        "asukkaatMiehet": 611,
        "asukkaatNaiset": 518
    },
    {
        "kunta": "Merikarvia",
        "asukkaatYhteensa": 3197,
        "asukkaatMiehet": 1594,
        "asukkaatNaiset": 1603
    },
    {
        "kunta": "Miehikkälä",
        "asukkaatYhteensa": 2056,
        "asukkaatMiehet": 1038,
        "asukkaatNaiset": 1018
    },
    {
        "kunta": "Mikkeli",
        "asukkaatYhteensa": 54479,
        "asukkaatMiehet": 26570,
        "asukkaatNaiset": 27909
    },
    {
        "kunta": "Muhos",
        "asukkaatYhteensa": 9061,
        "asukkaatMiehet": 4624,
        "asukkaatNaiset": 4437
    },
    {
        "kunta": "Multia",
        "asukkaatYhteensa": 1702,
        "asukkaatMiehet": 877,
        "asukkaatNaiset": 825
    },
    {
        "kunta": "Muonio",
        "asukkaatYhteensa": 2341,
        "asukkaatMiehet": 1176,
        "asukkaatNaiset": 1165
    },
    {
        "kunta": "Mustasaari",
        "asukkaatYhteensa": 19398,
        "asukkaatMiehet": 9756,
        "asukkaatNaiset": 9642
    },
    {
        "kunta": "Muurame",
        "asukkaatYhteensa": 9847,
        "asukkaatMiehet": 4960,
        "asukkaatNaiset": 4887
    },
    {
        "kunta": "Mynämäki",
        "asukkaatYhteensa": 7876,
        "asukkaatMiehet": 3924,
        "asukkaatNaiset": 3952
    },
    {
        "kunta": "Myrskylä",
        "asukkaatYhteensa": 1981,
        "asukkaatMiehet": 969,
        "asukkaatNaiset": 1012
    },
    {
        "kunta": "Mäntsälä",
        "asukkaatYhteensa": 20818,
        "asukkaatMiehet": 10362,
        "asukkaatNaiset": 10456
    },
    {
        "kunta": "Mänttä-Vilppula",
        "asukkaatYhteensa": 10538,
        "asukkaatMiehet": 5183,
        "asukkaatNaiset": 5355
    },
    {
        "kunta": "Mäntyharju",
        "asukkaatYhteensa": 6118,
        "asukkaatMiehet": 3037,
        "asukkaatNaiset": 3081
    },
    {
        "kunta": "Naantali",
        "asukkaatYhteensa": 19080,
        "asukkaatMiehet": 9260,
        "asukkaatNaiset": 9820
    },
    {
        "kunta": "Nakkila",
        "asukkaatYhteensa": 5598,
        "asukkaatMiehet": 2780,
        "asukkaatNaiset": 2818
    },
    {
        "kunta": "Nivala",
        "asukkaatYhteensa": 10943,
        "asukkaatMiehet": 5573,
        "asukkaatNaiset": 5370
    },
    {
        "kunta": "Nokia",
        "asukkaatYhteensa": 33258,
        "asukkaatMiehet": 16483,
        "asukkaatNaiset": 16775
    },
    {
        "kunta": "Nousiainen",
        "asukkaatYhteensa": 4822,
        "asukkaatMiehet": 2444,
        "asukkaatNaiset": 2378
    },
    {
        "kunta": "Nurmes",
        "asukkaatYhteensa": 7950,
        "asukkaatMiehet": 3994,
        "asukkaatNaiset": 3956
    },
    {
        "kunta": "Nurmijärvi",
        "asukkaatYhteensa": 42126,
        "asukkaatMiehet": 21020,
        "asukkaatNaiset": 21106
    },
    {
        "kunta": "Närpiö",
        "asukkaatYhteensa": 9416,
        "asukkaatMiehet": 4761,
        "asukkaatNaiset": 4655
    },
    {
        "kunta": "Orimattila",
        "asukkaatYhteensa": 16269,
        "asukkaatMiehet": 8094,
        "asukkaatNaiset": 8175
    },
    {
        "kunta": "Oripää",
        "asukkaatYhteensa": 1376,
        "asukkaatMiehet": 690,
        "asukkaatNaiset": 686
    },
    {
        "kunta": "Orivesi",
        "asukkaatYhteensa": 9333,
        "asukkaatMiehet": 4591,
        "asukkaatNaiset": 4742
    },
    {
        "kunta": "Oulainen",
        "asukkaatYhteensa": 7565,
        "asukkaatMiehet": 3697,
        "asukkaatNaiset": 3868
    },
    {
        "kunta": "Oulu",
        "asukkaatYhteensa": 198832,
        "asukkaatMiehet": 98971,
        "asukkaatNaiset": 99861
    },
    {
        "kunta": "Outokumpu",
        "asukkaatYhteensa": 7088,
        "asukkaatMiehet": 3531,
        "asukkaatNaiset": 3557
    },
    {
        "kunta": "Padasjoki",
        "asukkaatYhteensa": 3125,
        "asukkaatMiehet": 1561,
        "asukkaatNaiset": 1564
    },
    {
        "kunta": "Paimio",
        "asukkaatYhteensa": 10685,
        "asukkaatMiehet": 5289,
        "asukkaatNaiset": 5396
    },
    {
        "kunta": "Paltamo",
        "asukkaatYhteensa": 3476,
        "asukkaatMiehet": 1784,
        "asukkaatNaiset": 1692
    },
    {
        "kunta": "Parainen",
        "asukkaatYhteensa": 15486,
        "asukkaatMiehet": 7674,
        "asukkaatNaiset": 7812
    },
    {
        "kunta": "Parikkala",
        "asukkaatYhteensa": 5181,
        "asukkaatMiehet": 2608,
        "asukkaatNaiset": 2573
    },
    {
        "kunta": "Parkano",
        "asukkaatYhteensa": 6744,
        "asukkaatMiehet": 3428,
        "asukkaatNaiset": 3316
    },
    {
        "kunta": "Pedersören kunta",
        "asukkaatYhteensa": 11114,
        "asukkaatMiehet": 5724,
        "asukkaatNaiset": 5390
    },
    {
        "kunta": "Pelkosenniemi",
        "asukkaatYhteensa": 950,
        "asukkaatMiehet": 527,
        "asukkaatNaiset": 423
    },
    {
        "kunta": "Pello",
        "asukkaatYhteensa": 3610,
        "asukkaatMiehet": 1841,
        "asukkaatNaiset": 1769
    },
    {
        "kunta": "Perho",
        "asukkaatYhteensa": 2913,
        "asukkaatMiehet": 1470,
        "asukkaatNaiset": 1443
    },
    {
        "kunta": "Pertunmaa",
        "asukkaatYhteensa": 1809,
        "asukkaatMiehet": 914,
        "asukkaatNaiset": 895
    },
    {
        "kunta": "Petäjävesi",
        "asukkaatYhteensa": 4005,
        "asukkaatMiehet": 2051,
        "asukkaatNaiset": 1954
    },
    {
        "kunta": "Pieksämäki",
        "asukkaatYhteensa": 18623,
        "asukkaatMiehet": 9118,
        "asukkaatNaiset": 9505
    },
    {
        "kunta": "Pielavesi",
        "asukkaatYhteensa": 4750,
        "asukkaatMiehet": 2455,
        "asukkaatNaiset": 2295
    },
    {
        "kunta": "Pietarsaari",
        "asukkaatYhteensa": 19444,
        "asukkaatMiehet": 9660,
        "asukkaatNaiset": 9784
    },
    {
        "kunta": "Pihtipudas",
        "asukkaatYhteensa": 4223,
        "asukkaatMiehet": 2076,
        "asukkaatNaiset": 2147
    },
    {
        "kunta": "Pirkkala",
        "asukkaatYhteensa": 19145,
        "asukkaatMiehet": 9466,
        "asukkaatNaiset": 9679
    },
    {
        "kunta": "Polvijärvi",
        "asukkaatYhteensa": 4521,
        "asukkaatMiehet": 2314,
        "asukkaatNaiset": 2207
    },
    {
        "kunta": "Pomarkku",
        "asukkaatYhteensa": 2239,
        "asukkaatMiehet": 1140,
        "asukkaatNaiset": 1099
    },
    {
        "kunta": "Pori",
        "asukkaatYhteensa": 85230,
        "asukkaatMiehet": 41426,
        "asukkaatNaiset": 43804
    },
    {
        "kunta": "Pornainen",
        "asukkaatYhteensa": 5111,
        "asukkaatMiehet": 2585,
        "asukkaatNaiset": 2526
    },
    {
        "kunta": "Porvoo",
        "asukkaatYhteensa": 50197,
        "asukkaatMiehet": 24698,
        "asukkaatNaiset": 25499
    },
    {
        "kunta": "Posio",
        "asukkaatYhteensa": 3453,
        "asukkaatMiehet": 1792,
        "asukkaatNaiset": 1661
    },
    {
        "kunta": "Pudasjärvi",
        "asukkaatYhteensa": 8237,
        "asukkaatMiehet": 4324,
        "asukkaatNaiset": 3913
    },
    {
        "kunta": "Pukkila",
        "asukkaatYhteensa": 1972,
        "asukkaatMiehet": 1002,
        "asukkaatNaiset": 970
    },
    {
        "kunta": "Punkalaidun",
        "asukkaatYhteensa": 3043,
        "asukkaatMiehet": 1573,
        "asukkaatNaiset": 1470
    },
    {
        "kunta": "Puolanka",
        "asukkaatYhteensa": 2756,
        "asukkaatMiehet": 1433,
        "asukkaatNaiset": 1323
    },
    {
        "kunta": "Puumala",
        "asukkaatYhteensa": 2245,
        "asukkaatMiehet": 1137,
        "asukkaatNaiset": 1108
    },
    {
        "kunta": "Pyhtää",
        "asukkaatYhteensa": 5350,
        "asukkaatMiehet": 2663,
        "asukkaatNaiset": 2687
    },
    {
        "kunta": "Pyhäjoki",
        "asukkaatYhteensa": 3204,
        "asukkaatMiehet": 1660,
        "asukkaatNaiset": 1544
    },
    {
        "kunta": "Pyhäjärvi",
        "asukkaatYhteensa": 5491,
        "asukkaatMiehet": 2774,
        "asukkaatNaiset": 2717
    },
    {
        "kunta": "Pyhäntä",
        "asukkaatYhteensa": 1572,
        "asukkaatMiehet": 831,
        "asukkaatNaiset": 741
    },
    {
        "kunta": "Pyhäranta",
        "asukkaatYhteensa": 2099,
        "asukkaatMiehet": 1078,
        "asukkaatNaiset": 1021
    },
    {
        "kunta": "Pälkäne",
        "asukkaatYhteensa": 6713,
        "asukkaatMiehet": 3359,
        "asukkaatNaiset": 3354
    },
    {
        "kunta": "Pöytyä",
        "asukkaatYhteensa": 8568,
        "asukkaatMiehet": 4374,
        "asukkaatNaiset": 4194
    },
    {
        "kunta": "Raahe",
        "asukkaatYhteensa": 25166,
        "asukkaatMiehet": 12824,
        "asukkaatNaiset": 12342
    },
    {
        "kunta": "Raasepori",
        "asukkaatYhteensa": 28384,
        "asukkaatMiehet": 13975,
        "asukkaatNaiset": 14409
    },
    {
        "kunta": "Raisio",
        "asukkaatYhteensa": 24364,
        "asukkaatMiehet": 11941,
        "asukkaatNaiset": 12423
    },
    {
        "kunta": "Rantasalmi",
        "asukkaatYhteensa": 3706,
        "asukkaatMiehet": 1874,
        "asukkaatNaiset": 1832
    },
    {
        "kunta": "Ranua",
        "asukkaatYhteensa": 4011,
        "asukkaatMiehet": 2100,
        "asukkaatNaiset": 1911
    },
    {
        "kunta": "Rauma",
        "asukkaatYhteensa": 39655,
        "asukkaatMiehet": 19668,
        "asukkaatNaiset": 19987
    },
    {
        "kunta": "Rautalampi",
        "asukkaatYhteensa": 3305,
        "asukkaatMiehet": 1662,
        "asukkaatNaiset": 1643
    },
    {
        "kunta": "Rautavaara",
        "asukkaatYhteensa": 1739,
        "asukkaatMiehet": 951,
        "asukkaatNaiset": 788
    },
    {
        "kunta": "Rautjärvi",
        "asukkaatYhteensa": 3507,
        "asukkaatMiehet": 1754,
        "asukkaatNaiset": 1753
    },
    {
        "kunta": "Reisjärvi",
        "asukkaatYhteensa": 2878,
        "asukkaatMiehet": 1480,
        "asukkaatNaiset": 1398
    },
    {
        "kunta": "Riihimäki",
        "asukkaatYhteensa": 29244,
        "asukkaatMiehet": 14419,
        "asukkaatNaiset": 14825
    },
    {
        "kunta": "Ristijärvi",
        "asukkaatYhteensa": 1349,
        "asukkaatMiehet": 703,
        "asukkaatNaiset": 646
    },
    {
        "kunta": "Rovaniemi",
        "asukkaatYhteensa": 61600,
        "asukkaatMiehet": 30063,
        "asukkaatNaiset": 31537
    },
    {
        "kunta": "Ruokolahti",
        "asukkaatYhteensa": 5299,
        "asukkaatMiehet": 2623,
        "asukkaatNaiset": 2676
    },
    {
        "kunta": "Ruovesi",
        "asukkaatYhteensa": 4609,
        "asukkaatMiehet": 2325,
        "asukkaatNaiset": 2284
    },
    {
        "kunta": "Rusko",
        "asukkaatYhteensa": 6139,
        "asukkaatMiehet": 3052,
        "asukkaatNaiset": 3087
    },
    {
        "kunta": "Rääkkylä",
        "asukkaatYhteensa": 2309,
        "asukkaatMiehet": 1195,
        "asukkaatNaiset": 1114
    },
    {
        "kunta": "Saarijärvi",
        "asukkaatYhteensa": 9814,
        "asukkaatMiehet": 4901,
        "asukkaatNaiset": 4913
    },
    {
        "kunta": "Salla",
        "asukkaatYhteensa": 3678,
        "asukkaatMiehet": 1971,
        "asukkaatNaiset": 1707
    },
    {
        "kunta": "Salo",
        "asukkaatYhteensa": 53815,
        "asukkaatMiehet": 26480,
        "asukkaatNaiset": 27335
    },
    {
        "kunta": "Saltvik",
        "asukkaatYhteensa": 1865,
        "asukkaatMiehet": 941,
        "asukkaatNaiset": 924
    },
    {
        "kunta": "Sastamala",
        "asukkaatYhteensa": 25187,
        "asukkaatMiehet": 12461,
        "asukkaatNaiset": 12726
    },
    {
        "kunta": "Sauvo",
        "asukkaatYhteensa": 3065,
        "asukkaatMiehet": 1548,
        "asukkaatNaiset": 1517
    },
    {
        "kunta": "Savitaipale",
        "asukkaatYhteensa": 3574,
        "asukkaatMiehet": 1781,
        "asukkaatNaiset": 1793
    },
    {
        "kunta": "Savonlinna",
        "asukkaatYhteensa": 35279,
        "asukkaatMiehet": 17196,
        "asukkaatNaiset": 18083
    },
    {
        "kunta": "Savukoski",
        "asukkaatYhteensa": 1049,
        "asukkaatMiehet": 579,
        "asukkaatNaiset": 470
    },
    {
        "kunta": "Seinäjoki",
        "asukkaatYhteensa": 61778,
        "asukkaatMiehet": 30028,
        "asukkaatNaiset": 31750
    },
    {
        "kunta": "Sievi",
        "asukkaatYhteensa": 5089,
        "asukkaatMiehet": 2624,
        "asukkaatNaiset": 2465
    },
    {
        "kunta": "Siikainen",
        "asukkaatYhteensa": 1514,
        "asukkaatMiehet": 800,
        "asukkaatNaiset": 714
    },
    {
        "kunta": "Siikajoki",
        "asukkaatYhteensa": 5451,
        "asukkaatMiehet": 2841,
        "asukkaatNaiset": 2610
    },
    {
        "kunta": "Siikalatva",
        "asukkaatYhteensa": 5636,
        "asukkaatMiehet": 2985,
        "asukkaatNaiset": 2651
    },
    {
        "kunta": "Siilinjärvi",
        "asukkaatYhteensa": 21809,
        "asukkaatMiehet": 10885,
        "asukkaatNaiset": 10924
    },
    {
        "kunta": "Simo",
        "asukkaatYhteensa": 3212,
        "asukkaatMiehet": 1630,
        "asukkaatNaiset": 1582
    },
    {
        "kunta": "Sipoo",
        "asukkaatYhteensa": 19809,
        "asukkaatMiehet": 9906,
        "asukkaatNaiset": 9903
    },
    {
        "kunta": "Siuntio",
        "asukkaatYhteensa": 6161,
        "asukkaatMiehet": 3149,
        "asukkaatNaiset": 3012
    },
    {
        "kunta": "Sodankylä",
        "asukkaatYhteensa": 8677,
        "asukkaatMiehet": 4530,
        "asukkaatNaiset": 4147
    },
    {
        "kunta": "Soini",
        "asukkaatYhteensa": 2213,
        "asukkaatMiehet": 1120,
        "asukkaatNaiset": 1093
    },
    {
        "kunta": "Somero",
        "asukkaatYhteensa": 9058,
        "asukkaatMiehet": 4485,
        "asukkaatNaiset": 4573
    },
    {
        "kunta": "Sonkajärvi",
        "asukkaatYhteensa": 4247,
        "asukkaatMiehet": 2215,
        "asukkaatNaiset": 2032
    },
    {
        "kunta": "Sotkamo",
        "asukkaatYhteensa": 10537,
        "asukkaatMiehet": 5234,
        "asukkaatNaiset": 5303
    },
    {
        "kunta": "Sottunga",
        "asukkaatYhteensa": 94,
        "asukkaatMiehet": 50,
        "asukkaatNaiset": 44
    },
    {
        "kunta": "Sulkava",
        "asukkaatYhteensa": 2703,
        "asukkaatMiehet": 1359,
        "asukkaatNaiset": 1344
    },
    {
        "kunta": "Sund",
        "asukkaatYhteensa": 1023,
        "asukkaatMiehet": 521,
        "asukkaatNaiset": 502
    },
    {
        "kunta": "Suomussalmi",
        "asukkaatYhteensa": 8236,
        "asukkaatMiehet": 4206,
        "asukkaatNaiset": 4030
    },
    {
        "kunta": "Suonenjoki",
        "asukkaatYhteensa": 7376,
        "asukkaatMiehet": 3671,
        "asukkaatNaiset": 3705
    },
    {
        "kunta": "Sysmä",
        "asukkaatYhteensa": 4015,
        "asukkaatMiehet": 1982,
        "asukkaatNaiset": 2033
    },
    {
        "kunta": "Säkylä",
        "asukkaatYhteensa": 7040,
        "asukkaatMiehet": 3503,
        "asukkaatNaiset": 3537
    },
    {
        "kunta": "Taipalsaari",
        "asukkaatYhteensa": 4811,
        "asukkaatMiehet": 2447,
        "asukkaatNaiset": 2364
    },
    {
        "kunta": "Taivalkoski",
        "asukkaatYhteensa": 4151,
        "asukkaatMiehet": 2215,
        "asukkaatNaiset": 1936
    },
    {
        "kunta": "Taivassalo",
        "asukkaatYhteensa": 1648,
        "asukkaatMiehet": 836,
        "asukkaatNaiset": 812
    },
    {
        "kunta": "Tammela",
        "asukkaatYhteensa": 6286,
        "asukkaatMiehet": 3156,
        "asukkaatNaiset": 3130
    },
    {
        "kunta": "Tampere",
        "asukkaatYhteensa": 225843,
        "asukkaatMiehet": 109387,
        "asukkaatNaiset": 116456
    },
    {
        "kunta": "Tervo",
        "asukkaatYhteensa": 1620,
        "asukkaatMiehet": 837,
        "asukkaatNaiset": 783
    },
    {
        "kunta": "Tervola",
        "asukkaatYhteensa": 3139,
        "asukkaatMiehet": 1649,
        "asukkaatNaiset": 1490
    },
    {
        "kunta": "Teuva",
        "asukkaatYhteensa": 5426,
        "asukkaatMiehet": 2756,
        "asukkaatNaiset": 2670
    },
    {
        "kunta": "Tohmajärvi",
        "asukkaatYhteensa": 4721,
        "asukkaatMiehet": 2456,
        "asukkaatNaiset": 2265
    },
    {
        "kunta": "Toholampi",
        "asukkaatYhteensa": 3298,
        "asukkaatMiehet": 1673,
        "asukkaatNaiset": 1625
    },
    {
        "kunta": "Toivakka",
        "asukkaatYhteensa": 2432,
        "asukkaatMiehet": 1260,
        "asukkaatNaiset": 1172
    },
    {
        "kunta": "Tornio",
        "asukkaatYhteensa": 22164,
        "asukkaatMiehet": 11115,
        "asukkaatNaiset": 11049
    },
    {
        "kunta": "Turku",
        "asukkaatYhteensa": 185836,
        "asukkaatMiehet": 88620,
        "asukkaatNaiset": 97216
    },
    {
        "kunta": "Tuusniemi",
        "asukkaatYhteensa": 2675,
        "asukkaatMiehet": 1360,
        "asukkaatNaiset": 1315
    },
    {
        "kunta": "Tuusula",
        "asukkaatYhteensa": 38787,
        "asukkaatMiehet": 19337,
        "asukkaatNaiset": 19450
    },
    {
        "kunta": "Tyrnävä",
        "asukkaatYhteensa": 6810,
        "asukkaatMiehet": 3476,
        "asukkaatNaiset": 3334
    },
    {
        "kunta": "Ulvila",
        "asukkaatYhteensa": 13364,
        "asukkaatMiehet": 6633,
        "asukkaatNaiset": 6731
    },
    {
        "kunta": "Urjala",
        "asukkaatYhteensa": 4911,
        "asukkaatMiehet": 2443,
        "asukkaatNaiset": 2468
    },
    {
        "kunta": "Utajärvi",
        "asukkaatYhteensa": 2861,
        "asukkaatMiehet": 1505,
        "asukkaatNaiset": 1356
    },
    {
        "kunta": "Utsjoki",
        "asukkaatYhteensa": 1256,
        "asukkaatMiehet": 690,
        "asukkaatNaiset": 566
    },
    {
        "kunta": "Uurainen",
        "asukkaatYhteensa": 3696,
        "asukkaatMiehet": 1902,
        "asukkaatNaiset": 1794
    },
    {
        "kunta": "Uusikaarlepyy",
        "asukkaatYhteensa": 7576,
        "asukkaatMiehet": 3893,
        "asukkaatNaiset": 3683
    },
    {
        "kunta": "Uusikaupunki",
        "asukkaatYhteensa": 15465,
        "asukkaatMiehet": 7749,
        "asukkaatNaiset": 7716
    },
    {
        "kunta": "Vaala",
        "asukkaatYhteensa": 3079,
        "asukkaatMiehet": 1606,
        "asukkaatNaiset": 1473
    },
    {
        "kunta": "Vaasa",
        "asukkaatYhteensa": 66871,
        "asukkaatMiehet": 33390,
        "asukkaatNaiset": 33481
    },
    {
        "kunta": "Valkeakoski",
        "asukkaatYhteensa": 21356,
        "asukkaatMiehet": 10512,
        "asukkaatNaiset": 10844
    },
    {
        "kunta": "Valtimo",
        "asukkaatYhteensa": 2297,
        "asukkaatMiehet": 1170,
        "asukkaatNaiset": 1127
    },
    {
        "kunta": "Vantaa",
        "asukkaatYhteensa": 217416,
        "asukkaatMiehet": 107436,
        "asukkaatNaiset": 109980
    },
    {
        "kunta": "Varkaus",
        "asukkaatYhteensa": 21600,
        "asukkaatMiehet": 10692,
        "asukkaatNaiset": 10908
    },
    {
        "kunta": "Vehmaa",
        "asukkaatYhteensa": 2291,
        "asukkaatMiehet": 1136,
        "asukkaatNaiset": 1155
    },
    {
        "kunta": "Vesanto",
        "asukkaatYhteensa": 2183,
        "asukkaatMiehet": 1104,
        "asukkaatNaiset": 1079
    },
    {
        "kunta": "Vesilahti",
        "asukkaatYhteensa": 4487,
        "asukkaatMiehet": 2305,
        "asukkaatNaiset": 2182
    },
    {
        "kunta": "Veteli",
        "asukkaatYhteensa": 3264,
        "asukkaatMiehet": 1683,
        "asukkaatNaiset": 1581
    },
    {
        "kunta": "Vieremä",
        "asukkaatYhteensa": 3723,
        "asukkaatMiehet": 1906,
        "asukkaatNaiset": 1817
    },
    {
        "kunta": "Vihti",
        "asukkaatYhteensa": 29004,
        "asukkaatMiehet": 14472,
        "asukkaatNaiset": 14532
    },
    {
        "kunta": "Viitasaari",
        "asukkaatYhteensa": 6650,
        "asukkaatMiehet": 3302,
        "asukkaatNaiset": 3348
    },
    {
        "kunta": "Vimpeli",
        "asukkaatYhteensa": 3069,
        "asukkaatMiehet": 1564,
        "asukkaatNaiset": 1505
    },
    {
        "kunta": "Virolahti",
        "asukkaatYhteensa": 3305,
        "asukkaatMiehet": 1680,
        "asukkaatNaiset": 1625
    },
    {
        "kunta": "Virrat",
        "asukkaatYhteensa": 6996,
        "asukkaatMiehet": 3477,
        "asukkaatNaiset": 3519
    },
    {
        "kunta": "Vårdö",
        "asukkaatYhteensa": 435,
        "asukkaatMiehet": 218,
        "asukkaatNaiset": 217
    },
    {
        "kunta": "Vöyri",
        "asukkaatYhteensa": 6714,
        "asukkaatMiehet": 3451,
        "asukkaatNaiset": 3263
    },
    {
        "kunta": "Ylitornio",
        "asukkaatYhteensa": 4246,
        "asukkaatMiehet": 2162,
        "asukkaatNaiset": 2084
    },
    {
        "kunta": "Ylivieska",
        "asukkaatYhteensa": 15094,
        "asukkaatMiehet": 7555,
        "asukkaatNaiset": 7539
    },
    {
        "kunta": "Ylöjärvi",
        "asukkaatYhteensa": 32882,
        "asukkaatMiehet": 16428,
        "asukkaatNaiset": 16454
    },
    {
        "kunta": "Ypäjä",
        "asukkaatYhteensa": 2410,
        "asukkaatMiehet": 1217,
        "asukkaatNaiset": 1193
    },
    {
        "kunta": "Ähtäri",
        "asukkaatYhteensa": 6065,
        "asukkaatMiehet": 3062,
        "asukkaatNaiset": 3003
    },
    {
        "kunta": "Äänekoski",
        "asukkaatYhteensa": 19532,
        "asukkaatMiehet": 9818,
        "asukkaatNaiset": 9714
    }
];

async function main() {
    
    kunnat.forEach(async (kunta) => {

        await prisma.kunta.create({
            data : kunta
        })

    });
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
