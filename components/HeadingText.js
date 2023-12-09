

const HeadingText = ({ heading, para }) => {
    return(
        <>
        <h3   className=' pt-10' style={{ fontWeight: '600' }} >
{heading}
</h3>

<p dangerouslySetInnerHTML={{ __html: {para}
 }}  style={{ lineHeight: '25px', paddingBottom: '10px' }} className='text-gray-600 text-[14px] pt-3'>
</p>
        </>

    )


}

export default  HeadingText;