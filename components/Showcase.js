import Link from 'next/link'
import Image from 'next/image'


const Showcase = () => {
    return (
        <>
            <div className="container mx-auto mt-20 ">
                <p className="text-xl text-center font-extrabold">Të reja</p>
                <div className="max-w-max py-10 flex mx-auto flex-col">
                    <Image
                        src="/../public/images/Round-Eyeglasses-Transparent-Image.png"
                        alt="Round Eyeglasses"
                        layout="intrinsic"
                        width="350"
                        height="[100%]"
                    />
                    <p className="text-blue-500 uppercase text-center py-10">guess</p>
                    <p className="text-center py-4 max-w-sm font-bold">Teknologjia më e përparuar kombinohen brenda këtij stili modern të syzeve klasike</p>
                </div>

                <div className="max-w-max py-10 flex mx-auto flex-col">
                    <Image
                        src="/../public/images/tom-ford.png"
                        alt="Round Eyeglasses"
                        layout="intrinsic"
                        width="350"
                        height="[100%]"
                    />
                    <p className="text-blue-500 uppercase text-center py-10">ray-ban</p>
                    <p className="text-center py-4 max-w-sm font-bold">Koleksionet e CoolVision do të gjeni syze të përsosura transparente për ju...
                    </p>
                </div>

                <div className="max-w-max py-10 flex mx-auto flex-col">
                    <Image
                        src="/../public/images/accessories.jpg"
                        alt="Round Eyeglasses"
                        layout="intrinsic"
                        width="350"
                        height="300"
                    />
                    <p className="text-blue-500 uppercase text-center py-10">ray-ban</p>
                    <p className="text-center py-4 max-w-sm font-bold">Koleksionet e CoolVision do të gjeni syze të përsosura transparente për ju...
                    </p>
                </div>

                
            </div>
        </>
    )
}

export default Showcase
