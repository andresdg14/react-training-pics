import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 51LVDeSys_TAYKbtneDs4djya7MwrW3DN___ly0YBDk",
      },
});