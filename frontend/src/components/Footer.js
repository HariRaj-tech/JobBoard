

function Footer() {
    return (
        <div className="container mx-auto text-center border-t-2">
            <h2 className='font-bold text-xl mt-5 '>Job Board</h2>
            <p>JobBoard is the best resource to discover and connect with employers and employees worldwide.</p>
            <div className="container mx-auto my-5 flex justify-evenly border-b-2 pb-3 ">
                <div>
                    <h1 className='font-bold'>Resources</h1>
                    <ul className='text-md'>
                        <li><a href='#'>About us</a></li>
                        <li><a href='#'>Our Team</a></li>
                        <li><a href='#'>Products</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>Community</h1>
                    <ul className='text-md'>
                        <li><a href='#'>Feature</a></li>
                        <li><a href='#'>Pricing</a></li>
                        <li><a href='#'>Credit</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>Quick links</h1>
                    <ul className='text-md'>
                        <li><a href='#'>iOS</a></li>
                        <li><a href='#'>Android</a></li>
                        <li><a href='#'>Microsoft</a></li>
                        <li><a href='#'>Desktop</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>More</h1>
                    <ul className='text-md'>
                        <li><a href='#'>Privacy</a></li>
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'>Terms</a></li>
                        <li><a href='#'>FAQ</a></li>
                    </ul>
                </div>
            </div>
            <p className='pb-5'>Copyright © 2022. JobBox all right reserved</p>
        </div>
    );
}
