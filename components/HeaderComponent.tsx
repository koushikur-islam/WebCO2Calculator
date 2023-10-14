import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
export default function HeaderComponent() {
    return (
        <div className="fixed top-0 w-full py-3 z-40 backdrop-blur-lg backdrop-saturate-100 backdrop-opacity-100 bg-white/30 transition-colors border-b border-slate-900/10">
            <div className="limited-box flex justify-between">
                <div className='ml-3'>
                    <Link href='/'>
                        <p className='m-0 p-0 inline-block text-2xl font-bold text-green-600'>Carbon</p>
                        <p className='m-0 p-0 inline-block text-2xl font-bold'>Calculator</p>
                    </Link>
                </div>
                <div>
                    <Button type='primary' className=' text-white border-green-600 px-8 pt-1 m-0 p-0 mr-2' style={{ backgroundColor: 'var(--primary-color)' }}>FAQ</Button>
                </div>
            </div>
        </div>
    )
}