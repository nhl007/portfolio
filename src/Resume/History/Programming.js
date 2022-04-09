export default function Programing() {

    const value=[
        {
            Text:"JavaScript",
            percentage: 90
        },
        {
            Text:"ReactJs",
            percentage: 90
        },
        {
            Text:"NodeJs",
            percentage: 90
        },
        {
            Text:"C++",
            percentage: 70
        },
        {
            Text:"Java",
            percentage: 60
        },
        {
            Text:"Python",
            percentage: 40
        }

    ]
    return(
        <>
        <div>
        <div className="flex flex-row flex-wrap justify-start">
            {
                value.map((key,value)=>{
                    return(
                       <div className="flex flex-col m-7 justify-between">
                        <div className=" text-red-500 h-5 w-20 my-4">
                            <span>{key.Text}</span>
                        </div>

                        <div className=" bg-black">
                        <div className=" bg-green-500 h-5" 
                        style={{width:`${key.percentage}%`}}
                        > 
                        {''}
                        </div>
                        </div>
                        
                        </div>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}