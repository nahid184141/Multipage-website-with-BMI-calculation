const images=["image/image1.jpeg", "image/image2.jpeg", "image/image3.jpeg", "image/image4.jpeg"];
    const banner = document.querySelector('.banner-image');
    let index = 0;
    
    function changeImage(){
     
      banner.src = images[index];
      index = (index + 1) % images.length;
      }

      
       setInterval(changeImage,2000);
    