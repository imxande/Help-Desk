export const setStatus = (currentStatus) => {
    // Default color per ticket status
    const statusColor = {
        "Open" : "#1bbc9c",
        "In Process": "#f900ea",
        "On Hold": "#e65100",
        "Closed": "#6bc950"
    }

    // find related status color
    for (const defaultStatus in statusColor ) {
        // store each default status color
        const correspondingColor = statusColor[defaultStatus];
        if (currentStatus === defaultStatus)  return correspondingColor;
    }
}