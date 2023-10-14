export default function FooterComponent() {
    return (<>
        <div className="text-center py-5" style={{ backgroundColor: '#222831' }}>
            <div className="limited-box md:mb-0" style={{ color: 'var(--muted-bg)' }}>
                <div>
                    <p className='m-0 p-0 inline-block text-2xl font-bold text-green-600'>Carbon</p>
                    <p className='m-0 p-0 inline-block text-2xl font-bold'>Calculator</p>
                </div>
                <p className="py-2">
                Verify your website's carbon emission. Raise awareness for a better tomorrow.
                </p>
            </div>
        </div>
        <div className="text-center bg-black text-zinc-400">
            <p className="py-3 px-5">
                © {new Date().getFullYear()} CarbonCalculator. All rights reserved.
            </p>

        </div>
    </>)
}