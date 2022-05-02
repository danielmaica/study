const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat');
const CAT_IMG = document.getElementById('cat');

const GET_CATS = async () => {
    const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e))

    return data.webpurl;
}

const LOAD_IMG = async () => {
    CAT_IMG.src = await GET_CATS();
};

CAT_BTN.addEventListener('click', LOAD_IMG);

LOAD_IMG();