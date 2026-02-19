function bookSearch(){
    const title = document.querySelector('.js-title').value.trim();
    const result =document.querySelector('.js-result');
  
    if(!title){
      alert(`The data should be provided.`)
      return;
    }
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}&langRestrict=en`).
       then(response => response.json()) 
      .then(data => {
          
          if (data.totalItems === 0) {
              result.innerHTML = `<p class="alert">The book is missing.</p>`;
              return;
          }
  
          
          const book = data.items[0].volumeInfo;
          const title = book.title || 'No title available';
          const authors = book.authors ? book.authors.join(', ') : 'No authors available';
          const description = book.description || 'No description available';
          const cover = book.imageLinks ? book.imageLinks.thumbnail : '';
          result.innerHTML = `
          <h2>${title}</h2>
          <p><strong>Authors:</strong> ${authors}</p>
          <p><strong>Description:</strong> ${description}</p>
          ${cover ? `<img src="${cover}" alt="Book cover" class="cover">` : ''}
        `;
    })
    .catch(err => {
        
        console.error(err);
        result.innerHTML = `<p class="alert">An error occurred while searching. Please try again later.</p>`;
    });
    }
        