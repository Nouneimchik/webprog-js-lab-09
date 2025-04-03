import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".gallery");

    if (!galleryContainer) return;

    // Масив зображень
    const images = [
        {preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg', original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg', description: 'Hokkaido Flower' },
        {preview: 'https://pixabay.com/get/gbbe3c4db41e8e9067148428a6a1e88b31a2ab4b718f4e77de1006f24dc2befc73505a2fa12244eac8a8cf07b84c3cb23e360030a9921093d4bf10ec06e6450961d725ec087a84b8c3973b1c6b756d897_640.jpg', original: 'https://pixabay.com/get/g4982e9a7d0500aafe3fffaa9095ee8f69bb6090f39eb090f27c1a5f32e340cfeefcbe94c433ebda267c1d395d303a06c7183a1e03e191df7dc71d6dfc95c4b8e_1280.jpg', description: 'Husky' },
        {preview: 'https://pixabay.com/get/g8f929e8e3e199ab795acc398ca8f775607405da5d928706aadcd0d068def96b81972d18b69369ed454c504ca5c0e41cd_640.jpg', original: 'https://pixabay.com/get/gadad182d5f49e4934a54cdd43c7da0e86a3db18fef9a937046ecb7a2f5b57a257b9a93c2f0e17ca00d94da11899cf0ce71757b50fa21be083f4bd77143cd8700_1280.jpg', description: 'Robin bird' },
        {preview: 'https://pixabay.com/get/g022ac8576b1b63822554da8515f850d35bcd1e98ccbe37654d80c6a086cffee6b6f378fdd0cde12a4134aea722c6308a_640.jpg', original: 'https://pixabay.com/get/g8e1609e1d2bde80423e462e0acb029f4dd58e1c69cd6de05e3af499c9deaa9567ee056242b4440eff3c5349ac3b8d41ffeacd3ea8eef62ad6e5b2a8be11b68d9_1280.jpg', description: 'Cat' },
        {preview: 'https://pixabay.com/get/g4e7de09c3dba44e7d490f75c83ae78c22ac3e4939cef229b24593d759412dff5e558436816ecd5fa57ca6e391ee134b9_640.jpg', original: 'https://pixabay.com/get/gc74e03ec3184c29009a69a087dee1a6563cc80b127f124a4bdf1a96070fe9b69251c1303a7b00d1d4bf3e0566c299cb57e240e9dcdc624237a451fb303ffc24d_1280.jpg', description: 'Animal Wolf' },
        {preview: 'https://pixabay.com/get/g98c3cb5ad591a5d2326411061490c355f80d682583ddb346eed91b6eea05f7ac4f13ea41be31b6454a79b961cca72e05_640.jpg', original: 'https://pixabay.com/get/g4e33acf2b161a93bd36d51c65f314fe3271caacda381d20d6b36fcd271ebb2a249776913abbbe8bfcf776690440a0c3b73e3663dfec4d71fb7d9dbfb22f65d04_1280.jpg', description: 'Cherry Blossom Spring' },
    ];

    // Функція для створення розмітки
    function createMarkup(arr) {
        return arr.map(({ preview, original, description }) => 
            `<li class="gallery-item">
                <a class="gallery-link" href="${original}">
                    <img class="gallery-image" src="${preview}" alt="${description}" />
                </a>
            </li>`
        ).join('');
    }

    // Додаємо згенеровану розмітку в DOM
    galleryContainer.innerHTML = createMarkup(images);

    // Ініціалізація SimpleLightbox
    new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
});
