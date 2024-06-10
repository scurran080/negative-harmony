const InfoSection = () => {
    return(
        <div className="flex-col items-center text-center">
            <h3 className="mb-2 underline">
                What is negative harmony?
            </h3>
            <p className="text-sm underline">
                Check out these resources.
            </p>
            <a href="https://www.youtube.com/watch?v=Y7vz0zBP3V8" className="text-xs text-sky-600">
                Video by Polychron Productions
            </a>
            <br/>
            <a href="https://www.youtube.com/watch?v=aewI1F8bA8M" className="text-xs text-sky-600">
                Video by George Collier
            </a>
            <br/>
            <a href="https://www.beyondmusictheory.org/cadences-and-negative-harmony/" className="text-xs text-sky-600">
                Beyond Music Theory
            </a>
        </div>
    )
}

export default InfoSection;