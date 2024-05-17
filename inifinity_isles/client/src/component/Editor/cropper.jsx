/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import Cropper from 'react-easy-crop'
import { MdCancel } from "react-icons/md";
import { getCroppedImg } from '../../utils/canvasUtils';
import * as Buffer from 'buffer';

const CropEditor = ({ url, setUrl, showEditor, setShowEditor }) => {
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [color, setColor] = useState('');
    const [rangeOne, setRangeOne] = useState(1)
    const [rangeTwo, setRangeTwo] = useState(0)


    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    useEffect(() => {
        setZoom(rangeOne);
    }, [rangeOne]);

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea)
        setCroppedAreaPixels(croppedAreaPixels)
    }
    const handleCancelColor = () => {
        setColor('')
    }
    const handleCancelEditor = () => {
        setShowEditor(false)
    }
    const showCroppedImage = async () => {
        try {
            const croppedImageUrl = await getCroppedImg(
                url,
                croppedAreaPixels,
            );
            // const response = await fetch(croppedImageUrl);
            // const blob = await response.blob();
            // const arrayBuffer = await blob.arrayBuffer();
            // const buffer = new Uint8Array(arrayBuffer);
            setUrl(croppedImageUrl);
        } catch (err) {
            console.error(err);
        }
        setShowEditor(false);
    }


    return (
        <div className={`${(!showEditor || !url) && 'hidden'} absolute top-0 bottom-0 left-0 right-0 bg-white border-2 border-black rounded-2xl w-3/4 h-4/5 z-50 my-auto mx-auto`}>
            <Cropper
                image={url}
                crop={crop}
                zoom={zoom}
                aspect={2 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                style={{
                    containerStyle: {
                        marginBottom: '100px',
                        backgroundColor: color,
                    },
                    mediaStyle: {
                        marginTop: `${rangeTwo}px`,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }}
            />
            <div className="absolute bottom-0  flex flex-col items-center  w-full">
                <div className="flex items-center justify-between">
                    <div className="flex mx-10">
                        <div className="mx-5 w-1/2">
                            <label className="text-sm font-medium">Zoom Out</label>
                            <div className="inline-flex items-center text-white text-xs bg-black px-2 mx-2">{rangeOne}</div>
                            <input type="range"
                                value={rangeOne}
                                min='0.5'
                                max='1'
                                step='0.1'
                                onChange={e => setRangeOne(e.target.value)}
                                className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer" />
                        </div>
                        <div className="relative mx-5 w-1/2">
                            <label className="text-sm font-medium">Centeralize</label>
                            <div className="inline-flex items-center text-white text-xs bg-black px-2 mx-2">{rangeTwo}</div>
                            <input type="range"
                                value={rangeTwo}
                                min='0'
                                max='400'
                                step='2'
                                onChange={e => setRangeTwo(e.target.value)}
                                className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">Pick Color</label>
                        <div className="flex items-center">
                            <input type="color"
                                value={color}
                                onChange={e => setColor(e.target.value)}
                                className="w-32"
                            />
                            {color !== '' && (
                                <div className="mx-3" onClick={handleCancelColor}><MdCancel className="text-2xl text-red-600" /></div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mx-auto my-2">
                    <div className="flex justify-center items-center text-sm font-medium lowercase text-white bg-blue-500 hover:bg-blue-800 w-16 mx-3" onClick={showCroppedImage}>Ok</div>
                    <div className="flex justify-center items-center text-sm font-medium lowercase text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white w-16 mx-3" onClick={handleCancelEditor}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default CropEditor