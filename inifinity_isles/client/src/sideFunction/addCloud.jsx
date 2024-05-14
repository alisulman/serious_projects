import axios from 'axios'

const AddCloud = async (image) => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "Practice")
    data.append("cloud_name", "du9pbx3ro")
    try {
        if (image === null) {
            return console.log('please upload an image first')
        }
        const response = await axios.post('https://api.cloudinary.com/v1_1/du9pbx3ro/image/upload', data)
        const imageUrl = response.data.secure_url
        return imageUrl
    } catch (error) {
        console.log(error.message)
    }
}

export default AddCloud
