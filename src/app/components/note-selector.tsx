const NoteSelector = ({ notes, selectedKey, handleKeySelect }) => {
    return (
        <div className="text-center p-4">
            <p>
                Select Key
            </p>
            {
                notes.map((note, i: number) => {
                    if(note === selectedKey){
                        return (
                            <div key={i} className="inline-flex justify-between p-4">
                                <button key={i} className="bg-sky-600 border-2 border-white rounded-lg w-7 h-7 text-center m-0">
                                    {note}
                                </button>
                            </div>
                        )
                    }else{
                        return (
                            <div key={i} className="inline-flex justify-between p-4">
                                <button key={i} className=" bg-sky-950 border-2 border-white rounded-lg w-7 h-7 text-center m-0" onClick={() => {
                                    handleKeySelect(note)
                                }}>
                                    {note}
                                </button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default NoteSelector;