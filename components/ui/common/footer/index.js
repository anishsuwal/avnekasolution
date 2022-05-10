



export default function Footer(){

    return (

    <footer className="pt-4">
        <div className="container mx-auto px-6 border-t-2">
            <div className="mt-5 flex flex-col items-center">
            <div className="py-2">
                <p className="mb-6  text-sm text-primary-2 font-bold">
                    © {new Date().getFullYear()} avnekasolution, avnekasolution@gmail.com, +977 9748265421
                </p>
            </div>
            </div>
        </div>
    </footer>
        
    )
}