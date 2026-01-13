const correctPasscode = "1234"; // Ganti dengan passcode yang Anda inginkan

const books = [
    {
        "image": "images/book1.jpg",
        "title": "Buku Kenangan Pertama",
        "description": "Ini adalah deskripsi singkat tentang buku kenangan pertama kita. Momen-momen yang tak terlupakan."
    },
    {
        "image": "images/book2.jpg",
        "title": "Petualangan Kita",
        "description": "Kumpulan foto dari setiap petualangan yang telah kita lalui bersama. Dari gunung hingga pantai."
    },
    {
        "image": "images/book3.jpg",
        "title": "Momen-Momen Manis",
        "description": "Setiap senyum dan tawa yang kita bagikan, terangkum dalam buku ini."
    },
    {
        "image": "images/book4.jpg",
        "title": "Hari-Hari Biasa yang Luar Biasa",
        "description": "Karena setiap hari bersamamu adalah sebuah anugerah yang patut dirayakan."
    },
    {
        "image": "images/book5.jpg",
        "title": "Perjalanan Kuliner",
        "description": "Dari masakan rumah hingga kafe favorit, semua cerita tentang makanan yang kita nikmati bersama."
    },
    {
        "image": "images/book6.jpg",
        "title": "Impian dan Harapan",
        "description": "Buku ini berisi semua impian yang kita bangun dan harapan yang kita doakan bersama untuk masa depan."
    }
];

function checkPasscode() {
    const passcode = document.getElementById('passcode-input').value;
    const errorMessage = document.getElementById('error-message');
    if (passcode === correctPasscode) {
        document.getElementById('passcode-container').style.display = 'none';
        const galleryContainer = document.getElementById('gallery-container');
        galleryContainer.style.display = 'block';
        loadGallery();
    } else {
        errorMessage.textContent = 'Passcode salah. Coba lagi.';
    }
}

function loadGallery() {
    const gallery = document.getElementById('book-gallery');
    books.forEach(book => {
        const item = document.createElement('div');
        item.className = 'book-item';

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;

        const title = document.createElement('h3');
        title.textContent = book.title;

        const description = document.createElement('p');
        description.textContent = book.description;

        item.appendChild(img);
        item.appendChild(title);
        item.appendChild(description);

        gallery.appendChild(item);
    });
}
