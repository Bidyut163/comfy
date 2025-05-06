const About = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
                <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
                    We love
                </h1>
                <div className="stats bg-primary shadow">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            comfy
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
                Discover a cozy haven at Comfy, your go-to destination for
                stylish home decoration products.Our carefully curated selection
                is designed to enhance any space, making it perfect for everyone
                looking to add a touch of comfort and charm to their home.
            </p>
        </>
    );
};

export default About;
