import Image from "next/image";

export default function NotFoundPage() {
    return (<>
        <div className="flex justify-center" style={{ marginTop: '7%' }}>
            <Image src='/notfound.gif' style={{ width: '100%', maxWidth: 400 }} width={300} height={300} alt="No image..." ></Image>
        </div>
    </>)
}