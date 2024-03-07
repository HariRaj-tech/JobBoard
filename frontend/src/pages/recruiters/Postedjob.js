import Banner from '../../assets/Group.png';

function Postedjob() {

    return (
        <div>
            <div className="container">
                <div className="bg-[#102048] mt-5 px-5 py-3 rounded-md flex justify-between ">
                    <div className='px-3 py-5'>
                        <h2 className="text-[#fff] leading-4 text-[35px] mb-5 font-normal">AliThemes</h2>
                        <div className="flex gap-3">
                            <div className='border-[1px] border-[#dee2e6]  text-[#ffff] rounded-md px-3 py-2'>
                                <h4 className='mb-2 text-[#ffff]'>Job Posts</h4>
                                <p>345</p>
                            </div>
                            <div className='border-[1px] border-[#dee2e6] text-[#ffff] rounded-md px-3 py-2'>
                                <h4 className='mb-2 text-[#ffff]'>Total Application</h4>
                                <p>2670</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Banner} alt="image" />
                    </div>
                </div>
                <div className='border-[1px] border-[#dee2e6] rounded-md mt-4 px-3 py-3'>
                    <div>
                        <h3 className="text-[25px]">Recent Job Posts</h3>
                    </div>
                    <div className='bg-[#d1dce8] rounded-md mt-3 flex justify-between py-2 px-3'>
                        <div>Job Title</div>
                        <div>Category</div>
                        <div>Dead Line</div>
                        <div>Applications</div>
                        <div>Status</div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between p-3 border-b-[1px] border-[#dee2e6]'>
                            <div className='w-[25%] '><span>UI UX Designer</span></div>
                            <div className='w-[25%] '><span>Full Time</span></div>
                            <div className='w-[25%] text-left'>12/04/2024</div>
                            <div className='w-[25%] text-left'>135</div>
                            <div className=' py-2 px-3 bg-[#6FCF97] rounded-md'>Active</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postedjob;