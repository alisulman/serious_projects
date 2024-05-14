import { useRef, useState } from "react"

const Private = () => {
    const [draged, setDraged] = useState(false)
    const [text, setText] = useState('Browse')
    const [image, setImage] = useState('')

    const inputRef = useRef(null)

    const handleRef = () => {
        inputRef.current.click()
    }
    const handleChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.onerror = (err) => {
            console.log('error', err.message)
        }
        setText(file.name)
    }
    console.log(image)
    return (
        <>
            <div className={`flex flex-col items-center border-[3px] border-dashed border-blue-600 ${draged && "bg-blue-300"} rounded-xl cursor-pointer py-2 px-5 m-3 h-36`}>
                <div className="text-2xl text-blue-600 font-medium">Drag or Drop Image</div>
                <div className="text-blue-600 font-medium">or</div>
                <div><input type="file" accept="images/*" ref={inputRef} onChange={e => handleChange(e)} className="hidden" /></div>
                <div className="bg-blue-600 hover:bg-blue-800 text-white py-0.5 px-4 my-2" onClick={handleRef}>{text}</div>
                {draged && (
                    <div className="flex justify-center items-center my-auto text-2xl text-blue-600 font-medium">Drop Image Here</div>
                )}
            </div>
        </>
    )
}

export default Private