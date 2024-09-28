import React from "react";

const Templates = () => {
    const templates = [
        { title: "AI Template", description: "A modern resume template designed for AI professionals.", image: require("./images/simple_classic_resume_template_de9201e182.png") },
        { title: "Modern Template", description: "A sleek and stylish resume template for modern jobs.", image: require("./images/simple_classic_resume_template_de9201e182.png") },
        { title: "Traditional Template", description: "A classic resume template for traditional roles.", image: require("./images/simple_classic_resume_template_de9201e182.png") },
        { title: "Simple Template", description: "A clean and simple resume template for any job.", image: require("./images/simple_classic_resume_template_de9201e182.png") },
        { title: "Creative Template", description: "A vibrant and creative resume template.", image: require("./images/simple_classic_resume_template_de9201e182.png") },
        { title: "Professional Template", description: "A professional resume template for any industry.", image: require("./images/simple_classic_resume_template_de9201e182.png") },
    ];

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-center text-2xl text-blue-800 mt-5 font-semibold" style={{ width: '400px', height: 'auto' }}>Resume Template</h1>
            </div>
            <div className="mt-2 text-center" style={{fontWeight: '100', fontFamily: 'sans-serif', fontSize: '18px', lineHeight: '30px'}}>
                <p>Choose a free Resume Template and build your resume.
                    Use our <br />intuitive drag-and-drop resume builder and save it as a PDF in minutes.
                    Start<br /> building your resume right now.
                </p>
            </div>
            <div className="mt-10 flex justify-evenly">
                <button className="bg-blue-200 rounded-xl w-40 h-10">AI Templates</button>
                <button className="bg-blue-200 rounded-xl w-40 h-10">Modern</button>
                <button className="bg-blue-200 rounded-xl w-40 h-10">Traditional</button>
                <button className="bg-blue-200 rounded-xl w-40 h-10">Simple</button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 px-20">
                {templates.map((template, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '299px', height: '500px' }}>
                        <img src={template.image} alt={template.title} className="w-full h-64 object-cover"/>
                        <div className="p-4 flex flex-col justify-between h-full">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Templates;
