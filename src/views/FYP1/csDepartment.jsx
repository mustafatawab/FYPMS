import React from 'react'

function ComputerScience() {
  return (
    <>

<div className="ml-[150px] mt-[50px]">
          <h1 className="text-red-900 font-extrabold text-4xl ">
            FYP 1
          </h1>

          <div className="flex justify-between w-[600px] mt-[50px]  ">
            {/* Section A*/}
            <a href="">
              <div className="shadow-2xl  hover:opacity-80 flex flex-col space-y-5 justify-center rounded-lg items-center w-[250px] h-[250px] bg-slate-300">
                <h1 className="font-bold text-4xl">Department</h1>
                <span className="text-red-900">Computer Science</span>
                <p>Sec A</p>

                <hr />
                <a href="/">Icon Here</a>
              </div>
            </a>
            {/*Section B */}
            <a href="">
              <div className="shadow-2xl  hover:opacity-80 flex flex-col space-y-5 justify-center rounded-lg items-center w-[250px] h-[250px] bg-slate-300">
                <h1 className="font-bold text-4xl">Department</h1>
                <span>Software Engineering</span>
                <p>Sec B</p>
                <hr />
                <a href="/">Icon Here</a>
              </div>
            </a>
          </div>
        </div>
    
    </>
  )
}

export default ComputerScience