const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: 'Alice',
      age: 35
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior']
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: 'Bob',
      age: 20
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior']
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: 'Alice',
      age: 17
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior']
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];


// SNACK 1
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

// const longBooks = books.filter(l => l.pages > 300)
// console.log(longBooks)

// const longBooksTitles = longBooks.map(l => l.title)
// console.log(longBooksTitles)

//SNACK 2
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

// const availableBooks = books.filter(a => a.available === true)

// console.log(availableBooks)

// const discountedBooks = availableBooks.map(d => {
//   const prezzoIniziale = parseFloat(d.price.replace(`€`, ``));
//   const prezzoScontato = prezzoIniziale * 0.8;
//   const prezzoScontatoArrotondato = prezzoScontato.toFixed(2);

//   return {
//     ...d,
//     price: `${prezzoScontatoArrotondato}€`,
//   }

// });
// console.log(discountedBooks)

// const fullPricedBook = discountedBooks.find(d => {
//   const prezzo = parseFloat(d.price.replace(`€`, ``));

//   return Number.isInteger(prezzo);


// });
// console.log(fullPricedBook)

//SNACK 3

// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

// const authors = books.map(a => a.author);
// console.log(authors)

// const areAuthorsAdult = authors.every(a => a.age >= 18);


// if (areAuthorsAdult) {
//   authors.sort((a, b) => a.age - b.age);
// }
// else {
//   authors.sort((a, b) => b.age - a.age);
// }


//SNACK 4

// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

// const ages = books.map(b => b.author.age);
// console.log(ages)

// const agesSum = ages.reduce((acc, eta) => {
//   return acc + eta;
// }, 0);
// console.log(agesSum)

// const etàMediaAutori = agesSum / ages.length;
// console.log(etàMediaAutori)

//SNACK 5

// Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

async function getBooks(arrayNumeri) {

  const booksPromise = arrayNumeri.map(id => fetch(`http://localhost:3333/books/${id}`).then(resp => resp.json()));


  const booksAll = await Promise.all(booksPromise);
  console.log(booksAll);
}

getBooks([2, 13, 7, 21, 19]);