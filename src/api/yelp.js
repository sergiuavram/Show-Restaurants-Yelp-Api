import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ofpkd9vJXwQSy9GN3cY8vdadblOXqaDcxcGPij2LPGw-fq8tAkDxanPUUPpfiHf7C_3lK7EJGHLfbJjgIFvftmt5Wj5chJQTJw8uXnP7f4kSiyN8Ru5ZpTNifBM9X3Yx',
    }
});
