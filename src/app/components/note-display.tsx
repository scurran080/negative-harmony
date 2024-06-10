const NoteDisplay = ({ notes, selectedKey }) => {
    const positiveNotes = []
    const negativeNotes = []
    const selectedIndex = notes.indexOf(selectedKey)
    for (let i = 0; i < notes.length; i++) {
        let curIndex = (selectedIndex + i + 1) % notes.length;
        if (i < 6) {
            positiveNotes.push(notes[curIndex])
        }
        else {
            negativeNotes.push(notes[curIndex])
        }
        //console.log("Positive Notes: " + positiveNotes);
        //console.log("Negative Notes: " + negativeNotes);
    }
    return (
        <div className="flex justify-center items-center">
            <table className="justify-center">
                <tbody>
                    <tr className="bg-sky-600 justify-center">
                        <td className="p-3 border w-12 text-center">
                            {negativeNotes[5]}
                        </td>
                        <td>
                            ↔
                        </td>
                        <td className="p-3 border w-12 text-center">
                            {positiveNotes[0]}
                        </td>
                    </tr>
                    <tr className="bg-sky-950">
                        <td className="p-3 border text-center w-12">
                            {negativeNotes[4]}
                        </td>
                        <td>
                            ↔
                        </td>
                        <td className="p-3 border text-center w-12">
                            {positiveNotes[1]}
                        </td>
                    </tr>
                    <tr className="bg-sky-600">
                        <td className="p-3 border text-center w-12">
                            {negativeNotes[3]}
                        </td>
                        <td>
                            ↔
                        </td>
                        <td className="p-3 border text-center w-12">
                            {positiveNotes[2]}
                        </td>
                    </tr>
                    <tr className="bg-sky-950">
                        <td className="p-3 border text-center w-12">
                            {negativeNotes[2]}
                        </td>
                        <td>
                            ↔
                        </td>
                        <td className="p-3 border text-center w-12">
                            {positiveNotes[3]}
                        </td>
                    </tr>
                    <tr className="bg-sky-600">
                        <td className="p-3 border text-center w-12">
                            {negativeNotes[1]}
                        </td>
                        <td>
                            ↔
                        </td>
                        <td className="p-3 border text-center w-12">
                            {positiveNotes[4]}
                        </td>
                    </tr>
                    <tr className="bg-sky-950">
                        <td className="p-3 border text-center w-12">
                            {negativeNotes[0]}
                        </td>
                        <td>
                            ↔
                        </td>
                        <td className="p-3 border text-center w-12">
                            {positiveNotes[5]}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default NoteDisplay;